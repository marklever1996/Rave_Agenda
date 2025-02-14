import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempt:', credentials)
  }

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>RAVE AGENDA</h1>
          <p>Admin Dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="admin@raveagenda.nl"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="••••••••"
            />
            <Link to="/forgot-password" className="forgot-password">
              Wachtwoord vergeten?
            </Link>
          </div>

          <button type="submit" className="login-button">
            Login
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage 