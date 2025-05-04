// src/theme.js
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     background: {
//       default: '#1a1a2e', // Set your global background color here
//     },
//   },
// });

// export default theme;

// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A0A23',     // deep navy background
      paper: '#0D0D2B',       // dark card/panel
    },
    primary: {
      main: '#4E6BFF',        // neon blue
    },
    secondary: {
      main: '#7B61FF',        // soft violet
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B3C3',   // light grey
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          boxShadow: '0 0 20px rgba(94, 129, 255, 0.4)',
          '&:hover': {
            backgroundColor: '#2E70FF',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(13, 13, 43, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
  },
});

export default theme;
