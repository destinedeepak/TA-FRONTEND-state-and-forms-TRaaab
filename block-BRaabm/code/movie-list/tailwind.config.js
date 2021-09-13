module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: '#222222',
      }),
      flex: {
        31: '0 1 31%',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '500px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
