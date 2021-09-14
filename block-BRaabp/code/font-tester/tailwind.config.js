module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        30: '0 1 30%',
      },
      spacing: {
        192: '48rem',
        384: '384px',
        124: '32rem',
      },
      minHeight: {
        316: '316px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
