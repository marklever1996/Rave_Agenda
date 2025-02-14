import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import EventDetails from './pages/EventDetails'
import SubmitEvent from './pages/SubmitEvent'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'
// import EventsPage from './pages/admin/EventsPage'
// import BlogsPage from './pages/admin/BlogsPage'

// We maken een wrapper component die useLocation kan gebruiken
function AppContent() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/dashboard')

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Event Details; dit moet vervangen worden door id */}
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path="/admin/events" element={<EventsPage />} />
        <Route path="/admin/blogs" element={<BlogsPage />} /> */}
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
