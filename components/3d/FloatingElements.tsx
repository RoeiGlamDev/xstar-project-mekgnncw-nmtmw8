import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh; // Full height for floating elements
  background-color: #000; // Black background
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 150px; // Width of floating element
  height: 150px; // Height of floating element
  background-color: #ff69b4; // Pink color
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); // Elegant shadow
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0% { transform: translatey(0); }
    50% { transform: translatey(-20px); }
    100% { transform: translatey(0); }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ top: '10%', left: '20%' }} />
      <FloatingElement style={{ top: '30%', right: '15%' }} />
      <FloatingElement style={{ bottom: '20%', left: '50%' }} />
      <FloatingElement style={{ bottom: '10%', right: '25%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;