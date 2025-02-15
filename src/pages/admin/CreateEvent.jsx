import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './CreateEvent.css'

const CreateEvent = () => {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const token = useSelector(state => state.auth.token)

  // Bescherm de route
  useEffect(() => {
    if (!isLoggedIn || !token) {
      navigate('/login')
    }
  }, [isLoggedIn, token, navigate])

  const [eventData, setEventData] = useState({
    name: '',
    image: null,
    organizer: '',
    eventType: 'indoor',
    isMultiday: false,
    startDate: '',
    endDate: '',
    minPrice: '',
    maxPrice: '',
    genres: [],
    description: '',
    lineUp: '',
    location: '',
    venue: '',
    facilities: [],
    isHighlighted: false,
    ticketLink: ''
  })

  const [previewImage, setPreviewImage] = useState(null)
  const [error, setError] = useState('')

  const genreOptions = [
    'Techno', 'House', 'Drum & Bass', 'Hardcore', 
    'Trance', 'EDM', 'Minimal', 'Tech House'
  ]

  const facilityOptions = [
    'Parking', 'Food', 'Drinks', 'Lockers', 
    'Smoking Area', 'VIP', 'Camping', 'First Aid'
  ]

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setEventData({ ...eventData, image: file })
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  // Handle submit; data wordt verstuurd naar de API & verstuurd naar de database
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    console.log('🚀 Start form submission')
    
    try {
        // Validatie
        console.log('📋 Validating form data...')
        if (eventData.minPrice > eventData.maxPrice) {
            console.error('❌ Validation failed: minPrice > maxPrice')
            setError('Minimum prijs kan niet hoger zijn dan maximum prijs')
            return
        }

        if (eventData.isMultiday && !eventData.endDate) {
            console.error('❌ Validation failed: missing endDate for multiday event')
            setError('Einddatum is verplicht voor meerdaagse events')
            return
        }

        console.log('✅ Validation passed')

        // Create FormData object
        console.log('📦 Creating FormData...')
        const formData = new FormData()
        
        // Add the image if it exists
        if (eventData.image) {
            console.log('🖼️ Adding image to FormData:', eventData.image.name)
            formData.append('image', eventData.image)
        }

        // Add the rest of the form data
        const eventDataForSubmit = {
            ...eventData,
            lineUp: eventData.lineUp.split('\n').filter(line => line.trim() !== '')
        }
        delete eventDataForSubmit.image // Remove image from JSON data
        
        console.log('📝 Event data being sent:', eventDataForSubmit)
        formData.append('data', JSON.stringify(eventDataForSubmit))

        console.log('🌐 Sending request to API...')
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/events`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: formData
        })

        console.log('📨 Response status:', response.status)
        const data = await response.json()
        console.log('📬 Response data:', data)

        if (!response.ok) {
            console.error('❌ API error:', data.error)
            throw new Error(data.error || 'Er ging iets mis bij het aanmaken van het event')
        }

        console.log('✨ Event successfully created!')
        // Redirect naar dashboard bij succes
        navigate('/dashboard', { 
            state: { message: 'Event succesvol aangemaakt' }
        })

    } catch (error) {
        console.error('❌ Submit error:', error)
        setError(error.message || 'Er ging iets mis bij het aanmaken van het event')
    }
  }

  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <h1>Nieuw Event Aanmaken</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="create-event-form">
          {/* Basis Informatie */}
          <section className="form-section">
            <h2><i className="fas fa-info-circle"></i> Basis Informatie</h2>
            
            <div className="form-group">
              <label>Event Naam *</label>
              <input
                type="text"
                value={eventData.name}
                onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Event Poster</label>
              <div className="file-input-container">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="file-input"
                />
                <div className="file-input-content">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Sleep een afbeelding hierheen of klik om te uploaden</p>
                  <span>PNG, JPG tot 5MB</span>
                </div>
              </div>
              {previewImage && (
                <div className="image-preview">
                  <img src={previewImage} alt="Preview" />
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Organisator *</label>
              <input
                type="text"
                value={eventData.organizer}
                onChange={(e) => setEventData({ ...eventData, organizer: e.target.value })}
                required
              />
            </div>
          </section>

          {/* Event Details */}
          <section className="form-section">
            <h2><i className="fas fa-calendar-alt"></i> Event Details</h2>
            
            <div className="form-group">
              <label>Event Type *</label>
              <select
                value={eventData.eventType}
                onChange={(e) => setEventData({ ...eventData, eventType: e.target.value })}
                required
              >
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
              </select>
            </div>

            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={eventData.isMultiday}
                  onChange={(e) => setEventData({ ...eventData, isMultiday: e.target.checked })}
                />
                Meerdaags Event
              </label>
            </div>

            <div className="form-group">
              <label>Start Datum *</label>
              <input
                type="datetime-local"
                value={eventData.startDate}
                onChange={(e) => setEventData({ ...eventData, startDate: e.target.value })}
                required
              />
            </div>

            {eventData.isMultiday && (
              <div className="form-group">
                <label>Eind Datum *</label>
                <input
                  type="datetime-local"
                  value={eventData.endDate}
                  onChange={(e) => setEventData({ ...eventData, endDate: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="form-row">
              <div className="form-group half">
                <label>Minimum Prijs *</label>
                <input
                  type="number"
                  value={eventData.minPrice}
                  onChange={(e) => setEventData({ ...eventData, minPrice: e.target.value })}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="form-group half">
                <label>Maximum Prijs *</label>
                <input
                  type="number"
                  value={eventData.maxPrice}
                  onChange={(e) => setEventData({ ...eventData, maxPrice: e.target.value })}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>
          </section>

          {/* Genres en Line-up */}
          <section className="form-section">
            <h2><i className="fas fa-music"></i> Genres en Line-up</h2>
            
            <div className="form-group">
              <label>Genres *</label>
              <div className="checkbox-group">
                {genreOptions.map(genre => (
                  <label key={genre} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={eventData.genres.includes(genre)}
                      onChange={(e) => {
                        const updatedGenres = e.target.checked
                          ? [...eventData.genres, genre]
                          : eventData.genres.filter(g => g !== genre)
                        setEventData({ ...eventData, genres: updatedGenres })
                      }}
                    />
                    {genre}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Line-up *</label>
              <textarea
                value={eventData.lineUp}
                onChange={(e) => setEventData({ ...eventData, lineUp: e.target.value })}
                placeholder="Voer de line-up in (één artiest per regel)"
                required
              />
            </div>
          </section>

          {/* Locatie en Faciliteiten */}
          <section className="form-section">
            <h2><i className="fas fa-map-marker-alt"></i> Locatie en Faciliteiten</h2>
            
            <div className="form-group">
              <label>Locatie *</label>
              <input
                type="text"
                value={eventData.location}
                onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Venue *</label>
              <input
                type="text"
                value={eventData.venue}
                onChange={(e) => setEventData({ ...eventData, venue: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Faciliteiten</label>
              <div className="checkbox-group">
                {facilityOptions.map(facility => (
                  <label key={facility} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={eventData.facilities.includes(facility)}
                      onChange={(e) => {
                        const updatedFacilities = e.target.checked
                          ? [...eventData.facilities, facility]
                          : eventData.facilities.filter(f => f !== facility)
                        setEventData({ ...eventData, facilities: updatedFacilities })
                      }}
                    />
                    {facility}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Extra Details */}
          <section className="form-section">
            <h2><i className="fas fa-cog"></i> Extra Details</h2>
            
            <div className="form-group">
              <label>Beschrijving *</label>
              <textarea
                value={eventData.description}
                onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label>Ticket Link *</label>
              <input
                type="url"
                value={eventData.ticketLink}
                onChange={(e) => setEventData({ ...eventData, ticketLink: e.target.value })}
                placeholder="https://"
                required
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={eventData.isHighlighted}
                  onChange={(e) => setEventData({ ...eventData, isHighlighted: e.target.checked })}
                />
                Uitgelicht Event
              </label>
            </div>
          </section>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={() => navigate('/dashboard')}>
              Annuleren
            </button>
            <button type="submit" className="submit-button">
              Event Aanmaken
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent
