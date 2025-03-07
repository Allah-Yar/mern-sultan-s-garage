// // import  { useState } from 'react';
// // import axios from 'axios';
// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
  
// //     const handleSubmit = async (e) => {
// //       e.preventDefault();
// //       try {
// //         const res = await axios.post('http://localhost:3000/api/login', { email, password });
// //         localStorage.setItem('token', res.data.token);
// //         alert('Login successful');
// //       } catch (err) {
// //         alert('Error logging in', err);
// //       }
// //     };
  
// //     return (
// //       <div>
// //         <h1>Login</h1>
// //         <form onSubmit={handleSubmit}>
// //           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //           <button type="submit">Login</button>
// //         </form>
// //       </div>
// //     );
// //   };

// // export default Login;

// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import {
//   Container,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Alert,
//   CssBaseline,
//     Link
// } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme = createTheme();

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('https://sultan-garage-production.up.railway.app/api/login', { 
//         email, 
//         password 
//       }, {
//         headers: { 'Content-Type': 'application/json' }
//       });
      
//       // Access response data correctly
//       if (res.data.token) {
//         localStorage.setItem('token', res.data.token);
//         navigate('/dashboard', { replace: true }); // Redirect to dashboard
//         window.location.reload(); // Force a refresh to update UI
//       }
      
//       // localStorage.setItem('token', res.data.token);
//       // navigate('/dashboard'); // Redirect to dashboard after login
//       // window.location.reload();
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Admin Login
//           </Typography>
          
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
            
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {error && (
//               <Alert severity="error" sx={{ mt: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               disabled={loading}
//             >
//               {loading ? 'Signing In...' : 'Sign In'}
//             </Button>
//           </Box>
//           <Box sx={{ textAlign: 'center' }}>
//           Don&apos;t have an account? &nbsp;
//               <Link href="/signup" variant="body2">
//                 Sign Up
//               </Link>
//             </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Login;

// // client/src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// function Dashboard() {
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchDashboard = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/dashboard', {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//         setMessage(response.data.message);
//       } catch (err) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('isAdmin');
//         navigate('/login');
//         console.error(err);
//       }
//     };
//     fetchDashboard();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('isAdmin');
//     navigate('/');
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <p>{message}</p>
//       <button onClick={handleLogout}>Logout</button>
//       <button><Link to="/">Home</Link></button>
//     </div>
//   );
// }

// export default Dashboard;

// client/src/components/Dashboard.js
// // client/src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('isAdmin', response.data.isAdmin);
      
//       if (response.data.isAdmin) {
//         navigate('/dashboard');
//       } else {
//         setError('Only admins can access the dashboard');
//       }
//     } catch (err) {
//       setError(err.response?.data.message || 'Login failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             required
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/register">Register</a></p>
//     </div>
//   );
// }

// export default Login;

// client/src/components/Login.js
import  { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Link as MUILink,
  CssBaseline
} from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL =  window.location.hostname === 'localhost'
      ? 'http://localhost:3000/api'
      : 'https://sultan-garage.up.railway.app/api';

      const LOGIN_URL = `${BASE_URL}/login`;

      const response = await axios.post(LOGIN_URL , { email, password },
        {headers: { 'Content-Type': 'application/json' }}
      );
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('isAdmin', response.data.isAdmin);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('isAdmin', response.data.isAdmin);
      
      if (response.data.isAdmin) {
        navigate('/dashboard');
        window.location.reload();
      } else {
        setError('Only admins can access the dashboard');
      }
    } catch (err) {
      setError(err.response?.data.message || 'Login failed');
    }
  };

  return (
    <>
      <CssBaseline />
      <Container 
        maxWidth="sm" 
        sx={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center',
          py: 4 
        }}
      >
        <Paper 
          elevation={6} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            width: '100%',
            borderRadius: 2
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 3
            }}
          >
            Login
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{ mb: 2 }}
            />
            
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your password"
              sx={{ mb: 2 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ 
                py: 1.5,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: 'primary.dark'
                }
              }}
            >
              
              Login
            </Button>

            <Typography 
              variant="body2" 
              align="center" 
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              Don&apos;t have an account?{' '}
              <MUILink 
                component={Link} 
                to="/register" 
                sx={{ 
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Register
              </MUILink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Login;