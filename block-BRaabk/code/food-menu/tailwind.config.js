module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#ECEDFF',
        "secondary": "#B5A66D"
       })
    },
    textColor: {
      'primary': '#112337',
    },
    flex: {
      '48': '0 1 48%',
      '28': '0 1 28%',
      '65' : '0 1 65%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
