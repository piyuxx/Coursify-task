import React from 'react';
import './ModernFooter.css';

const ModernFooter = () => {
    return (
        <footer className="modern-footer">
            <div className="footer-content">
                <h3>Contact Us</h3>
                <p>
                    Feel free to get in touch with us if you have any questions or inquiries. We'd love to hear from you!
                </p>
                <div className="contact-info">
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-social">
                <a href="#" className="social-icon">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
};

export default ModernFooter;
