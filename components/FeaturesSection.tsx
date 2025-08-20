import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const features = [
  {
    title: 'Luxury Accommodations',
    description: 'Experience the finest stays in our handpicked luxury homes.',
  },
  {
    title: 'Exclusive Amenities',
    description: 'Enjoy high-end amenities tailored for your comfort and convenience.',
  },
  {
    title: 'Personalized Service',
    description: 'Receive dedicated service from our professional hosts.',
  },
  {
    title: 'Prime Locations',
    description: 'Stay in the most sought-after neighborhoods around the world.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;