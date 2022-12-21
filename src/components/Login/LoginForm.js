import React from 'react'
import './styles.css';

function LoginForm() {
  // async function SubmitLogin() {
  //   await fetch("http://fauques.freeboxos.fr:3000", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ ... }),
  //   }).then((response) => response.json());
  //   getCards();
  // }

  return (
    <>
      <div className="form">
        <div className="title">Registration Form</div>
        <div className="username">
          <label className="form-label">Username</label><br />
          <input className="form-input" type="text" placeholder="Username"/>
        </div>
        <div className="password">
          <label className="form-label">Password</label><br />
          <input className="form-input" type="password" placeholder="Password"/>
        </div>
        <div className="submit">
          <button className="form-button">Submit</button>
        </div>
      </div>
    </>
  )
}
export default LoginForm