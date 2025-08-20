import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styling

const pricingOptions = [
  {
    title: 'Basic',
    price: '$99/night',
    features: ['1 Bedroom', '1 Bathroom', 'Free Wi-Fi', 'Air Conditioning'],
  },
  {
    title: 'Deluxe',
    price: '$199/night',
    features: ['2 Bedrooms', '2 Bathrooms', 'Free Wi-Fi', 'Air Conditioning', 'Pool Access'],
  },
  {
    title: 'Luxury',
    price: '$299/night',
    features: ['3 Bedrooms', '3 Bathrooms', 'Free Wi-Fi', 'Air Conditioning', 'Pool Access', 'Private Chef'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose Your Stay</h2>
      <div className="pricing-options">
        {pricingOptions.map((option, index) => (
          <div className="pricing-option" key={index}>
            <h3 className="option-title">{option.title}</h3>
            <p className="option-price">{option.price}</p>
            <ul className="option-features">
              {option.features.map((feature, idx) => (
                <li key={idx} className="feature-item">{feature}</li>
              ))}
            </ul>
            <button className="option-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;