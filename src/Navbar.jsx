import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="p.svg" alt="Logo" />
            </div>
            <ul className="navbar-menu">
                <li>
                    <a href="#">Product </a>

                </li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Pricing</a></li>
                <li>
                    <a href="#">About </a>


                </li>
            </ul>

            <div className="navbar-buttons">
                <button className="login-button">Login</button>

                <button className="signup-button">Sign Up</button>
                <button className="demo-button">Book a Demo</button>

            </div>
        </nav>
    );
};

export default Navbar;
