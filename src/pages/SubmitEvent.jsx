import React, { useState } from 'react'
import './SubmitEvent.css'

const SubmitEvent = () => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        venue: '',
        city: '',
        price: '',
        description: '',
        genres: [],
        image: null,
        organizer: '',
        email: '',
        website: ''
    })

    const genres = [
        'Techno', 'House', 'Drum & Bass', 'Hardcore', 
        'Trance', 'Minimal', 'Tech House', 'Industrial'
    ]

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleGenreChange = (genre) => {
        setFormData(prev => ({
            ...prev,
            genres: prev.genres.includes(genre)
                ? prev.genres.filter(g => g !== genre)
                : [...prev.genres, genre]
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setFormData(prev => ({
            ...prev,
            image: file
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Hier komt de API call
    }

    return (
        <div className="submit-event-page">
            <div className="submit-container">
                <div className="form-header">
                    <h1>Submit Your Event</h1>
                    <p>Share your event with the rave community</p>
                </div>

                <form onSubmit={handleSubmit} className="event-form">
                    <div className="form-grid">
                        <div className="form-section">
                            <h2>Event Details</h2>
                            
                            <div className="form-group">
                                <label>Event Title *</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter event title"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date *</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Time *</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Venue *</label>
                                    <input
                                        type="text"
                                        name="venue"
                                        value={formData.venue}
                                        onChange={handleChange}
                                        required
                                        placeholder="Venue name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>City *</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        placeholder="City"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Price *</label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    placeholder="€20 - €30"
                                />
                            </div>

                            <div className="form-group">
                                <label>Description *</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    placeholder="Describe your event..."
                                    rows="4"
                                />
                            </div>
                        </div>

                        <div className="form-section">
                            <h2>Additional Information</h2>
                            
                            <div className="form-group">
                                <label>Genres</label>
                                <div className="genres-grid">
                                    {genres.map(genre => (
                                        <label key={genre} className="genre-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={formData.genres.includes(genre)}
                                                onChange={() => handleGenreChange(genre)}
                                            />
                                            <span>{genre}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Event Image</label>
                                <div className="file-input-wrapper">
                                    <input
                                        type="file"
                                        onChange={handleImageChange}
                                        accept="image/*"
                                        id="image-upload"
                                    />
                                    <label htmlFor="image-upload" className="file-label">
                                        <span className="upload-icon">+</span>
                                        Choose Image
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Organizer Name *</label>
                                <input
                                    type="text"
                                    name="organizer"
                                    value={formData.organizer}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name or organization"
                                />
                            </div>

                            <div className="form-group">
                                <label>Contact Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Website / Ticket Link</label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="https://"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-footer">
                        <p className="required-note">* Required fields</p>
                        <button type="submit" className="submit-button">
                            Submit Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubmitEvent