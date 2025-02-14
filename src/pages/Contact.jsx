import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const [focusedInput, setFocusedInput] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log(formData)
    }

    return (
        <div className="contact-page">
            <div className="contact-glow"></div>
            <div className="contact-container">
                <div className="contact-header">
                    <h1>GET IN TOUCH</h1>
                    <p>Have a question or want to collaborate? We'd love to hear from you.</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info-section">
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="contact-info-text">
                                <h3>Email Us</h3>
                                <a href="mailto:info@raveagenda.nl" className="contact-link">
                                    info@raveagenda.nl
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="contact-info-text">
                                <h3>Follow Us</h3>
                                <a href="https://instagram.com/raveagenda_groningen" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    @raveagenda
                                </a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="contact-info-text">
                                <h3>Response Time</h3>
                                <p>Within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className={`contact-form-group ${focusedInput === 'name' ? 'focused' : ''}`}>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('name')}
                                onBlur={() => setFocusedInput(null)}
                                required
                                placeholder="Your name"
                            />
                        </div>

                        <div className={`contact-form-group ${focusedInput === 'email' ? 'focused' : ''}`}>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('email')}
                                onBlur={() => setFocusedInput(null)}
                                required
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className={`contact-form-group ${focusedInput === 'subject' ? 'focused' : ''}`}>
                            <label htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('subject')}
                                onBlur={() => setFocusedInput(null)}
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className={`contact-form-group ${focusedInput === 'message' ? 'focused' : ''}`}>
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedInput('message')}
                                onBlur={() => setFocusedInput(null)}
                                required
                                placeholder="Your message here..."
                                rows="6"
                            ></textarea>
                        </div>

                        <button type="submit" className="contact-submit-btn">
                            <span>Send Message</span>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact