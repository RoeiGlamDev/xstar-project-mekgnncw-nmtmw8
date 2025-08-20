import React from 'react';
import './StatsSection.css'; // Importing CSS for styling

const StatsSection: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="stat-item">
                <h2 className="stat-number">500+</h2>
                <p className="stat-description">Luxury Homes</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">1000+</h2>
                <p className="stat-description">Happy Guests</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">24/7</h2>
                <p className="stat-description">Customer Support</p>
            </div>
            <div className="stat-item">
                <h2 className="stat-number">5 Stars</h2>
                <p className="stat-description">Average Rating</p>
            </div>
        </section>
    );
};

export default StatsSection;