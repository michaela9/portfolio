/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        keyboard: 'repeat(auto-fit, minmax(75px, 1fr))',
      },
      colors: {
        'my-green': '#3EB66A',
        'my-gray-text-light': '#898989',
        'my-gray-text-dark': '#636363',
        'my-gray-light': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
