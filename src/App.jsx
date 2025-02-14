import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import EventDetails from './pages/EventDetails'
import SubmitEvent from './pages/SubmitEvent'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Event Details; dit moet vervangen worden door id */}
        <Route path="/event-details" element={<EventDetails />} />
        <Route path="/submit-event" element={<SubmitEvent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
