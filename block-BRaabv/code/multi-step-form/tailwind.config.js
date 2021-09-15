module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        35 :'0 1 35%',
        65 :'0 1 65%',
        50 :'0 1 50%'
      },
      textColor: {
        'primary': '#0B75FF',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
      },
      backgroundColor: theme => ({
        'primary': '#0B75FF',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
