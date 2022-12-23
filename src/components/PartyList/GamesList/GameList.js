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
            <div className="games">
                <h2>Games</h2>
                <ul>
                    {games.map(game => (
                        <li key={game._id}>
                            {game._id}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}
export default GameList