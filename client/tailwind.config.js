/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-purple-1000': '#330A48',
        'custom-purple-1001': '#330A48',
        'custom-pink': '#8D1455',
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
