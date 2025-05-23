

import {  useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import {Link} from '@mui/material';
// import Signup from './Signup';
// import Login from './Login';
// import {  useNavigate } from "react-router-dom";
// import CssBaseline from '@mui/material';
// import Paper from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';


function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [authStatus, setAuthStatus] = useState({
  //   isRegistered: false,
  //   isLoggedIn: false
  // });
  // const [isAuthenticated, setIsAuthenticated] = useState(false);  
  // useEffect(() => {
  //   // Check if token exists in localStorage
  //   const token = localStorage.getItem('token');
  //   setIsAuthenticated(!token);
  // }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleNavClick = (path) => {
  //   navigate(path);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  //   setAnchorElNav(null);
  //   window.location.reload();
  // };
  const handleNavClick = (path) => {
    setAnchorElNav(null); // close mobile menu
    navigate(path, { replace: false }); // navigate normally
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll smoothly
  };
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };


  

  return (
    // <AppBar position="sticky">
    // <AppBar position="sticky" sx={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }}>
<AppBar position="sticky" sx={{ background: 'linear-gradient(to right, #1e1e2f, #23233b, #2c2c4c)' }}>

      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Brand Name */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <Typography
            variant="h6"
            noWrap
            onClick={() => handleNavClick('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Sultan&apos;s Garage
          </Typography> */}
          <Typography
  variant="h6"
  onClick={() => handleNavClick('/')}
  sx={{
    mr: 7,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'Pacifico, cursive',
    fontSize: '1.8rem',
    color: '#ffca28',
    cursor: 'pointer',
    textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
  }}
>
  Sultan&apos;s Garage
</Typography>


          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{  display: { xs: 'block', md: 'none' } }}
            >
              {/* <MenuItem onClick={() => handleNavClick('/')}>
                <Typography>Home</Typography>
              </MenuItem>
              {!authStatus.isLoggedIn && (
                <>
                  <MenuItem onClick={() => handleNavClick('/services')}>
                    <Typography>Services</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavClick('/products')}>
                    <Typography>Products</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavClick('/contact')}>
                    <Typography>Contact</Typography>
                  </MenuItem>
                </>
              )} */}

               <MenuItem onClick={() => handleNavClick('/')}>
                 <Typography sx={{ textAlign: 'center' }}>Home</Typography>
               </MenuItem>
               <MenuItem onClick={() => handleNavClick('/about')}>
                 <Typography sx={{ textAlign: 'center' }}>About</Typography>
               </MenuItem>
               <MenuItem onClick={() => handleNavClick('/services')}>
                 <Typography sx={{ textAlign: 'center' }}>Services</Typography>
               </MenuItem>
               {isLoggedIn ?
               <MenuItem onClick={() => handleNavClick('/create')}>
                 <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
               </MenuItem> 
                : ''} 
               <MenuItem onClick={() => handleNavClick('/products')}>
                 <Typography sx={{ textAlign: 'center' }}>Products</Typography>
               </MenuItem>
               <MenuItem onClick={() => handleNavClick('/contact')}>
                 <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
               </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            onClick={() => handleNavClick('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              
              fontWeight: 700,
              fontFamily: 'Pacifico, cursive',
    fontSize: '1.8rem',
    color: '#ffca28',
              letterSpacing: '.3rem',
             
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Sultan&apos;s
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={() => handleNavClick('/')} sx={{ my: 2, color: 'white' }}>
              Home
            </Button>
            {/* {!authStatus.isLoggedIn && ( */}
              {/* <> */}
              <Button onClick={() => handleNavClick('/services')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Services
             </Button>
             {isLoggedIn ? 
             <Button onClick={() => handleNavClick('/create')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Create Product
             </Button> 
             : ''}
             <Button onClick={() => handleNavClick('/products')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Products
             </Button>
             <Button onClick={() => handleNavClick('/contact')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Contact
             </Button>
                
                
              {/* </> */}
            {/* )} */}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>S</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {/* <MenuItem>

          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: 'primary.main',
              mb: 2,
              mt:1,
              p:2,
              fontSize: { xs: '2rem', sm: '3rem' }
            }}
          >
            Welcome Admin
          </Typography>

        

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                startIcon={<DashboardIcon />}
                component={Link}
                to="/dashboard"
                sx={{
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
                onClick={() => setAnchorElUser(null)}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                startIcon={<LoginIcon />}
                component={Link}
                to="/login"
                sx={{
                  py: 1.5,
                  px: 4,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&:hover': {
                    bgcolor: 'primary.dark'
                  }
                }}
                onClick={() => setAnchorElUser(null)}
              >
                Login
              </Button>
            )}
          </Box>
       
          </MenuItem> */}

<MenuItem sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
  <Typography
    variant="h3"
    component="h2"
    gutterBottom
    sx={{
      fontWeight: 'bold',
      color: 'primary.main',
      mb: 2,
      mt: 1,
      p: 2,
      textAlign: 'center',
      fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Adjusts based on screen size
    }}
  >
    Welcome Admin
  </Typography>

  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    {isLoggedIn ? (
      <Button
        variant="contained"
        color="primary"
        startIcon={<DashboardIcon />}
        component={Link}
        to="/dashboard"
        sx={{
          py: { xs: 1, sm: 1.5 }, // Adjusts padding for small and larger screens
          px: { xs: 3, sm: 4 },
          textTransform: 'none',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          width: { xs: '90%', sm: 'auto' }, // Full width on small screens, auto on larger
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        onClick={() => setAnchorElUser(null)}
      >
        Dashboard
      </Button>
    ) : (
      <Button
        variant="contained"
        color="primary"
        startIcon={<LoginIcon />}
        component={Link}
        to="/login"
        sx={{
          py: { xs: 1, sm: 1.5 },
          px: { xs: 3, sm: 4 },
          textTransform: 'none',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          width: { xs: '90%', sm: 'auto' },
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        onClick={() => setAnchorElUser(null)}
      >
        Login
      </Button>
    )}
  </Box>
</MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
