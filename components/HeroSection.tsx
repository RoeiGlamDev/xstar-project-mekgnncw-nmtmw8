import React from 'react';
import './HeroSection.css'; // Importing CSS for styling

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Welcome to HouseIL</h1>
                <p className="hero-subtitle">Experience Luxury Living</p>
                <button className="hero-button">Explore Now</button>
            </div>
        </div>
    );
};

export default HeroSection;