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
      'green' : '#44bd32',
      'blue' : '#c8d6e5',
      'purple' : '#5f27cd',
      'red' : '#EA2027',
      'black' : '#2f3542'
    }
  },
  plugins: [],
}

