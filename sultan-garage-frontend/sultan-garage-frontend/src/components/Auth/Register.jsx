import  { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import AuthService from './AuthService';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Add client-side validation
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email format');
      return;
    }

    try {
      await AuthService.register({
        ...formData,
        role: 'admin' // Explicitly set role for admin registration
      });
      // Consider using a toast library for notifications
      alert('Registration successful! Proceed to login.');
      // Optionally redirect to login page
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Admin Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;
