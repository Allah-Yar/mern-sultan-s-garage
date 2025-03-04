import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  Button,
  CssBaseline
} from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme = createTheme();

const Dashboard = () => {
  const navigate = useNavigate();

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  // const handleHome = () => {
  //   navigate('/');
  //   window.location.reload();
  // };

  return (
    // <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3
          }}
        >
          <Typography variant="h5" component="h1">
            Admin Dashboard
          </Typography>
          
          <Typography variant="body1">
            Welcome to your admin panel!
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={handleHome}
            >
              Home
            </Button> */}
            
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Container>
    // </ThemeProvider>
  );
};

export default Dashboard;