import React from 'react'
import {useState, useEffect} from 'react'
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
        <Link to='/'>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}