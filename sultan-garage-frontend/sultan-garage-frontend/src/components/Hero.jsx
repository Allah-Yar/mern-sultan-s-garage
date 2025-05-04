
// import { Box, Typography, Button, Container } from '@mui/material';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import hero from '../assets/images/hero.jpg';

// import { useState, useEffect } from 'react';
// // import { useHref } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// // import AppointmentForm from './AppointmentForm';


// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();

//   // Handle the scroll event
//   const handleScroll = () => {
//     if (window.scrollY > 300) { // Show the button after scrolling 300px
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll); // Cleanup on component unmount
//     };
//   }, []);

  
//   const handleScrollToHome = (path) => {
//     navigate(path);

//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//   })
//   };

//   const handleClick = () => {
//     navigate('/contact'); // Navigate to the AppointmentForm page
//   };

 
    
//   return (
//     <>
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: '60vh', // Adjust the height as needed
//         backgroundImage: `url(${hero})`, // Replace with your image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: 'blue',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         padding: 4, // theme.spacing(4)
//       }}
//     >
//         </Box>
        
//       <Container sx={{ padding: 4, textAlign: 'center' }}>
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: 700,

//             color: 'whitesmoke',
//             fontSize: '3rem',
//             '@media (max-width:600px)': {
//               fontSize: '2rem',
              
//             },
//           }}
//         >
//           Your Trusted Garage for Vehicle Repairs in Dubai
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             marginTop: 2, // theme.spacing(2)
//             fontSize: '1.5rem',
//             color: '#fff',
//             '@media (max-width:600px)': {
//               fontSize: '1rem',
//             },
//           }}
//         >
//           Expert mechanics, affordable services, and quick turnaround for all your automotive needs.
//           <hr style={{marginTop: '3rem'}}/>
//         </Typography>
        
        
//        {/* WhatsApp Button */}
//        {isVisible && (
//         <Button
//           variant="contained"
//           sx={{
//             position: 'fixed',
//             bottom: '20px', // Adjust based on your layout
//             right: '20px',
//             backgroundColor: '#25D366',
//             color: '#fff',
//             zIndex: 1000,
//             width: 60,
//             height: 60,
//             borderRadius: '50%',
//             '&:hover': {
//               backgroundColor: '#128C7E',
//             },
//           }}
//           onClick={handleClick}
//         >
//           <WhatsAppIcon sx={{ fontSize: 40 }} />
//         </Button>
//       )}

//        {isVisible && (
//         <Button
//           variant="contained"
//           sx={{
//             position: 'fixed',
//             bottom: '100px', // Adjust based on your layout
//             right: '20px',
//             backgroundColor: '#1B77D2',
//             color: '#fff',
//             zIndex: 1000,
//             width: 60,
//             height: 60,
//             borderRadius: '50%',
//             '&:hover': {
//               backgroundColor: 'blue',
//             },
//           }}
//           onClick={() => handleScrollToHome('/')}
//         >
//           Home
//         </Button>
//       )}
//       </Container>
//       </>
//   );
// };

// export default HeroSection;

import { Box, Typography, Button, Container } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import hero from '../assets/images/hero.jpg';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToHome = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <>
      {/* Hero Image with Overlay */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          backgroundImage: `url(${hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          // background: 'linear-gradient(to right, #1e1e2f, #23233b, #2c2c4c)'
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #1e1e2f, #23233b, #2c2c4c)',
            opacity: 0.85,
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        />
        {/* Text Content */}
        <Box sx={{ position: 'relative', zIndex: 2, px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'whitesmoke',
              fontSize: '3rem',
              '@media (max-width:600px)': {
                fontSize: '2rem',
              },
            }}
          >
            Your Trusted Garage for Vehicle Repairs in Dubai
          </Typography>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              fontSize: '1.5rem',
              color: '#e0e0e0',
              '@media (max-width:600px)': {
                fontSize: '1rem',
              },
            }}
          >
            Expert mechanics, affordable services, and quick turnaround for all your automotive needs.
          </Typography>
        </Box>
      </Box>

      <Container sx={{ padding: 4, textAlign: 'center' }}>
        <hr style={{ borderColor: '#444', margin: '3rem auto', width: '60%' }} />

        {/* WhatsApp Button */}
        {isVisible && (
          <Button
            variant="contained"
            sx={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#25D366',
              color: '#fff',
              zIndex: 1000,
              width: 60,
              height: 60,
              borderRadius: '50%',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              '&:hover': {
                backgroundColor: '#128C7E',
              },
            }}
            onClick={handleClick}
          >
            <WhatsAppIcon sx={{ fontSize: 40 }} />
          </Button>
        )}

        {/* Home Button */}
        {isVisible && (
          <Button
            variant="contained"
            sx={{
              position: 'fixed',
              bottom: '100px',
              right: '20px',
              backgroundColor: '#1B77D2',
              color: '#fff',
              zIndex: 1000,
              width: 60,
              height: 60,
              borderRadius: '50%',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              fontSize: '0.8rem',
              '&:hover': {
                backgroundColor: '#135aba',
              },
            }}
            onClick={() => handleScrollToHome('/')}
          >
            Home
          </Button>
        )}
      </Container>
    </>
  );
};

export default HeroSection;
