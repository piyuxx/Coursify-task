import React from 'react';
import './DemoComponent.css'; // Create a separate CSS file for component styling

const DemoComponent = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>Say goodbye to back and forth emails and attachments</h1>
                <p>Say hello to a new era of candidate presentation.</p>
                <button>Book a Demo</button>
            </div>
            <div className="image-container">
                {/* Replace 'your-image-url.jpg' with the actual image URL */}
                <img src="demo.png" alt="Demo" />

            </div>
        </div>
    );
};

export default DemoComponent;
