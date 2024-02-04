/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
  },
  // eslint-disable-next-line no-undef
  plugins: [require("rippleui")],
}