import React from 'react'
import './styles.css';
import Button from '@mui/material/Button';

export default function CreateGame() {

    const handleClick = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    },
  };
  fetch('http://fauques.freeboxos.fr:3000/matches', requestOptions)
      .then(response => response.json())
      .then(data => {console.log(data);
         window.location.reload()});
  };

  return (
    <>
      <div className="create-game">
        <Button className="create-game-button" onClick={handleClick} variant="outlined">Créer une partie</Button>
      </div>
    </>
  )
}