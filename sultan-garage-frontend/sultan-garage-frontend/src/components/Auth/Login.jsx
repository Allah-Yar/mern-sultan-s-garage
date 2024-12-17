import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Box, 
  IconButton, 
  InputAdornment 
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear specific field error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Enhanced validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setError('Email is required');
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format');
      return;
    }
    if (!formData.password) {
      setError('Password is required');
      return;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
  setError('');

  try {
    const response = await AuthService.login(formData);
    
    // Add detailed logging
    console.log('Login response:', response);
    console.log('Response data:', response.data);
    
    // Ensure you're storing the correct user data
    if (response.data && response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Use replace to prevent going back to login
      navigate('/dashboard', { replace: true });
    } else {
      setError('Unexpected response format');
    }
  } catch (err) {
    console.error('Login error:', err);
    console.error('Error response:', err.response);
    
    const errorMessage = err.response?.data?.message || 
                         err.message || 
                         'Login failed';
    setError(errorMessage);
  } finally {
    setIsLoading(false);
  }
};
  

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{ 
          marginTop: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}
      >
        <Typography 
          component="h1" 
          variant="h4" 
          gutterBottom
        >
          Admin Login
        </Typography>
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          noValidate 
          sx={{ width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            error={!!error && error.includes('email')}
            helperText={error && error.includes('email') ? error : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!error && !error.includes('email')}
            helperText={error && !error.includes('email') ? error : ''}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? 'Logging In...' : 'Login'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;