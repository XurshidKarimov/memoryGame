/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./js/main.js"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'card-block': 'repeat(auto-fill, minmax(250px, 1fr))', 
      }
    },
  },
  plugins: [],
}

