import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import '../styles/global.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">RAVE AGENDA</Link>
      
      <div className="nav-links">
        <select className="nav-select">
          <option>Groningen</option>
          <option>Amsterdam</option>
          <option>Rotterdam</option>
          <option>Utrecht</option>
        </select>

        <input 
          type="text" 
          placeholder="Search events..." 
          className="search-input"
        />

        <Link to="/submit-event" className="submit-btn">
          + SUBMIT EVENT
        </Link>
      </div>
    </header>
  )
}

export default Header 