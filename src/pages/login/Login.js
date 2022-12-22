import React from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/Login/LoginForm'
import LoginButtonToRegister from '../../components/Login/LoginButtonToRegister'


export default function Register() {
  return (
    <div>
      <Header />

      <LoginForm/>

      <LoginButtonToRegister/>
    </div>
  )
}