/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'highlight': 'highlight 700ms linear',
      },
      keyframes: {
        highlight: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(245, 123, 39, 0.5)'},
          '100%': { backgroundColor: 'transparent' },
        }
      }
    },
  },
  plugins: [],
}
