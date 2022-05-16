const { themeGeneral } = require('./src/themes/bridge')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': themeGeneral.primary,
        'secondary': '#A7A9BE',
        'tertiary': '#0F0E17',
        'quaternary': '#0E3FA9',
        'background': '#0F0E17',
        'white': '#FFFFFF',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}
