'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  background-color: black; // Dark background for luxury feel
  border-radius: 10px;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const Slide = styled.div<{ active: boolean }>`
  min-width: 100%;
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
  background-color: ${({ active }) => (active ? 'pink' : 'transparent')}; // Highlight active slide
`;

const Arrow = styled.button`
  background: none;
  border: none;
  color: pink; // Arrow color for elegance
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7; // Slight hover effect
  }
`;

const Slider: React.FC<{ slides: string[] }> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <SliderContainer>
      <Arrow onClick={prevSlide}>&lt;</Arrow>
      <SliderTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentIndex}>
            <img src={slide} alt={`Slide ${index}`} style={{ width: '100%' }} />
          </Slide>
        ))}
      </SliderTrack>
      <Arrow onClick={nextSlide}>&gt;</Arrow>
    </SliderContainer>
  );
};

export default Slider;