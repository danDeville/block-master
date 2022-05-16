import { createTheme } from '@mui/material/styles'
import  { themeGeneral } from './bridge.js'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: themeGeneral.primary
    },
    secondary: {
      main: '#A7A9BE',
    },
    error: {
      main: '#EF4444',
    },
    tertiary: {
      main: '#0F0E17',
    },
    quaternary: {
      main: '#0E3FA9',
    },
    black: {
      main: '#000000',
    },
    background: {
      default: '#0F0E17',
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280
    }
  }
})

export default theme