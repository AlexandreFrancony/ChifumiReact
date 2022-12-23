import React from 'react'
import './styles.css';
import { Link } from "react-router-dom";

export default function LoginButtonToRegister() {

  return (
    <>
      <div>
        <Link to='/'>
            <button className='bout'>Already have an account ?</button>
        </Link>
      </div>
    </>
  )
}