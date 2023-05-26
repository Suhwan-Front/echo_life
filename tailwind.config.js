module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#111931',
        'main-green': '#DDEF3F',
        'main-white': '#EDE9E9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
