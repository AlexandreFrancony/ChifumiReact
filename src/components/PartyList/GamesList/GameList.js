import React from 'react'
import { useState, useEffect } from "react";
import './styles.css';

function GameList() {

    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch('http://fauques.freeboxos.fr:3000')
        .then(response => response.json())
        .then(data => setGames(data));
    }, []);


  return (
    <div>
        {games.map((game) => (
            <div key={game.id}>
                <h1>{game.name}</h1>
                <p>{game.description}</p>
            </div>
        ))}
    </div>
  )
}

export default GameList