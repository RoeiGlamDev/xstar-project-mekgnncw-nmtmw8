import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#f5c2d9', // Light pink for accents
          DEFAULT: '#d5006d', // Main pink color
          dark: '#a0004d', // Darker pink for hover states
        },
        black: {
          DEFAULT: '#000000', // Main black color
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // Elegant font
      },
      spacing: {
        '128': '32rem', // Custom spacing for layout
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable active state for background color
      textColor: ['active'], // Enable active state for text color
    },
  },
  plugins: [],
};

export default config;