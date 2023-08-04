import React from 'react';
import './ReverseDemoComponent.css'; // Create a separate CSS file for component styling

const ReverseDemoComponent = () => {
    return (
        <div className="reverse-container">
            <div className="reverse-image-container">
                {/* Replace 'your-image-url.jpg' with the actual image URL */}
                <div className='lols'>
                    <img src="demo2.png" alt="Demo" />
                </div>
            </div>
            <div className="reverse-content">
                <h1>Heading</h1>
                <p>Some text here...</p>
                <button>Book a Demo</button>
            </div>
        </div>
    );
};

export default ReverseDemoComponent;
