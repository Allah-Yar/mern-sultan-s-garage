import  { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    vehicleType: '',
    serviceType: '',
    preferredDate: '',
  });

  const vehicleTypes = ['Car', 'Bike', 'Truck', 'SUV'];
  const serviceTypes = ['Oil Change', 'Tire Replacement', 'Engine Repair', 'General Service'];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a formatted message with the form data
    const message = `
      *Appointment Details:*\n
      Name: ${formData.name}\n
      Address: ${formData.address}\n
      Vehicle Type: ${formData.vehicleType}\n
      Service Type: ${formData.serviceType}\n
      Preferred Date/Time: ${formData.preferredDate}
    `;
    
    // WhatsApp phone number 
    const phoneNumber = '+971568415565'; 
  
    // WhatsApp link for mobile
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim())}`;
    
    // WhatsApp link for desktop WhatsApp app
    const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message.trim())}`;
    
    // WhatsApp Web link for browsers
    const whatsappWebLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message.trim())}`;
    
    // Check if the user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      // If mobile, open the mobile WhatsApp app link
      window.open(whatsappLink, '_blank');
    } else if (window.open) {

      // It will open the web version of the whatsapp web link
      window.open(whatsappWebLink, '_blank');
      
    } else {
      // Try opening the desktop WhatsApp app
      const startTime = Date.now();
      const timeoutDuration = 3000; // 3 seconds
      // Check if the web is opened after 3 seconds
      // If not, open the desktop app link
      // This is to handle the case where the web version is not opened
      // But listen there is limitation from WhatsApp for desktop app, so, it is better to use the web version
      setTimeout(() => {
        if (Date.now() - startTime < timeoutDuration + 500) {
          // Try to open the desktop app link
        window.location.href = whatsappAppLink;
          
        }
      }, timeoutDuration);
    }
  
    // Add your submission logic here (e.g., send to server or store locally)
    alert('Appointment Booked Successfully!');
    
    // Reset form after submission
    setFormData({
      name: '',
      address: '',
      vehicleType: '',
      serviceType: '',
      preferredDate: '',
    });
  };

  const handleSubmitWithoutForm = (e) => {
    e.preventDefault();

    // Create a formatted message with the form data
    const message = 'Hello, I would like to book an appointment.';
    // WhatsApp phone number 
    const phoneNumber = '+971568415565'; 
    // WhatsApp link for mobile
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // WhatsApp link for desktop WhatsApp app
    const whatsappAppLink = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    // WhatsApp Web link for browsers
    const whatsappWebLink = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    
    // Check if the user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // If mobile, open the mobile WhatsApp app link
      window.open(whatsappLink, '_blank');
    } else if (window.open) {
      // It will open the web version of the whatsapp web link
      window.open(whatsappWebLink, '_blank');
    } else {
      // Try opening the desktop WhatsApp app
      const startTime = Date.now();
      const timeoutDuration = 3000; // 3 seconds
      // Check if the web is opened after 3 seconds
      // If not, open the desktop app link
      // This is to handle the case where the web version is not opened
      // But listen there is limitation from WhatsApp for desktop app, so, it is better to use the web version
      setTimeout(() => {
        if (Date.now() - startTime < timeoutDuration + 500) {
          // Try to open the desktop app Link
          window.location.href = whatsappAppLink;
          
        }
      }, timeoutDuration);
    }
  };
  
  
  

  return (
    <>
    <Box
      sx={{
        maxWidth: {xs: '100%', sm: '80%', md: '60%'},
        px: {xs: 2, sm: 3},
        mx: 'auto',
        
        mt: 4,
        mb: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white',
        width: '100%',
         // Add responsiveness using breakpoints
    '@media (max-width:768px)': {
        padding: 3, // Reduce padding on smaller screens
        maxWidth: '80%', // Make it full width on small screens
        
      },
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold', color: '#1a1a2e' }}
      >
        Book an Appointment via WhatsApp
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              label="Your Current Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Vehicle Type */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Vehicle Type"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              fullWidth
              required
            >
              {vehicleTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Service Type */}
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Service Type"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              fullWidth
              required
            >
              {serviceTypes.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Preferred Date/Time */}
          <Grid item xs={12}>
            <TextField
              label="Preferred Date/Time"
              name="preferredDate"
              type="datetime-local"
              value={formData.preferredDate}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Button
          type="submit"
      variant="contained"
      sx={{

        marginTop: 3, // theme.spacing(3)
        marginBottom: 2, // theme.spacing(2)
        backgroundColor: '#25D366', // WhatsApp green color
        color: '#fff',
        width: 60, // Set a fixed width for the circular button
        height: 60, // Set the same height to make it circular
        borderRadius: '50%', 
        '&:hover': {
          backgroundColor: '#128C7E', // Darker green on hover
        },
      }}
   
      
    >
      <WhatsAppIcon sx={{ fontSize: 40 }} />
    </Button>
          </Grid>
        </Grid>
      </form>

      {/* For Direct Contact */}
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 3, mt: 3, textAlign: 'center', fontWeight: 'bold', color: '#1a1a2e' }}
      > OR
      <br />
        Direct Contact via WhatsApp
      </Typography>
      <Button
          type="submit"
      variant="contained"
      sx={{

        marginTop: 3, // theme.spacing(3)
        marginBottom: 2, // theme.spacing(2)
        backgroundColor: '#25D366', // WhatsApp green color
        color: '#fff',
        width: 60, // Set a fixed width for the circular button
        height: 60, // Set the same height to make it circular
        borderRadius: '50%', 
        '&:hover': {
          backgroundColor: '#128C7E', // Darker green on hover
        },
      }}
      onClick={handleSubmitWithoutForm}
      
    >
      <WhatsAppIcon sx={{ fontSize: 40 }} />
    </Button>
    </Grid>
    
    </Box>
    <hr style={{marginTop: '3rem'}}/>
    </>
    
  );
};

export default AppointmentForm;
