import React from 'react';
import './styles.css'; // Import custom styles

const HomePage: React.FC = () => {
    return (
        <div className="homepage">
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
            <main className="main-content">
                <section className="hero">
                    <h2>Experience Luxury Living</h2>
                    <p>Discover exquisite homes and unforgettable stays.</p>
                    <button className="cta-button">Explore Now</button>
                </section>
                <section className="featured-listings">
                    <h3>Featured Listings</h3>
                    <div className="listing-card">
                        <img src="luxury-home-1.jpg" alt="Luxury Home 1" />
                        <h4>Elegant Villa</h4>
                        <p>$1,200/night</p>
                    </div>
                    <div className="listing-card">
                        <img src="luxury-home-2.jpg" alt="Luxury Home 2" />
                        <h4>Modern Apartment</h4>
                        <p>$800/night</p>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;