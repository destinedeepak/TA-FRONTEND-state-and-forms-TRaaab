module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#FFF3E5',
        'close': '#B3DFAC',
        'open': '#FDD78C',
        'secondary': "#F5EDE4",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
