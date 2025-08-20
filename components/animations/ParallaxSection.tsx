'use client';

import React, { useEffect, useRef } from 'react';
import './ParallaxSection.css'; // Assuming you have a CSS file for styles

const ParallaxSection: React.FC = () => {
    const parallaxRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (parallaxRef.current) {
            const scrollPosition = window.scrollY;
            parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Parallax effect
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-section" ref={parallaxRef}>
            <div className="parallax-content">
                <h1>Welcome to HouseIL</h1>
                <p>Experience luxury like never before.</p>
            </div>
        </div>
    );
};

export default ParallaxSection;