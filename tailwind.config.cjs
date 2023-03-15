/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': 'var(--bg-color)',
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'third-color': 'var(--third-color)',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
