import React from 'react'
import Header from '../../components/Header/Header'
import LoginForm from '../../components/Login/LoginForm'

function Login() {
  return (
    <div>
      {/* Page Header */}
      <Header/>

      {/* Page Content */}
      <LoginForm/>
    </div>
  )
}

export default Login