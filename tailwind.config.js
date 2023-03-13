/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'pulse-slow': 'pulse 3s ease-in infinite',
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
