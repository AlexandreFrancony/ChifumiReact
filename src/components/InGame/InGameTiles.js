import React from 'react'
import { useState} from 'react';
import './styles.css';

export default function InGameTiles() {

    const [username1, setUsername1] = useState("");
    const [username2, setUsername2] = useState("");
    const [matchid, setMatchid] = useState("");
    const [turnid, setTurnid] = useState("");

    /*setUsername1(localStorage.getItem('username1'));
    setUsername2(localStorage.getItem('username2'));
    setMatchid(localStorage.getItem('matchid'));
    setTurnid(0);*/

    function HandleClick() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ matchid: matchid, username: username1, choice: 'pierre'})
        };
        fetch('http://fauques.freeboxos.fr:3000/matches/'+matchid+'/turns/'+turnid, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                (localStorage.setItem('turnid', data.idTurn))
            });
    }


    return(
        <div className="Wrapper">
            <h2>{username1 + ' vs ' + username2}</h2>
            <h3>{'ID of the current match : ' + matchid}</h3>
            <div className="tiles">
                <div className="Card" onClick={HandleClick}>
                    <h3>Pierre</h3>
                    <div>
                        👊
                    </div>
                </div>
                <div className="Card">
                    <h3>Feuille</h3>
                    <div>
                        🖐
                    </div>
                </div>
                <div className="Card">
                    <h3>Ciseau</h3>
                    <div>
                        ✌️
                    </div>
                </div>
            </div>
        </div>
    );
}