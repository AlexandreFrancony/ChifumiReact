import React from 'react'
import './styles.css';

export default function LoginButtonToRegister() {

  return (
    <>
      <div>
        <input type="button" onclick="window.location.href = 'http://localhost:3000/register';" value="Pas encore de compte?" />
      </div>
    </>
  )
}