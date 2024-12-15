
import { Box, Typography, Container, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import hero from '../assets/images/hero.jpg';

const AboutSection = () => {
  return (
    <Box sx={{ color: 'whitesmoke', py: 8 }}>
      <Container>
        {/* Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            
            mb: 4,
          }}
        >
          About Us
        </Typography>

        {/* Brief Description */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                
                lineHeight: 1.8,
                fontSize: '1.2rem',
                textAlign: 'center',
              }}
            >
              Welcome to our garage, the leading auto repair and service provider in Dubai. Our mission is to provide top-quality vehicle repairs, diagnostics, and maintenance at affordable prices. With years of experience and a dedicated team, we ensure that your vehicle runs smoothly and safely on the road. Choose us for reliable, honest, and timely services.
            </Typography>
          </Grid>

          {/* Image Carousel */}
          <Grid item  xs={12} md={6}>
            <Carousel >
              <div >
                <img src={hero} alt="Garage View"  style={{
          border: '1px solid white',
          borderRadius: '5px',
          backgroundColor: '#fff',
        }}/>
                <p className="legend">Our Garage</p>
              </div>
              <div>
                <img src={hero} alt="Our Team"  style={{
          border: '1px solid white',
          borderRadius: '15px',
          backgroundColor: '#fff',
        }}/>
                <p className="legend">Meet the Team</p>
              </div>
              <div>
                <img src={hero} alt="Car Repair"  style={{
          border: '1px solid white',
          borderRadius: '15px',
          backgroundColor: '#fff',
        }}/>
                <p className="legend">Professional Car Repair</p>
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
