import React from 'react'
import { Link } from 'react-router-dom'
import './EventListItem.css'

const EventListItem = ({ day, date, month, image, title, time, genre, location }) => {
  return (
    <div className="event-item">
      <div className="date-box">
        <span className="day">{day}</span>
        <span className="date">{date}</span>
        <span className="month">{month}</span>
      </div>
      <img src={image} alt="Event" className="event-logo" />
      <div className="event-details">
        <h3>{title}</h3>
        <div className="event-meta">
          <span className="time">
            <i className="far fa-clock"></i>
            {time}
          </span>
          <span className="genre">
            <i className="fas fa-music"></i>
            {genre}
          </span>
          <span className="location">
            <i className="fas fa-map-marker-alt"></i>
            {location}
          </span>
        </div>
      </div>
      <div className="event-actions">
        <Link to="/event-details" className="learn-more">
          LEARN MORE
        </Link>
      </div>
    </div>
  )
}

export default EventListItem 