import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// Redux: dit is nodig om de login action te gebruiken
import { useDispatch } from 'react-redux' 
// authSlice: dit is de slice die de login action bevat
import { login } from '../../store/slices/authSlice'
import './LoginPage.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const LoginPage = () => {
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      console.log('Sending credentials:', credentials)
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      });

      console.log('Response status:', response.status)
      const data = await response.json();
      console.log('Response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Dispatch login action met token en user data
      dispatch(login({
        token: data.token,
        user: { email: data.email }
      }))
      
      // Redirect naar dashboard
      navigate('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
      setError(error.message || 'Er ging iets mis bij het inloggen. Probeer het opnieuw.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="admin-login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>RAVE AGENDA</h1>
          <p>Admin Dashboard</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              placeholder="admin@raveagenda.nl"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              placeholder="••••••••"
              disabled={isLoading}
            />
            <Link to="/forgot-password" className="forgot-password">
              Wachtwoord vergeten?
            </Link>
          </div>

          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              <>
                Login
                <i className="fas fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage