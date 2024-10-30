/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'purple-1000': '#330A48',
          'purple-1001': '#330A48'
      },
      },
    },
  },
  plugins: [],
};
