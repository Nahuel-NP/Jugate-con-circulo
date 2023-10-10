/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        montana: 'url(/images/backgrounds/montana/image.jpg)',
      },
      colors: {
        'c-cyan': '#00FFEC',
        'c-yellow': '#F3FF00',
        'c-magenta': '#FF4DCD',
        'c-purple': '#351360',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

