/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        almost : '#fafafa',
        'almost-gray' : '#696969',
        'almost-back' : '#141414'
      }
    },
    screens : {
      dt : '1440px',
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss-animated')
  ],
}