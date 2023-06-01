/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      serif: ["Poltawski Nowy", "serif"],
    },
    extend: {
      colors: {
        primary: "#000078",
        secondary: "#73edff",
        link: "#7853fd",
      },
    },
  },
  plugins: [],
};
