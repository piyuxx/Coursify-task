import React from 'react';
import './SuccessStories.css'; // Import CSS file for styling

const stories = [
    {
        id: 1,
        title: 'Success Story 1',
        content: 'This is the content of the first success story...',
    },
    {
        id: 2,
        title: 'Success Story 2',
        content: 'This is the content of the second success story...',
    },
    // Add more success stories as needed
];

const SuccessStories = () => {
    return (
        <div className="scroll-container">
            <div className="scroll-content">
                {stories.map((story) => (
                    <div key={story.id} className="story-box">
                        <h3>{story.title}</h3>
                        <p>{story.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;
