import React from 'react'
import './styles.css';

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
      .then(data => console.log(data));
  };

  return (
    <>
      <div className="create-game">
        <button className="create-game-button" onClick={handleClick}>Créer une partie</button>
      </div>
    </>
  )
}