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
        'c-cyan': '#00FFEC'
      }
    },
  },
  plugins: [
    'tailwindcss-animated'
  ],
}

