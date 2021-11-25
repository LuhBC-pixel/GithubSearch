// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#232324',
      blackVeryDark: '#1B1919',
      white: '#FFFFFF',
      purple: '#8752CC',
      gray: '#B2B2B2',
      blue: '#539BF5',
    },
    fontFamily: {
      display: "Roboto, sans-serif"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}