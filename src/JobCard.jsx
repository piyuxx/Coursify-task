import React, { useState } from 'react';

const JobCard = ({ position, role, location, salary }) => {
    const [hovered, setHovered] = useState(false);

    const toggleHover = () => {
        setHovered((prevHovered) => !prevHovered);
    };

    const containerStyle = {
        backgroundColor: hovered ? '#FFD700' : '#FDF7EB', // Yellow on hover, Cream by default
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: hovered ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',/* for slow transition */
    };

    const detailsStyle = {
        display: hovered ? 'block' : 'none',
        marginTop: '12px',
    };

    return (
        <div
            className="text-lg cursor-pointer"
            style={containerStyle}
            onMouseOver={toggleHover}
            onMouseOut={toggleHover}
        >
            <h1 className="font-bold">{role}</h1>
            <ul className="list-disc">
                <li>{position}</li>
                <li>{location}</li>
                <li>{salary}</li>
            </ul>
            {hovered && (
                <div style={detailsStyle}>
                    <p>Additional details go here</p>
                    <button
                        className="px-4 py-2 text-sm my-4 rounded-full bg-black text-black"
                        onClick={() => console.log('Show Details')}
                    >
                        Show Details
                    </button>
                </div>
            )}
        </div>
    );
};

export default JobCard;




