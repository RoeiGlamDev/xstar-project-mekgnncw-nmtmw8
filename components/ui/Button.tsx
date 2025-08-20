import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: #000; // black background
  color: #ff69b4; // pink text
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #ff69b4; // pink background on hover
    color: #000; // black text on hover
  }

  &:focus {
    outline: none;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};

export default Button;