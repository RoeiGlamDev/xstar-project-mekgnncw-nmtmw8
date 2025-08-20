import React from 'react';
import './layout.css'; // Importing custom CSS for styling

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <h1 className="logo">HouseIL</h1>
        <nav className="navigation">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Listings</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; 2023 HouseIL. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;