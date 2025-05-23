import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme.js'
import App from './App.jsx'

import './styles/tailwind.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
   

    
    
  </ThemeProvider>
  </StrictMode>,
)
