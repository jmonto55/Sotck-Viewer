/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
    },
  },
  plugins: [],
};
