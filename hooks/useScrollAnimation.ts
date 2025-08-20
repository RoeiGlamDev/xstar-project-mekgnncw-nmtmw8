import { useEffect, useState } from 'react';

const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0); // State to track vertical scroll position

  const handleScroll = () => {
    setScrollY(window.scrollY); // Update scroll position on scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
    };
  }, []);

  return scrollY; // Return current scroll position
};

export default useScrollAnimation;