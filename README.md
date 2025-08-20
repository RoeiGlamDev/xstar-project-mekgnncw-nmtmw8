import React from 'react';

const README: React.FC = () => {
  return (
    <div>
      <h1>HouseIL</h1>
      <h2>Luxury Dark AirBNB Website</h2>
      <p>
        Welcome to HouseIL, your premier destination for luxury accommodations. Our website is designed with elegance and sophistication in mind, featuring a high-end design in pink and black colors.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Elegant User Interface</li>
        <li>High-End Design</li>
        <li>Responsive Layout</li>
        <li>Luxury Property Listings</li>
        <li>Secure Booking System</li>
      </ul>
      <h3>Technologies Used</h3>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Styled Components</li>
        <li>Next.js</li>
      </ul>
      <h3>Installation</h3>
      <p>
        To get started, clone the repository and install the dependencies:
      </p>
      <pre>
        <code>
          git clone https://github.com/yourusername/HouseIL.git
          <br />
          cd HouseIL
          <br />
          npm install
        </code>
      </pre>
      <h3>Usage</h3>
      <p>
        Run the development server:
      </p>
      <pre>
        <code>
          npm run dev
        </code>
      </pre>
      <h3>Contributing</h3>
      <p>
        We welcome contributions! Please fork the repository and submit a pull request.
      </p>
      <h3>License</h3>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default README;