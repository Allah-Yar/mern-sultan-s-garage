// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthService from '../components/Auth/AuthService';
// import { 
//   Container, 
//   Typography, 
//   Button, 
//   Box, 
//   Card, 
//   CardContent, 
//   Grid 
// } from '@mui/material';
// import { 
//   Dashboard as DashboardIcon, 
//   Logout as LogoutIcon 
// } from '@mui/icons-material';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // Get current user from local storage or backend
//         const currentUser = AuthService.getCurrentUser();
//         if (!currentUser) {
//           throw new Error('No authenticated user');
//         }
        
//         // Optional: Verify user with backend
//         await AuthService.isAuthenticated();
        
//         setUser(currentUser);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Authentication check failed', error);
//         navigate('/login');
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   const handleLogout = async () => {
//     try {
//       await AuthService.logout();
//     } catch (error) {
//       console.error('Logout failed', error);
//     }
//     // Logout will typically redirect via AuthService
//   };

//   if (isLoading) {
//     return (
//       <Container>
//         <Typography variant="h5">Loading...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg">
//       <Box sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         mt: 4 
//       }}>
//         <Card sx={{ width: '100%', maxWidth: 600 }}>
//           <CardContent>
//             <Box sx={{ 
//               display: 'flex', 
//               justifyContent: 'space-between', 
//               alignItems: 'center',
//               mb: 3 
//             }}>
//               <Typography 
//                 variant="h4" 
//                 component="h1" 
//                 sx={{ display: 'flex', alignItems: 'center' }}
//               >
//                 <DashboardIcon sx={{ mr: 2 }} />
//                 Admin Dashboard
//               </Typography>
//               <Button 
//                 variant="contained" 
//                 color="secondary" 
//                 onClick={handleLogout}
//                 startIcon={<LogoutIcon />}
//               >
//                 Logout
//               </Button>
//             </Box>

//             {user && (
//               <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Username:</strong> {user.username}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="subtitle1">
//                     <strong>Email:</strong> {user.email}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="subtitle1">
//                     <strong>Role:</strong> {user.role || 'Admin'}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             )}
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default Dashboard;

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthService from '../components/Auth/AuthService';
// import { 
//   Container, 
//   Typography, 
//   Button, 
  
//   Card, 
//   CardContent 
// } from '@mui/material';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // First, check if user exists in local storage
//         const storedUser = AuthService.getCurrentUser();
//         if (!storedUser) {
//           throw new Error('No user found');
//         }

//         // Then verify authentication with backend
//         await AuthService.isAuthenticated();
        
//         setUser(storedUser);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Authentication failed', error);
//         // Clear any stored user data
//         localStorage.removeItem('user');
//         navigate('/login');
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   const handleLogout = () => {
//     AuthService.logout();
//   };

//   if (isLoading) {
//     return (
//       <Container>
//         <Typography>Loading...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <Card>
//         <CardContent>
//           <Typography variant="h4">
//             Welcome, {user.username}
//           </Typography>
//           <Button onClick={handleLogout}>
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Dashboard;
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthService from '../components/Auth/AuthService';
// import { 
//   Container, 
//   Typography, 
//   Button, 
  
//   Card, 
//   CardContent 
// } from '@mui/material';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // First, check if user exists in local storage
//         const storedUser = AuthService.getCurrentUser();
//         if (!storedUser) {
//           throw new Error('No user found');
//         }

//         // Then verify authentication with backend
//         await AuthService.isAuthenticated();
        
//         setUser(storedUser);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Authentication failed', error);
//         // Clear any stored user data
//         localStorage.removeItem('user');
//         navigate('/login');
//       }
//     };

//     checkAuth();
//   }, [navigate]);

//   const handleLogout = () => {
//     AuthService.logout();
//   };

//   if (isLoading) {
//     return (
//       <Container>
//         <Typography>Loading...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <Card>
//         <CardContent>
//           <Typography variant="h4">
//             Welcome, {user.username}
//           </Typography>
//           <Button onClick={handleLogout}>
//             Logout
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// };

// export default Dashboard;



import { Typography, Button, Container } from '@mui/material';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear session or token and redirect to login
    window.location.href = '/login';
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
