import React from 'react'
import './FacilitiesSection.css'

const FacilitiesSection = ({ facilities }) => {
    return (
        <section className="event-section">
            <h2>FACILITIES</h2>
            <div className="facilities-grid">
                {facilities.map((facility, index) => (
                    <div key={index} className="facility-item">
                        <span>{facility}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FacilitiesSection 