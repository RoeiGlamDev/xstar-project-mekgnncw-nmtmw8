import React from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styling

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page" style={{ backgroundColor: '#000', color: '#fff' }}>
      <header className="header">
        <h1 style={{ color: '#ff69b4' }}>HouseIL Pricing</h1>
        <p>Experience luxury like never before</p>
      </header>
      <section className="pricing-options">
        <div className="pricing-option">
          <h2>Standard Suite</h2>
          <p>$200/night</p>
          <ul>
            <li>1 King Bed</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
          </ul>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="pricing-option">
          <h2>Deluxe Suite</h2>
          <p>$350/night</p>
          <ul>
            <li>1 King Bed</li>
            <li>Ocean View</li>
            <li>Spa Access</li>
          </ul>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="pricing-option">
          <h2>Presidential Suite</h2>
          <p>$600/night</p>
          <ul>
            <li>2 King Beds</li>
            <li>Private Balcony</li>
            <li>Personal Concierge</li>
          </ul>
          <button className="book-btn">Book Now</button>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PricingPage;