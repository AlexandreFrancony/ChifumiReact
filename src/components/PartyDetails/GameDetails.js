import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { GiBattleAxe } from "react-icons/gi";
import "./styles.css";

function GameDetails() {
  const [gamedetail, setGameDetail] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();

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
        setGameDetail(data);
      });
  }, [id]);

  if (!isLoaded) {
    return (
      <div>
        Error, loading game, return to the Game List.
        <Link to="/partylist">
          <Button variant="outlined" color="error">
            Return to GameList
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="game-details">
        <div className="game-id">
          <p>Game ID: {gamedetail._id}</p>
        </div>
        <div className="game-players">
          <p>Player 1: {gamedetail.user1.username}</p>
        </div>
        <h1>
          <GiBattleAxe />
        </h1>
        <div className="game-players">
          <p>
            Player 2:
            {gamedetail.user2
              ? gamedetail.user2.username
              : "Waiting for another player..."}
          </p>
          <br />
          <p>
            Winner: {gamedetail.winner ? gamedetail.winner.username : "None"}
          </p>
        </div>
        <div className="go-to-match-button">
          <Link to={`/matches/${gamedetail._id}`} className="link">
            <Button variant="contained" disableElevation color="success">
              Go to the match !
            </Button>
          </Link>
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

export default GameDetails;
