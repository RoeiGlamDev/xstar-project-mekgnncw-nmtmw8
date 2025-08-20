import React from 'react';
import './TestimonialsSection.css'; // Assuming you have a CSS file for styling

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'An unforgettable experience! The luxury and comfort were unmatched.',
    image: 'path/to/image1.jpg', // Replace with actual image path
  },
  {
    name: 'Jane Smith',
    feedback: 'Absolutely stunning property. I felt like royalty during my stay.',
    image: 'path/to/image2.jpg', // Replace with actual image path
  },
  {
    name: 'Emily Johnson',
    feedback: 'The perfect getaway! Elegant design and top-notch service.',
    image: 'path/to/image3.jpg', // Replace with actual image path
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Guests Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="guest-name">{testimonial.name}</h3>
            <p className="guest-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;