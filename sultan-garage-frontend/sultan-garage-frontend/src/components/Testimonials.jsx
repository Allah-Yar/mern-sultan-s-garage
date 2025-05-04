
import { Box, Typography, Grid, Rating } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import hero from '../assets/images/hero.jpg';
// import { BorderColor } from '@mui/icons-material';

// Sample testimonial data with star ratings
const testimonials = [
  {
    name: 'John Doe',
    text: 'Great service! The team at the garage is very professional and quick. I highly recommend them.',
    position: 'Satisfied Customer',
    rating: 5, // Rating from 1 to 5 stars
    image: hero, // Replace with actual image paths
  },
  {
    name: 'Jane Smith',
    text: 'I had an oil change done here, and the process was smooth. I will definitely come back for future repairs.',
    position: 'Regular Client',
    rating: 4, // Rating from 1 to 5 stars
    image: hero, // Replace with actual image paths
  },
  {
    name: 'Mark Lee',
    text: 'They fixed my car in no time, and the customer service was top-notch. Highly recommend!',
    rating: 5, // Rating from 1 to 5 stars
    image: hero, // Replace with actual image paths
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ mt: 6, mb: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom color='white'>
        What Our Customers Say
      </Typography>
      
      <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop sx={{ borderRadius: 2, BorderColor: 'white', }}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 6, mx: 4,  backgroundColor: 'white', color: 'black', borderRadius: 2, boxShadow: 3,   }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
              {testimonial.text}
            </Typography>

            <Rating
              name={`rating-${index}`}  // Unique name for each testimonial's rating
              value={testimonial.rating}
              readOnly
              precision={0.5}
              sx={{ mb: 2 }}
            />

            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  style={{ width: 50, height: 50, borderRadius: '50%' }} 
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">{testimonial.name}</Typography>
                <Typography variant="body2">{testimonial.position}</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Carousel>
       {/* CSS for black carousel dots */}
       <style>{`
        .carousel .control-dots .dot {
          background-color: black !important;  /* Inactive dot */
        }

        .carousel .control-dots .dot.selected {
          background-color: #1a1a2e !important;  /* Active dot */
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;




