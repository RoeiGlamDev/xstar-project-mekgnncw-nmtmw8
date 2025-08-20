import React from 'react'; // Import React
import { NextPage } from 'next'; // Import NextPage type

const ContactPage: NextPage = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}> {/* Dark background */}
      <h1 style={{ color: '#ff69b4' }}>Contact Us</h1> {/* Pink color for heading */}
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label htmlFor="name" style={{ marginBottom: '10px' }}>Name</label>
        <input type="text" id="name" name="name" required style={{ marginBottom: '20px', padding: '10px' }} />

        <label htmlFor="email" style={{ marginBottom: '10px' }}>Email</label>
        <input type="email" id="email" name="email" required style={{ marginBottom: '20px', padding: '10px' }} />

        <label htmlFor="message" style={{ marginBottom: '10px' }}>Message</label>
        <textarea id="message" name="message" required style={{ marginBottom: '20px', padding: '10px' }} />

        <button type="submit" style={{ backgroundColor: '#ff69b4', color: '#000', padding: '10px' }}>Send</button>
      </form>
    </div>
  );
};

export default ContactPage; // Export the ContactPage component