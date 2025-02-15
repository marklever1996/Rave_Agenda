import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Sidebar from '../../components/admin/Sidebar'
import './DashboardPage.css'

const DashboardPage = () => {
  const navigate = useNavigate()
  // Login check; als de gebruiker niet is ingelogd, wordt hij doorgestuurd naar de login pagina
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    if (!isLoggedIn || !token) {
      navigate('/login')
    }
  }, [isLoggedIn, token, navigate])

  const recentEvents = [
    { id: 1, title: 'NIGHT SHIFT', date: '2024-03-15', status: 'published' },
    { id: 2, title: 'Techno Tuesday', date: '2024-03-18', status: 'draft' },
    { id: 3, title: 'Underground Sessions', date: '2024-03-20', status: 'published' }
  ]

  const recentBlogs = [
    { id: 1, title: 'Top 10 Venues in Groningen', date: '2024-03-10', views: 234 },
    { id: 2, title: 'The Rise of Underground Raves', date: '2024-03-08', views: 189 }
  ]

  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="action-buttons">
            <Link to="/createEvent" className="create-button">
              <i className="fas fa-plus"></i>
              Nieuw Event
            </Link>
            <Link to="/createBlog" className="create-button">
              <i className="fas fa-plus"></i>
              Nieuwe Blog
            </Link>
          </div>
        </div>

        <div className="dashboard-grid">
          <section className="dashboard-section">
            <div className="section-header">
              <h2>Recent Events</h2>
              <Link to="/admin/events" className="view-all">View All</Link>
            </div>
            <div className="items-list">
              {recentEvents.map(event => (
                <div key={event.id} className="list-item">
                  <div className="item-info">
                    <h3>{event.title}</h3>
                    <p>{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`status-badge ${event.status}`}>
                    {event.status}
                  </span>
                  <button className="edit-button">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="dashboard-section">
            <div className="section-header">
              <h2>Recent Blogs</h2>
              <Link to="/admin/blogs" className="view-all">View All</Link>
            </div>
            <div className="items-list">
              {recentBlogs.map(blog => (
                <div key={blog.id} className="list-item">
                  <div className="item-info">
                    <h3>{blog.title}</h3>
                    <p>{new Date(blog.date).toLocaleDateString()}</p>
                  </div>
                  <button className="edit-button">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
