/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s ease-out 3',
        'pulse-slow': 'pulse 6s ease-out infinite',
        'pulse-mid': 'pulse 3s ease-out infinite',
      },
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
        '6xl': '0px 4px 8px rgba(89, 73, 30, 0.16)',
      },
    },
  },
  plugins: [],
};
