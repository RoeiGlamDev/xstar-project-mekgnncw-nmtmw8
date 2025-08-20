import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Assuming you have a CSS file for styling

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="logo">
                <Link to="/" className="logo-link">HouseIL</Link> {/* Logo link */}
            </div>
            <ul className="nav-links">
                <li>
                    <Link to="/about" className="nav-link">About</Link> {/* About link */}
                </li>
                <li>
                    <Link to="/listings" className="nav-link">Listings</Link> {/* Listings link */}
                </li>
                <li>
                    <Link to="/contact" className="nav-link">Contact</Link> {/* Contact link */}
                </li>
                <li>
                    <Link to="/login" className="nav-link">Login</Link> {/* Login link */}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;