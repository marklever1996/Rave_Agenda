import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
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
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/events/${id}`);
                console.log('Event data:', response.data);
                setEvent(response.data);
                setError(null);
            } catch (err) {
                setError(err.response?.data?.error || 'Er is een fout opgetreden');
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!event) return <div>Event niet gevonden</div>;

    return (
        <div className="event-details-page">
            
            <EventHero 
                name={event.name}
                image={event.image}
                date={event.startDate}
                endDate={event.endDate}
                venue={event.venue}
                location={event.location}
                genres={event.genres}
            />

            <div className="event-content">
                <div className="main-details">
                    <TicketSection 
                        minPrice={event.minPrice}
                        maxPrice={event.maxPrice}
                        ticketLink={event.ticketLink}
                    />

                    <section className="event-section">
                        <h2>ABOUT THE EVENT</h2>
                        <p>{event.description}</p>
                    </section>

                    <LineupSection lineup={event.lineUp} />
                    
                    <LocationSection 
                        venue={event.venue}
                        location={event.location}
                    />
                    
                    <FacilitiesSection facilities={event.facilities} />
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