module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: '#ECEDFF',
        secondary: '#B5A66D',
      }),
    },
    textColor: {
      primary: '#112337',
      secondary: '#C4A462',
      tertiary: '#6C77A5',
    },
    flex: {
      48: '0 1 48%',
      35: '0 1 35%',
      60: '0 1 60%',
    },
    borderColor: (theme) => ({
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#B59B56',
      secondary: '#1F5FB9',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
