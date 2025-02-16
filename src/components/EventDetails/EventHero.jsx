import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/dateUtils'
import './EventHero.css'

const EventHero = ({ name, image, date, endDate, venue, location, genres }) => {
    const genresList = genres || []

    return (
        <div className="event-hero">
            <Link to="/" className="back-button">
                <i className="fas fa-arrow-left"></i>
                <span>Back</span>
            </Link>
            
            <img 
                src={image ? `${import.meta.env.VITE_API_URL}/uploads/events/${image}` : '/path/to/fallback/image.jpg'} 
                alt={name} 
                className="event-banner" 
                onError={(e) => {
                    console.error('Error loading image:', e);
                    e.target.src = '/path/to/fallback/image.jpg';
                }}
            />
            
            <div className="event-overlay">
                <div className="event-basic-info">
                    <h1>{name}</h1>
                    
                    <div className="event-quick-info">
                        <div className="info-item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>
                                {formatDate(date)}
                                {endDate && ` - ${formatDate(endDate)}`}
                            </span>
                        </div>
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{location}</span>
                        </div>
                    </div>
                    
                    <div className="genre-tags">
                        {genresList.map((genre, index) => (
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