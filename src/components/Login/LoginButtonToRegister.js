import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";

export default function LoginButtonToRegister() {

  return (
    <>
      <div>
        <Link to='/register'>
            <button className='bout'>Pas encore de compte?</button>
        </Link>
      </div>
    </>
  )
}