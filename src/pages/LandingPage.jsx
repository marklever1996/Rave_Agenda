import { useState } from 'react'
import './LandingPage.css'
import '../styles/global.css'
import ParadigmFestival from '../assets/Voorbeeld.jpg'
import FilterSidebar from '../components/LandingPage/FilterSidebar'
import EventCard from '../components/LandingPage/EventCard'
import EventListItem from '../components/LandingPage/EventListItem'
import Pagination from '../components/LandingPage/Pagination'

const LandingPage = () => {
  const highlightedEvents = [
    {
      date: "10 AUG",
      title: "NIGHT SHIFT",
      venue: "OOST",
      tags: ["House", "Deep House"],
      location: "Groningen",
      image: ParadigmFestival
    },
    {
      date: "15 AUG",
      title: "NIGHT SHIFT",
      venue: "OOST",
      tags: ["House", "Deep House"],
      location: "Groningen",
      image: ParadigmFestival
    },
    {
      date: "22 AUG",
      title: "UNDERGROUND SESSIONS",
      venue: "Suikerunie",
      tags: ["Techno", "Industrial"],
      location: "Groningen",
      image: ParadigmFestival
    }
  ]

  const upcomingEvents = [
    'KOPJEK FESTIVAL',
    'TECHNO NIGHT',
    'DEEP HOUSE SESSIONS',
    'DRUM & BASS INVASION',
    'TRANCE UNITY'
  ]

  return (
    <div className="landing-page">
      
      <div className="content-wrapper">
        <FilterSidebar />

        <div className="main-content">
          <div className="breadcrumb">
            Home / Netherlands / Groningen
          </div>

          <h1 className="city-title">GRONINGEN</h1>

          <section className="highlighted-events">
            <h2>HIGHLIGHTED EVENTS</h2>
            <div className="event-carousel">
              {highlightedEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </section>

          <section className="agenda">
            <div className="agenda-header">
              <h2>UPCOMING EVENTS</h2>
            </div>

            <div className="event-list">
              {upcomingEvents.map((title, index) => (
                <EventListItem
                  key={index}
                  day="FRI"
                  date={6 + index}
                  month="DEC"
                  image={ParadigmFestival}
                  title={title}
                  time="23:00 - 08:00"
                  genre="House, Techno"
                  location="Graanfabriek, Groningen"
                />
              ))}
            </div>

            <Pagination />
          </section>
        </div>
      </div>
    </div>
  )
}

export default LandingPage