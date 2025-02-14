import React from 'react'
import './TicketSection.css'

const TicketSection = ({ price, ticketLink }) => {
    return (
        <div className="ticket-section">
            <div className="price-info">
                <span className="price-label">Tickets from</span>
                <span className="price-amount">{price}</span>
            </div>
            <a href={ticketLink} className="buy-tickets-btn" target="_blank" rel="noopener noreferrer">
                BUY TICKETS
            </a>
        </div>
    )
}

export default TicketSection 