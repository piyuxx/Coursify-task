import React from 'react';
import 'animate.css'; // Import Animate.css for animations

const Footer = () => {
    return (
        <footer
            className="footer-container animate__animated animate__fadeInUp"
            style={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px 0',
            }}
        >
            <div
                className="footer-content"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <div
                    className="footer-logo"
                    style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                    }}
                >
                    Your Company
                </div>
                <div
                    className="footer-links"
                    style={{
                        display: 'flex',
                        gap: '20px',
                    }}
                >
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div
                className="footer-social"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                }}
            >
                <a href="#" className="animate__animated animate__heartBeat animate__infinite">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="animate__animated animate__heartBeat animate__infinite animate__delay-1s">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="animate__animated animate__heartBeat animate__infinite animate__delay-2s">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="animate__animated animate__heartBeat animate__infinite animate__delay-3s">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;

