import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import '../styles/global.css'
import ParadigmFestival from '../assets/Voorbeeld.jpg'
import FilterSidebar from '../components/LandingPage/FilterSidebar'
import EventCard from '../components/LandingPage/EventCard'
import EventListItem from '../components/LandingPage/EventListItem'
import Pagination from '../components/LandingPage/Pagination'

const LandingPage = () => {
  const [highlightedEvents, setHighlightedEvents] = useState([])
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        
        // Fetch both highlighted and non-highlighted events in parallel
        const [highlightedResponse, upcomingResponse] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/events/highlighted`),
          fetch(`${import.meta.env.VITE_API_URL}/api/events/non-highlighted`)
        ]);

        if (!highlightedResponse.ok || !upcomingResponse.ok) {
          throw new Error('Failed to fetch events');
        }

        const [highlightedData, upcomingData] = await Promise.all([
          highlightedResponse.json(),
          upcomingResponse.json()
        ]);

        console.log('Received highlighted events:', highlightedData);
        console.log('Received upcoming events:', upcomingData);

        // Format highlighted events
        const formattedHighlightedEvents = highlightedData.map(event => ({
          id: event.id,
          date: new Date(event.startDate).toLocaleDateString('nl-NL', {
            day: '2-digit',
            month: 'short'
          }).toUpperCase(),
          title: event.name,
          venue: event.venue,
          tags: event.genres,
          location: event.location,
          image: `${import.meta.env.VITE_API_URL}/uploads/events/${event.image}`
        }));

        // Format upcoming events
        const formattedUpcomingEvents = upcomingData.map(event => ({
          id: event.id,
          day: new Date(event.startDate).toLocaleDateString('nl-NL', { weekday: 'short' }).toUpperCase(),
          date: new Date(event.startDate).getDate(),
          month: new Date(event.startDate).toLocaleDateString('nl-NL', { month: 'short' }).toUpperCase(),
          image: `${import.meta.env.VITE_API_URL}/uploads/events/${event.image}`,
          title: event.name,
          startDate: new Date(event.startDate).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }),
          endDate: event.endDate ? new Date(event.endDate).toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' }) : null,
          genre: event.genres.join(', '),
          location: `${event.venue}, ${event.location}`
        }));

        setHighlightedEvents(formattedHighlightedEvents);
        setUpcomingEvents(formattedUpcomingEvents);
        setError(null);
      } catch (err) {
        console.error('Error details:', err);
        setError(err.message || 'Failed to load events');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            <h2>Highlighted Events</h2>
            <div className="event-carousel">
              {highlightedEvents.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </section>

          <section className="agenda">
            <div className="agenda-header">
              <h2>UPCOMING EVENTS</h2>
            </div>

            <div className="event-list">
              {upcomingEvents.map((event) => (
                <EventListItem
                  key={event.id}
                  {...event}
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