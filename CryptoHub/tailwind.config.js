/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        'darkBlue' : '#192a56',
        'Blue' : '#3c40c6'
      }
    },
  },
  plugins: [],
};
