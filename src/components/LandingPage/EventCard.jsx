import { useNavigate } from 'react-router-dom'
import './EventCard.css'

const EventCard = ({ date, image, title, venue, tags, location, id = 1 }) => {
  const navigate = useNavigate()

  return (
    <div className="event-card" onClick={() => navigate(`/event-details`)}> 
      <div className="event-image">
        <img src={image} alt={title} />
        <div className="event-date-badge">{date}</div>
      </div>
      <div className="event-info">
        <h3>{title}</h3>
        <div className="event-details">
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <span className="venue">{venue}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-location-arrow"></i>
            <span className="location">{location}</span>
          </div>
        </div>
        <div className="event-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              <i className="fas fa-music"></i>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventCard 