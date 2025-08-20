import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px', textAlign: 'center' }}>
            <h1 style={{ color: '#ff69b4' }}>About HouseIL</h1>
            <p style={{ fontSize: '20px', margin: '20px 0' }}>
                Welcome to HouseIL, your luxurious getaway in the heart of elegance and comfort.
            </p>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
                We offer high-end accommodations that redefine the meaning of luxury living.
            </p>
            <p style={{ fontSize: '18px', margin: '20px 0' }}>
                Experience the perfect blend of style and sophistication with our carefully curated spaces.
            </p>
            <p style={{ fontSize: '16px', margin: '20px 0' }}>
                Join us in creating unforgettable memories at HouseIL, where every stay feels like home.
            </p>
        </div>
    );
};

export default AboutPage;