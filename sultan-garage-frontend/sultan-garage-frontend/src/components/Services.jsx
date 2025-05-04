// // // import { Box, Grid, Card, CardContent, Typography } from '@mui/material'; //
// // // import BuildIcon from '@mui/icons-material/Build';
// // // import OpacityIcon from '@mui/icons-material/Opacity';
// // // import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// // // import SettingsIcon from '@mui/icons-material/Settings';

// // // const services = [
// // //   {
// // //     title: 'Vehicle Repairs',
// // //     description: 'Comprehensive vehicle repairs to ensure your car is road-ready.',
// // //     icon: <BuildIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// // //   },
// // //   {
// // //     title: 'Oil Change',
// // //     description: 'Quality oil changes to keep your engine running smoothly.',
// // //     icon: <OpacityIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// // //   },
// // //   {
// // //     title: 'Tire Replacement',
// // //     description: 'Expert tire replacement and balancing services.',
// // //     icon: <DirectionsCarIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// // //   },
// // //   {
// // //     title: 'Engine Diagnostics',
// // //     description: 'Accurate diagnostics to identify and fix engine issues.',
// // //     icon: <SettingsIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// // //   },
// // // ];

// // // const ServicesSection = () => {
// // //   return (
// // //     <Box sx={{ backgroundColor: '#f0f0f0', py: 8 }}>
// // //       <Typography
// // //         variant="h3"
// // //         sx={{ fontWeight: 700, textAlign: 'center', color: '#1a1a2e', mb: 4 }}
// // //       >
// // //         Our Services
// // //       </Typography>

// // //       <Grid container spacing={4} justifyContent="center" alignItems="stretch">
// // //         {services.map((service, index) => (
// // //           <Grid item xs={12} sm={6} md={3} key={index}>
// // //             <Card
// // //               sx={{
// // //                 backgroundColor: '#1a1a2e',
// // //                 mx: 2,
// // //                 textAlign: 'center',
// // //                 boxShadow: 7,
// // //                 borderRadius: 2,
// // //                 height: '100%',
// // //                 transition: 'transform 0.3s',
// // //                 '&:hover': { transform: 'scale(1.05)' },
// // //               }}
// // //             >
// // //               <CardContent>
// // //                 {/* Service Icon */}
// // //                 {service.icon}

// // //                 {/* Service Title */}
// // //                 <Typography
// // //                   variant="h5"
// // //                   sx={{ fontWeight: 600, mt: 2, color: 'whitesmoke' }}
// // //                 >
// // //                   {service.title}
// // //                 </Typography>

// // //                 {/* Service Description */}
// // //                 <Typography
// // //                   variant="body2"
// // //                   sx={{ mt: 1, color: 'grey', fontSize: '1rem' }}
// // //                 >
// // //                   {service.description}
// // //                 </Typography>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>
// // //         ))}
// // //       </Grid>
// // //     </Box>
// // //   );
// // // };

// // // export default ServicesSection;

// // import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
// // import BuildIcon from '@mui/icons-material/Build';
// // import OpacityIcon from '@mui/icons-material/Opacity';
// // import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// // import SettingsIcon from '@mui/icons-material/Settings';

// // const services = [
// //   {
// //     title: 'Vehicle Repairs',
// //     description: 'Comprehensive vehicle repairs to ensure your car is road-ready.',
// //     icon: <BuildIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// //   },
// //   {
// //     title: 'Oil Change',
// //     description: 'Quality oil changes to keep your engine running smoothly.',
// //     icon: <OpacityIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// //   },
// //   {
// //     title: 'Tire Replacement',
// //     description: 'Expert tire replacement and balancing services.',
// //     icon: <DirectionsCarIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// //   },
// //   {
// //     title: 'Engine Diagnostics',
// //     description: 'Accurate diagnostics to identify and fix engine issues.',
// //     icon: <SettingsIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
// //   },
// // ];

// // const ServicesSection = () => {
// //   return (
// //     <Box sx={{ backgroundColor: '#f0f0f0', py: 8 }}>
// //       <Typography
// //         variant="h3"
// //         sx={{ fontWeight: 700, textAlign: 'center', color: '#1a1a2e', mb: 4 }}
// //       >
// //         Our Services
// //       </Typography>

// //       <Grid container spacing={4} justifyContent="center" alignItems="stretch">
// //         {services.map((service, index) => (
// //           <Grid item xs={12} sm={6} md={3} key={index}>
// //             {/* Glowing Border Wrapper */}
// //             <Box
// //               sx={{
// //                 position: 'relative',
// //                 borderRadius: 2,
// //                 '&::before': {
// //                   content: '""',
// //                   position: 'absolute',
// //                   top: -2,
// //                   left: -2,
// //                   right: -2,
// //                   bottom: -2,
// //                   zIndex: 0,
// //                   borderRadius: 3,
// //                   background: 'linear-gradient(45deg, #ff6ec4, #7873f5, #4ADEDE, #ff6ec4)',
// //                   backgroundSize: '600% 600%',
// //                   animation: 'moveBorder 4s linear infinite',
// //                   filter: 'blur(5px)',
// //                 },
// //               }}
// //             >
// //               <Card
// //                 sx={{
// //                   position: 'relative',
// //                   zIndex: 1,
// //                   backgroundColor: '#1a1a2e',
// //                   textAlign: 'center',
// //                   boxShadow: 7,
// //                   borderRadius: 2,
// //                   height: '100%',
// //                   overflow: 'hidden',
// //                   transition: 'transform 0.3s',
// //                   '&:hover': { transform: 'scale(1.05)' },
// //                 }}
// //               >
// //                 <CardContent>
// //                   {service.icon}
// //                   <Typography
// //                     variant="h5"
// //                     sx={{ fontWeight: 600, mt: 2, color: 'whitesmoke' }}
// //                   >
// //                     {service.title}
// //                   </Typography>
// //                   <Typography
// //                     variant="body2"
// //                     sx={{ mt: 1, color: 'grey', fontSize: '1rem' }}
// //                   >
// //                     {service.description}
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             </Box>
// //           </Grid>
// //         ))}
// //       </Grid>

// //       {/* Keyframes for border animation */}
// //       <style>{`
// //         @keyframes moveBorder {
// //           0% { background-position: 0% 50%; }
// //           50% { background-position: 100% 50%; }
// //           100% { background-position: 0% 50%; }
// //         }
// //       `}</style>
// //     </Box>
// //   );
// // };

// // export default ServicesSection;

// import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
// import BuildIcon from '@mui/icons-material/Build';
// import OpacityIcon from '@mui/icons-material/Opacity';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import SettingsIcon from '@mui/icons-material/Settings';

// const services = [
//   {
//     title: 'Vehicle Repairs',
//     description: 'Comprehensive vehicle repairs to ensure your car is road-ready.',
//     icon: <BuildIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
//   },
//   {
//     title: 'Oil Change',
//     description: 'Quality oil changes to keep your engine running smoothly.',
//     icon: <OpacityIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
//   },
//   {
//     title: 'Tire Replacement',
//     description: 'Expert tire replacement and balancing services.',
//     icon: <DirectionsCarIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
//   },
//   {
//     title: 'Engine Diagnostics',
//     description: 'Accurate diagnostics to identify and fix engine issues.',
//     icon: <SettingsIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <Box sx={{ default: '#0A0A23', py: 8 }}>
//       <Typography
//         variant="h3"
//         sx={{ fontWeight: 700, textAlign: 'center', color: 'whitesmoke', mb: 4 }}
//       >
//         Our Services
//       </Typography>

//       <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//         {services.map((service, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Box
//               sx={{
//                 position: 'relative',
//                 borderRadius: 2,
//                 mx: 2,
//                 '&::before': {
//                   content: '""',
//                   position: 'absolute',
//                   top: -2,
//                   left: -2,
//                   right: -2,
//                   bottom: -2,
//                   zIndex: 0,
//                   borderRadius: 3,
//                   background: 'linear-gradient(45deg, #ff6ec4, #7873f5, #4ADEDE, #ff6ec4)',
//                   backgroundSize: '600% 600%',
//                   animation: 'moveBorder 4s linear infinite',
//                   filter: 'blur(5px)',
//                 },
//               }}
//             >
//               <Card
//                 sx={{
//                   position: 'relative',
//                   zIndex: 1,
//                   backgroundColor: '#1a1a2e',
//                   textAlign: 'center',
//                   boxShadow: 7,
//                   borderRadius: 2,
//                   height: '100%',
//                   overflow: 'hidden',
//                   transition: 'transform 0.3s',
//                   '&:hover': { transform: 'scale(1.05)' },
//                 }}
//               >
//                 <CardContent>
//                   {service.icon}
//                   <Typography
//                     variant="h5"
//                     sx={{ fontWeight: 600, mt: 2, color: 'whitesmoke' }}
//                   >
//                     {service.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     sx={{ mt: 1, color: 'grey', fontSize: '1rem' }}
//                   >
//                     {service.description}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       <style>{`
//         @keyframes moveBorder {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default ServicesSection;




import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import OpacityIcon from '@mui/icons-material/Opacity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';

const services = [
  {
    title: 'Vehicle Repairs',
    description: 'Comprehensive vehicle repairs to ensure your car is road-ready.',
    icon: <BuildIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
  },
  {
    title: 'Oil Change',
    description: 'Quality oil changes to keep your engine running smoothly.',
    icon: <OpacityIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
  },
  {
    title: 'Tire Replacement',
    description: 'Expert tire replacement and balancing services.',
    icon: <DirectionsCarIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
  },
  {
    title: 'Engine Diagnostics',
    description: 'Accurate diagnostics to identify and fix engine issues.',
    icon: <SettingsIcon sx={{ fontSize: 50, color: 'whitesmoke' }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#0A0A23' }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, textAlign: 'center', color: 'whitesmoke', mb: 4 }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                mx: 2,
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                animation: `electricity 1.5s ease-in-out ${index * 0.25}s infinite`, // stagger the start times for each card
              }}
            >
              <Card
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: '#1a1a2e',
                  textAlign: 'center',
                  boxShadow: 7,
                  borderRadius: 2,
                  height: '100%',
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardContent>
                  {service.icon}
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, mt: 2, color: 'whitesmoke' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, color: 'grey', fontSize: '1rem' }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Keyframes for continuous electricity effect */}
      <style>{`
        @keyframes electricity {
          0% {
            background-position: 0% 50%;
            opacity: 0.8;
          }
          25% {
            background-position: 50% 50%;
            opacity: 1;
          }
          50% {
            background-position: 100% 50%;
            opacity: 0.8;
          }
          75% {
            background-position: 75% 50%;
            opacity: 1;
          }
          100% {
            background-position: 0% 50%;
            opacity: 0.8;
          }
        }
      `}</style>
    </Box>
  );
};

export default ServicesSection;
