import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { EventSourcePolyfill } from "event-source-polyfill";

export default function InGameTiles() {
  const [turnid, setTurnid] = useState("");
  const [choice, setChoice] = useState("");

  const [intel, setIntel] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const [p1move, setP1move] = useState("");
  const [p2move, setP2move] = useState("");
  const [tended, setTended] = useState("");
  const [mended, setMended] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const eventSource = new EventSourcePolyfill(
      `http://fauques.freeboxos.fr:3000/matches/${id}/subscribe`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    eventSource.onmessage = (e) => {
      console.log(e);
      const data = JSON.parse(e.data);
      console.log(data);
      switch (data){
        case "PLAYER1_MOVED":
          setP1move(data);
          break;
        case "PLAYER2_MOVED":
          setP2move(data);
          break;
        case "TURN_ENDED":
          setTended(data);
          break;
        case "MATCH_ENDED":
          setMended(data);
          break;
        case "NEW_TURN":
          setTurnid(data.payload.turnId);
          break;
        default:
          console.log("error in switch eventSource");
          break;
      }
    };
    return () => {
      eventSource.close();
    };
  }, [id]);

  useEffect(() => {
    fetch(`http://fauques.freeboxos.fr:3000/matches/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsLoaded(true);
        setIntel(data);
        setTurnid(1);
      });
  }, [id]);

  function HandleClick(c) {
    //TODO : gestion du click sur les boutons selon l'utilisateur et le tour ainsi que le choix de l'adversaire




    switch (c) {
      case "rock":
        setChoice("rock");
        break;
      case "paper":
        setChoice("paper");
        break;
      case "scissors":
        setChoice("scissors");
        break;
      default:
        console.log("error in switch handleChange");
        break;
    }
  }

  function Request() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ move: choice }),
    };
    fetch(
      "http://fauques.freeboxos.fr:3000/matches/" + intel._id + "/turns/" + turnid,requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setChoice("");
        if (mended.type === "MATCH_ENDED") {
          navigate("/partylist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (choice) {
      Request();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choice]);

  if (!isLoaded) {
    return (
      <div>
        Error loading ther game, return to the Game List.
        <Link to="/partylist">
          <Button variant="outlined" color="error">
            Return to GameList
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="Wrapper">
        <h2>{intel.user1.username + " vs " + intel.user2.username}</h2>
        <h3>{"ID of the current match : " + intel._id}</h3>
        <h3>{"Turn n°" + turnid}</h3>
        <div className="tiles">
          <div className="Card">
            <h3 className="icons">Rock</h3>
            <div className="icons">👊</div>
            <Button variant="text" onClick={(e) => HandleClick("rock")}>
              Select
            </Button>
          </div>
          <div className="Card">
            <h3 className="icons">Paper</h3>
            <div className="icons">🖐</div>
            <Button variant="text" onClick={(e) => HandleClick("paper")}>
              Select
            </Button>
          </div>
          <div className="Card">
            <h3 className="icons">Scissors</h3>
            <div className="icons">✌️</div>
            <Button variant="text" onClick={(e) => HandleClick("scissors")}>
              Select
            </Button>
          </div>
        </div>
        <div className="return-to-gamelist-button">
        <Link to="/partylist" className="link">
          <Button variant="contained">Return to GameList</Button>
        </Link>
        </div>
      </div>
    );
  }
}
