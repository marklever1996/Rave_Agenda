import React from 'react'
import './LocationSection.css'

const LocationSection = ({ venue, location }) => {
    return (
        <section className="event-section">
            <h2>LOCATION</h2>
            <div className="location-info">
                <div className="venue-details">
                    <h3>{venue}</h3>
                    <p>{location}</p>
                    <a href={`https://maps.google.com/?q=${location}`} 
                       className="directions-btn" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        GET DIRECTIONS
                    </a>
                </div>
                {/* Here you could add a map component */}
            </div>
        </section>
    )
}

export default LocationSection 