/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  // content: ["./src/**/*.{html,js}"],
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px'
      },
    },
  },
  plugins: [],
}
