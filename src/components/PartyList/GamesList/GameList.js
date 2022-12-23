import React from 'react'
import { useState, useEffect } from "react";
import './styles.css';

function GameList() {
    const [games, setGames] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    
    useEffect(() => {
        fetch("http://fauques.freeboxos.fr:3000/matches", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('token') 
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setIsLoaded(true);
            setGames(data);
        })
    }, []);


    if (!isLoaded) {
        return <div className="Nomacth">No match for now... Create a match !</div>;
    } else {
        return (
            <div className="game-wrap">
                {games.map(game => (
                    <div className="game" key={game._id}>
                        <div className="game-id">
                            <p>Game ID: {game._id}</p>
                        </div>
                        <div className="game-players">
                            <p>Player 1: {game.user1.username}</p>
                        </div>
                        <div className="game-players">
                            <p>Player 2: {game.user2 ? game.user2.username : "Pas de deuxième joueur"}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

}
export default GameList