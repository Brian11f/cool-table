const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{css,hbs,html,js,ts}'],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {},
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '.9rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    screens: {},
    extend: {},
  },
  plugins: [],
};
