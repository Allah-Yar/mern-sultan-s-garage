
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'; // MUI icons for social media

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1a1a2e', color: 'white', py: 4, px: 2 }}>
      <Grid container spacing={4} sx={{ justifyContent: 'space-between' }}>
        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" gutterBottom>Contact Information</Typography>
          <Typography variant="body2">123 Garage Street</Typography>
          <Typography variant="body2">Dubai, UAE</Typography>
          <Typography variant="body2">Email: contact@garage.com</Typography>
          <Typography variant="body2">Phone: +971 123 456 789</Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4"  gutterBottom>Quick Links</Typography>
          <Link href="/" color="inherit" sx={{ display: 'block' }}>Home</Link>
          
          <Link href="/about" color="inherit" sx={{ display: 'block' }}>About</Link>
          <Link href="/services" color="inherit" sx={{ display: 'block' }}>Services</Link>
          <Link href="/contact" color="inherit" sx={{ display: 'block' }}>Contact</Link>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h5" gutterBottom>Follow Us</Typography>
          <IconButton href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
            <Twitter />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: 'white' }}>
            <LinkedIn />
          </IconButton>
        </Grid>

        {/* Copyright Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Sultan&apos;s Garage. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
