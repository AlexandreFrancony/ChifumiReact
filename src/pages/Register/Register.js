import React from 'react'
import RegisterCard from '../../components/RegisterCard/RegisterCard'
import Header from '../../components/Header/Header'
import RegisterButtonToLogin from '../../components/RegisterCard/RegisterButtonToLogin'

export default function Register() {
  return (
    <div>
      <Header />
      
      <RegisterCard />

      <RegisterButtonToLogin/>
    </div>
  )
}