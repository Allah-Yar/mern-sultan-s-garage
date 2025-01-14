
// import { Box, Button, Typography, Container } from '@mui/material';
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ProductCard from '../components/ProductCard'
import AppointmentForm from '../components/AppointmentForm'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
    {/* <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to the React Frontend
      </Typography>
      <Box mt={4}>
        <Button
          href="http://localhost:3000/login"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mx: 2 }}
        >
          Login
        </Button>
        <Button
          href="http://localhost:3000/dashboard"
          variant="contained"
          color="success"
          size="large"
          sx={{ mx: 2 }}
        >
          Dashboard
        </Button>
      </Box>
    </Container> */}
      <Hero />
      <About />
      <Services />
      <ProductCard />
      <AppointmentForm />
      <Testimonials />
    </>
  )
}

export default Home



