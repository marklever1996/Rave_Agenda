import React from 'react'
import './LineupSection.css'

const LineupSection = ({ lineup }) => {
    return (
        <section className="event-section">
            <h2>LINEUP</h2>
            <div className="lineup-grid">
                {lineup.map((artist, index) => (
                    <div key={index} className="artist-item">{artist}</div>
                ))}
            </div>
        </section>
    )
}

export default LineupSection 