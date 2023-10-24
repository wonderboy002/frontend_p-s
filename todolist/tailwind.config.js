/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      'darkBlue' : '#0c2461',
      'white' : '#ffffff',
      'green' : '#44bd32'
    }
  },
  plugins: [],
}

