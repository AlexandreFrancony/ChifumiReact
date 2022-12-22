import React, {useState} from 'react';
import './styles.css'

export default function RegisterCard() {
  const [username, setUsername] = useState(null);
  const [password,setPassword] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "username"){
        setUsername(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  const handleSubmit  = () => {
    console.log(username,password);
  }

  return (
    <>
      <div className="form">
        <div className="title">Registration Form</div>
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
      </div>
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