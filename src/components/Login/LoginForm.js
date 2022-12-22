import React from 'react'
import './styles.css';

function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    const data = new FormData(event.target);
    fetch('http://fauques.freeboxos.fr:3000', {
      method: 'POST',
      body: data,
    });
  };

  return (
    <div className="form">
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
          <button onClick={()=>handleSubmit()} type="submit" className="form-button">Register</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm