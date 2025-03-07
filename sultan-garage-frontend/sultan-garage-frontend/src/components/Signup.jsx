

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
//   Link
// } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const defaultTheme = createTheme();

// const Signup = () => {
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
//       await axios.post('https://sultan-garage-production.up.railway.app/api/signup', { 
        
//         email, 
//         password 
//       }, {
//         headers: { 'Content-Type': 'application/json' }
//       });
//       alert('Admin created successfully');
//       navigate('/login'); // Redirect to login after successful signup
//       setEmail('');
//       setPassword('');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Registration failed. Please try again.');
//     } finally {
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
//             Admin Registration
//           </Typography>
          
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
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
//               autoComplete="new-password"
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
//               {loading ? 'Creating Account...' : 'Create Account'}
//             </Button>

//             <Box sx={{ textAlign: 'center' }}>
//             Already have an account? &nbsp;
//               <Link href="/login" variant="body2">
//                 Sign in
//               </Link>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Signup;


// // client/src/components/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/register', { email, password });
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data.message || 'Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
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
//         <button type="submit">Register</button>
//       </form>
//       <p>Already have an account? <a href="/login">Login</a></p>
//     </div>
//   );
// }

// export default Register;

// client/src/components/Register.js
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

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : 'https://sultan-garage-production.up.railway.app/api';
      const SIGNUP_URL = `${BASE_URL}/register`;
      await axios.post(SIGNUP_URL, { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate('/login');
    } catch (err) {
      setError(err.response?.data.message || 'Registration failed');
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
            Register
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
              Register
            </Button>

            <Typography 
              variant="body2" 
              align="center" 
              sx={{ mt: 2, color: 'text.secondary' }}
            >
              Already have an account?{' '}
              <MUILink 
                component={Link} 
                to="/login" 
                sx={{ 
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Login
              </MUILink>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Signup;
