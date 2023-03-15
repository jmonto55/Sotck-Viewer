/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'pulse-slow': 'pulse 6s ease-in infinite',
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
        '6xl': '0px 4px 8px rgba(89, 73, 30, 0.16)',
      },
    },
  },
  plugins: [],
};
