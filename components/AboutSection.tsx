import React from 'react';
import './AboutSection.css'; // Importing CSS for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">Welcome to HouseIL</h1>
                <p className="about-description">
                    Experience luxury like never before. At HouseIL, we offer exquisite accommodations that redefine elegance and comfort.
                </p>
                <p className="about-description">
                    Our properties are handpicked to ensure a high-end stay, surrounded by the beauty of design and the warmth of hospitality.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;