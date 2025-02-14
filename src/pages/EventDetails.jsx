import React from 'react'
import { useParams } from 'react-router-dom'
import EventHero from '../components/EventDetails/EventHero'
import TicketSection from '../components/EventDetails/TicketSection'
import LineupSection from '../components/EventDetails/LineupSection'
import LocationSection from '../components/EventDetails/LocationSection'
import FacilitiesSection from '../components/EventDetails/FacilitiesSection'
import ShareSection from '../components/EventDetails/ShareSection'
import ParadigmFestival from '../assets/Voorbeeld.jpg'
import '../pages/EventDetails.css'
import '../styles/global.css'

const EventDetails = () => {
    const { id } = useParams()
    
    // Mock data (later te vervangen door API call)
    const eventData = {
        title: "PARADIGM FESTIVAL",
        date: "10 AUG 2024",
        time: "22:00 - 08:00",
        venue: "Suikerunie",
        location: "Energieweg 10, Groningen",
        price: "€45",
        ticketLink: "https://tickets.example.com",
        description: "Experience the ultimate underground electronic music festival in the industrial heart of Groningen. Paradigm Festival returns with a carefully curated lineup of international artists and local talents across multiple stages.",
        genres: ["Techno", "House", "Industrial", "Minimal"],
        lineup: [
            "Ben Klock",
            "Amelie Lens",
            "Charlotte de Witte",
            "Marcel Dettmann",
            "Nina Kraviz",
            "Jeff Mills"
        ],
        facilities: [
            "Free parking",
            "Food trucks",
            "Lockers",
            "First aid",
            "Water points"
        ]
    }

    return (
        <div className="event-details-page">
            
            <EventHero 
                {...eventData} 
                image={ParadigmFestival}
            />

            <div className="event-content">
                <div className="main-details">
                    <TicketSection 
                        price={eventData.price}
                        ticketLink={eventData.ticketLink}
                    />

                    <section className="event-section">
                        <h2>ABOUT THE EVENT</h2>
                        <p>{eventData.description}</p>
                    </section>

                    <LineupSection lineup={eventData.lineup} />
                    
                    <LocationSection 
                        venue={eventData.venue}
                        location={eventData.location}
                    />
                    
                    <FacilitiesSection facilities={eventData.facilities} />
                </div>

                <aside className="event-sidebar">
                    <div className="sticky-sidebar">
                        <ShareSection />
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default EventDetails