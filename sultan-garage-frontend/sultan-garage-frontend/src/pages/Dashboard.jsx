import { Typography, Button, Container,  Box, 
    Card, 
    CardContent, 
     } from '@mui/material';
    import { 
  Dashboard as DashboardIcon, 
  Logout as LogoutIcon 
} from '@mui/icons-material';


const Dashboard = () => {

  const handleLogout = () => {
    // Clear session or token and redirect to login
    window.location.href = '/';
  };

  return (
  
    <Container maxWidth="lg">
         <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            mt: 4 
          }}>
            <Card sx={{ width: '100%', maxWidth: 600 }}>
              <CardContent>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mb: 3 
                }}>
                  <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
                    <DashboardIcon sx={{ mr: 2 }} />
                    Admin Dashboard
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleLogout}
                    startIcon={<LogoutIcon />}
                  >
                    Logout
                  </Button>
                </Box>
    
                
                
              </CardContent>
            </Card>
          </Box>
        </Container>
  );
};

export default Dashboard;
