import React from 'react'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import './styles.css'

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogged(true)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  return (
    <div className="header">
      <div className="logo">
      <h1>Chi-Fou-Mi</h1>
      </div>
      {isLogged ? (
        <Link to='/' className="link">
        <Button variant="outlined" color="error" onClick={handleLogout}>Log out</Button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}