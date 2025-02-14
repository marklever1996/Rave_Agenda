import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-glow"></div>
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <div className="brand">
                        <h3>RAVE AGENDA</h3>
                        <div className="brand-line"></div>
                    </div>
                    <p className="kvk">Chamber of Commerce: 12345678</p>
                </div>
                
                <div className="footer-section">
                    <h3>EXPLORE</h3>
                    <nav className="footer-links">
                        <Link to="/contact">
                            <span className="link-dot"></span>
                            Contact
                        </Link>
                        <Link to="/blog">
                            <span className="link-dot"></span>
                            Blog
                        </Link>
                        {/* <Link to="/privacy">
                            <span className="link-dot"></span>
                            Privacy
                        </Link> */}
                    </nav>
                </div>

                <div className="footer-section">
                    <h3>GET IN TOUCH</h3>
                    <a href="mailto:info@raveagenda.nl" className="contact-link">
                        <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                        info@raveagenda.nl
                    </a>
                    <a href="https://www.instagram.com/raveagenda_groningen/" className="contact-link">
                        <span className="contact-icon"><i className="fab fa-instagram"></i></span>
                        @raveagenda
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <span className="year">{new Date().getFullYear()}</span>
                    <span className="separator">•</span>
                    <span>Rave Agenda</span>
                </div>
                <div className="credit">
                    Crafted by
                    <a 
                        href="https://leverwebdesign.nl" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="credit-link"
                    >
                        LeverWebDesign
                        <span className="credit-arrow">→</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer