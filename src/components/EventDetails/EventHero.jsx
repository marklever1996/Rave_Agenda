import React from 'react'
import { Link } from 'react-router-dom'
import './EventHero.css'

const EventHero = ({ title, date, time, location, price, genres, image }) => {
    // Split date into parts for better formatting
    const [day, month, year] = date.split(' ')
    
    return (
        <div className="event-hero">
            <Link to="/" className="back-button">
                <i className="fas fa-arrow-left"></i>
                <span>Back</span>
            </Link>
            
            <img src={image} alt={title} className="event-banner" />
            
            <div className="event-overlay">
                <div className="event-basic-info">
                    
                    <h1>{title}</h1>
                    
                    <div className="event-quick-info">
                        <div className="info-item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>{day} {month} {year}</span>
                        </div>
                        <div className="info-item">
                            <i className="far fa-clock"></i>
                            <span>{time}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{location}</span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-ticket-alt"></i>
                            <span>{price}</span>
                        </div>
                    </div>
                    
                    <div className="genre-tags">
                        {genres.map((genre, index) => (
                            <span key={index} className="tag">
                                <i className="fas fa-music"></i>
                                {genre}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventHero 