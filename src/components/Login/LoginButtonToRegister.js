import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";

export default function LoginButtonToRegister() {

  return (
    <>
      <div>
        <Link to='/register'>
            <button className='bout'>Don't have an account yet?</button>
        </Link>
      </div>
    </>
  )
}