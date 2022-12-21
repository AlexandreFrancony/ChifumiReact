import React from 'react'
import './styles.css';

function LoginCard() {
  return (
    <div>
      <form action="" methode="post">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="form-control" />
        </div>
      </form>
    </div>
  )
}

export default LoginCard