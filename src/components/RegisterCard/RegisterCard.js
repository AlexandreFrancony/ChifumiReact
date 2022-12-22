import React, {useState} from 'react';
import './styles.css'

export default function RegisterCard() {

  const [username, setUsername] = useState("");
  const [password,setPassword] = useState("");

  function handleInputChange(e) {
    const {id , value} = e.target;
    switch (id) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        console.log("error in switch handleInputChange");
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password})
  };
  fetch('http://fauques.freeboxos.fr:3000/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="title">Registration Form</div>
        <div className="username">
          <label className="form-label">Username</label><br />
          <input 
            value={username}
            id="username"
            type="text"
            onChange = {(e) => handleInputChange(e)}
            className="form-input"
            placeholder="Username"
          />
        </div>
        <div className="password">
          <label className="form-label">Password</label><br />
          <input 
            value={password}
            id="password"
            type="password" 
            onChange = {(e) => handleInputChange(e)} 
            className="form-input" 
            placeholder="Password"
          />
        </div>
        <div className="submit">
          <button type="submit" className="form-button">Register</button>
        </div>
      </form>
    </>
  )
}

/* possiblilité à implémenter

  const [confirmPassword,setConfirmPassword] = useState(null);

    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

        <div className="confirmPassword">
          <label className="form-label">Confirm Password</label><br />
          <input className="form-input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
        </div>

*/