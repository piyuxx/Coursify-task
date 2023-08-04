import React from 'react';
import './ClientPortal.css'; // Make sure to create this CSS file

const ClientPortal = () => {
    return (
        <div className="client-portal">
            <h2 className="client-portal-title">THE CLIENT PORTAL FOR BULLHORN</h2>
            <h1 className="main-heading">Make <span className="underline">candidate submissions</span></h1>

            <h2 className="main-heading">Your competitive advantage</h2>
            <div className="row">
                <div className="text-with-icon">
                    <div className="icon">&#9899;</div>
                    <div className="text">50% faster client feedback</div>
                </div>
                <div className="text-with-icon">
                    <div className="icon">&#9899;</div>
                    <div className="text">Improve fill ratios</div>
                </div>
                <div className="text-with-icon">
                    <div className="icon">&#9899;</div>
                    <div className="text">Reduce time to submit</div>
                </div>
            </div>
            <div className="branded-link">
                Submit candidates to clients as a branded link instead of attaching resumes to an email.
            </div>
            <button className="book-demo-button">Book a Demo</button>
        </div>
    );
};

export default ClientPortal;
