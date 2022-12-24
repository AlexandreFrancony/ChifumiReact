import React from 'react'
import {useState, useEffect} from 'react';
import './styles.css';
import { Button } from '@mui/material';

export default function InGameTiles() {

    const [username1, setUsername1] = useState("");
    const [username2, setUsername2] = useState("");
    const [matchid, setMatchid] = useState("");
    const [turnid, setTurnid] = useState("");
    const [choice, setChoice] = useState("");

    /*setUsername1(localStorage.getItem('username1'));
    setUsername2(localStorage.getItem('username2'));
    setMatchid(localStorage.getItem('matchid'));
    setTurnid(0);*/

    //fonction qui permet de récupérer l'idturn de la partie dans l'url selon cet exemple : http://localhost:3000/matches/:idmatch/turns/:idTurn
    function getTurnId() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') + 1);
        console.log('turnid:'+id);
        return id;
    }

    //fonction qui permet de récupérer l'idmatch(int) de la partie dans l'url selon cet exemple : http://localhost:3000/matches/:idmatch/turns/:idTurn
    function getMatchId() {
        let url = window.location.href;
        let id = url.substring(url.lastIndexOf('/') - 1, url.lastIndexOf('/'));
        console.log('matchid:'+id);
        return id;
    }

    useEffect(() => {
        setMatchid(getMatchId());
        setTurnid(getTurnId());
    }, []) 

    function HandleClick (e) {
        switch (e) {
            case "rock":
                setChoice('rock');
                break;
            case "paper":
                setChoice('paper');
                break;
            case "scissors":
                setChoice('scissors');
                break;
            default:
                console.log("error in switch handleChange");
                break;
        }
    }

    function Request() { 
        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({'move': choice})
    };
    fetch('http://fauques.freeboxos.fr:3000/matches/'+matchid+'/turns/'+turnid, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTurnid(data.turnid)
        });
        console.log(requestOptions)
    }

    useEffect(() => {
        if (choice) {
            Request()
        }
    }, [choice])

    return(
        <div className="Wrapper">
            <h2>{username1 + ' vs ' + username2}</h2>
            <h3>{'ID of the current match : ' + matchid}</h3>
            <div className="tiles">
                <div className="Card">
                    <h3 className='icons'>Rock</h3>
                    <div className='icons'>
                        👊
                    </div>
                    <Button variant="text" onClick={(e) => HandleClick('rock')}>Select</Button>
                </div>
                <div className="Card">
                    <h3 className='icons'>Paper</h3>
                    <div className='icons'>
                        🖐
                    </div>
                    <Button variant="text" onClick={(e) => HandleClick('paper')}>Select</Button>
                </div>
                <div className="Card">
                    <h3 className='icons'>Scissors</h3>
                    <div className='icons'>
                        ✌️
                    </div>
                    <Button variant="text" onClick={(e) => HandleClick('scissors')}>Select</Button>
                </div>
            </div>
        </div>
    );
}