import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./styles.css";

function GameDetails() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://fauques.freeboxos.fr:3000/matches", {
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
        setGames(data);
      });
  }, []);

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
      <div>
        {games.map((game) => (
          <div className="game" key={game._id}>
            <div className="game-id">
              <p>Game ID: {game._id}</p>
            </div>
            <div className="game-players">
              <p>Player 1: {game.user1.username}</p>
            </div>
            <div className="game-players">
              <p>Player 2: {game.user2.username}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GameDetails;
