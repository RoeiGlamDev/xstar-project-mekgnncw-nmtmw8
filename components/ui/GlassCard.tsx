import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1); // semi-transparent background
  border-radius: 15px; // rounded corners
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); // subtle shadow
  backdrop-filter: blur(10px); // glass effect
  padding: 20px; // inner spacing
  color: #fff; // text color
  border: 1px solid rgba(255, 255, 255, 0.2); // border for depth
`;

const Title = styled.h2`
  font-size: 24px; // title font size
  margin-bottom: 10px; // space below title
`;

const Description = styled.p`
  font-size: 16px; // description font size
  margin: 0; // remove default margin
`;

const GlassCard: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default GlassCard;