const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      gray: colors.trueGray,
      black: colors.black,
      orange: colors.orange,
      white: colors.white,
      amber: colors.amber,
      yellow: colors.yellow,
      red: colors.red
    },
    boxShadow:{
      'glow-orange': '0 4px 6px -1px rgba(249, 115, 22, 0.7), 0 2px 4px -1px rgba(249, 115, 22, 0.2)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}