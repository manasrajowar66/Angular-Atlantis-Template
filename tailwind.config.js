/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,scss,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "surface-color": "#18181b"
      },
    },
  },
  plugins: [],
};
