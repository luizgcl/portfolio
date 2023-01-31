/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  important: true,
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-height : 790px)' },
        'tall-xs': { 'raw': '(max-height : 667px)' },
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
