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

    //récupérer les données du match
    useEffect(() => {
        getMatchData();
        setMatchid(getMatchId());
        setTurnid(getTurnId());
    }, [])

    function getMatchData() {
        
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' ,
                        Authorization: 'Bearer ' + localStorage.getItem('token')}
        };
        fetch('http://fauques.freeboxos.fr:3000/matches/'+matchid, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsername1(data.user1.username);
                setUsername2(data.user2.username);
            });
    }


    function getTurnId() {
        let url = window.location.href;
        let url_split = url.split('/');
        let id = url_split[url_split.length-1];
        console.log('turnid:'+id);
        return id;
    }

    function getMatchId() {
        let url = window.location.href;
        //split url selon le caractère '/'
        let url_split = url.split('/');
        //récupérer l'idmatch dans l'url (avant dernier élément du tableau)
        let id = url_split[url_split.length-3];
        console.log('matchid:'+id);
        return id;
    }

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
            <h3>{'ID of the current turn : ' + turnid}</h3>
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