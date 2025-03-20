/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          800: '#292524',
          900: '#1c1917'
        },
        amber: {
          100: '#fef3c7',
          200: '#fde68a',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        }
      }
    },
  },
  plugins: [],
}
