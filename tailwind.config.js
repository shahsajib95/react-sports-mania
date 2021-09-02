module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
    extend: {
      backgroundImage: theme => ({
       'mania': "url('./img/bg.png')",
      })
    }
  },
   variants: {
     extend: {},
   },
   plugins: [],
 }