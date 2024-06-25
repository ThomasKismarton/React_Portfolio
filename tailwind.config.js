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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}