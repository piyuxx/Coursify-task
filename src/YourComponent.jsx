import React from 'react';
import './YourComponent.css'; // Import a CSS file to style the component

const YourComponent = () => {
    return (
        <div className="containers">
            <div className="content">
                <h1>Hire People</h1>

                <p className="motivational-quote">
                    "The only way to do great work is to love what you do." - Steve Jobs
                </p>
                <div className="buttons">
                    <button className="hire-button">Hire People</button>
                    <button className="find-jobs-button">Find Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;

