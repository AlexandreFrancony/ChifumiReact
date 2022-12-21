import React from 'react'
import './styles.css'

export default function RegisterCard() {
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