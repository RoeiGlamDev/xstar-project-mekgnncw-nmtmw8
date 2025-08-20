import { useEffect, useState } from 'react';

const useParallax = (scrollSpeed: number) => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.scrollY * scrollSpeed);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return offset; // Return the calculated offset for parallax effect
};

export default useParallax;