'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealComponent: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance to move
      duration: 1000, // Animation duration
      delay: 200, // Delay between animations
      easing: 'ease-in-out', // Animation easing
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.reveal', { interval: 200 }); // Reveal elements with class 'reveal'

    return () => {
      sr.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div>{children}</div>; // Render children
};

export default ScrollRevealComponent;