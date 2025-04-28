
// import { Box, Typography, Container, Grid } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
// import hero from '../assets/images/hero.jpg';
// // import glogo from '../assets/images/glogo.jpg';
// import profes from '../assets/images/profes.jpg';
// import team from '../assets/images/team.jpg';

// const AboutSection = () => {
//   return (
//     <Box sx={{ color: 'whitesmoke', py: 8 }}>
//       <Container>
//         {/* Title */}
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 700,
//             textAlign: 'center',
            
//             mb: 4,
//           }}
//         >
//           About Us
//         </Typography>

//         {/* Brief Description */}
//         <Grid container spacing={4} justifyContent="center">
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="h5"
//               sx={{
//                 fontWeight: 500,
                
//                 lineHeight: 1.8,
//                 fontSize: '1.2rem',
//                 textAlign: 'center',
//               }}
//             >
//               Welcome to our garage, the leading auto repair and service provider in Dubai. Our mission is to provide top-quality vehicle repairs, diagnostics, and maintenance at affordable prices. With years of experience and a dedicated team, we ensure that your vehicle runs smoothly and safely on the road. Choose us for reliable, honest, and timely services.
//             </Typography>
//           </Grid>

//           {/* Image Carousel */}
//           <Grid item  xs={12} md={6}>
//             <Carousel >
//               <div >
//                 <img src={hero} alt="Garage View"  style={{
//           border: '1px solid white',
//           borderRadius: '5px',
//           backgroundColor: '#fff',
//         }}/>
//                 <p className="legend">Our Garage</p>
//               </div>
//               <div>
//                 <img src={team} alt="Our Team"  style={{
//           border: '1px solid white',
//           borderRadius: '15px',
//           backgroundColor: '#fff',
//         }}/>
//                 <p className="legend">Meet the Team</p>
//               </div>
//               <div>
//                 <img src={profes} alt="Car Repair"  style={{
//           border: '1px solid white',
//           borderRadius: '15px',
//           backgroundColor: '#fff',
//         }}/>
//                 <p className="legend">Professional Car Repair</p>
//               </div>
//             </Carousel>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default AboutSection;

import { Box, Typography, Container, Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // Import MUI Icons
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import hero from '../assets/images/hero.jpg';
import profes from '../assets/images/profes.jpg';
import team from '../assets/images/team.jpg';

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
              Welcome to our garage, the leading auto repair and service provider in Dubai. 
              Our mission is to provide top-quality vehicle repairs, diagnostics, and maintenance 
              at affordable prices. With years of experience and a dedicated team, we ensure that 
              your vehicle runs smoothly and safely on the road. Choose us for reliable, honest, and timely services.
            </Typography>
          </Grid>

          {/* Image Carousel */}
          <Grid item xs={12} md={6}>
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={3000}
              showStatus={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      top: 'calc(50% - 20px)',
                      left: 15,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <ArrowBackIos fontSize="small" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      top: 'calc(50% - 20px)',
                      right: 15,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      color: 'white',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s, transform 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.7)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.6)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <ArrowForwardIos fontSize="small" />
                  </button>
                )
              }
            >
              <div>
                <img 
                  src={hero} 
                  alt="Garage View"
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    border: '1px solid white',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                  }}
                />
                <p className="legend">Our Garage</p>
              </div>
              <div>
                <img 
                  src={team} 
                  alt="Our Team"
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    border: '1px solid white',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                  }}
                />
                <p className="legend">Meet the Team</p>
              </div>
              <div>
                <img 
                  src={profes} 
                  alt="Car Repair"
                  style={{
                    width: '100%',
                    height: '350px',
                    objectFit: 'cover',
                    border: '1px solid white',
                    borderRadius: '15px',
                    backgroundColor: '#fff',
                  }}
                />
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
