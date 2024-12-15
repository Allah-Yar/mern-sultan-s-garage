import { Box, Grid, Card, CardContent, Typography } from '@mui/material'; //
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
    <Box sx={{ backgroundColor: '#f0f0f0', py: 8 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, textAlign: 'center', color: '#1a1a2e', mb: 4 }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: '#1a1a2e',
                mx: 2,
                textAlign: 'center',
                boxShadow: 7,
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
              }}
            >
              <CardContent>
                {/* Service Icon */}
                {service.icon}

                {/* Service Title */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mt: 2, color: 'whitesmoke' }}
                >
                  {service.title}
                </Typography>

                {/* Service Description */}
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: 'grey', fontSize: '1rem' }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
