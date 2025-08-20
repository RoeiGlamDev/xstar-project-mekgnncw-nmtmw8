import autoprefixer from 'autoprefixer'; // Importing autoprefixer for vendor prefixes
import cssnano from 'cssnano'; // Importing cssnano for CSS minification

export default {
  plugins: [
    autoprefixer(), // Adding autoprefixer plugin
    cssnano({ preset: 'default' }), // Adding cssnano plugin with default settings
  ],
};