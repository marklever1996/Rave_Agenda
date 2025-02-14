import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h2>RAVE AGENDA</h2>
        <p>Admin Panel</p>
      </div>

      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
          <i className="fas fa-home"></i>
          Dashboard
        </Link>
        
        <Link to="/admin/blogs" className={`nav-item ${isActive('/admin/blogs') ? 'active' : ''}`}>
          <i className="fas fa-calendar-alt"></i>
          Blogs
        </Link>

        <Link to="/admin/events" className={`nav-item ${isActive('/admin/events') ? 'active' : ''}`}>
          <i className="fas fa-calendar-alt"></i>
          Events
        </Link>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-button">
          <i className="fas fa-sign-out-alt"></i>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar 