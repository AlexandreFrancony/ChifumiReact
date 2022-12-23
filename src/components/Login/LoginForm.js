import React from 'react'
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } 
    else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://fauques.freeboxos.fr:3000/login', {
      method: 'POST',
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: username,
        password: password
      }),
    })
    .then(response => response.json())
    .then(data =>{ 
      console.log(data); 
      (localStorage.setItem('token', data.token))
      navigate('/partylist')
    });
  };

  return (
    <div className="form" autoComplete="off">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit}>
      <div className="username">
          <label className="form-label">Username</label><br />
          <input className="form-input" type="text"  id="username" value={username} onChange = {(e) => handleInputChange(e)} placeholder="Username"/>
        </div>
        <div className="password">
          <label className="form-label">Password</label><br />
          <input className="form-input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
        </div>
        <div className="submit">
          <button className="form-button" type='Submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm