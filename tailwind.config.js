/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gilda: ["Gilda Display", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        primary: "#ab854f",
        secondary: '#f8f5f0'
      }
    },
  },
  plugins: [],
}