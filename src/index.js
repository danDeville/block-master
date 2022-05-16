import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

// Material Ui
import { ThemeProvider } from '@mui/material/styles'
import theme from './themes/Material'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>
    </ThemeProvider>
  </Provider>
)