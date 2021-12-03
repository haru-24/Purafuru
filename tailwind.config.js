module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: [
        'hover',
        {
          0: '0ms',
          2000: '2000ms',
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
