  

import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [authStatus, setAuthStatus] = useState({
    isRegistered: false,
    isLoggedIn: false
  });

   

  // Check if user is already logged in on component mount
  // useEffect(() => {
  //   const checkLoginStatus = () => {
  //     // Check localStorage or sessionStorage for auth status
  //     const registered = localStorage.getItem('isRegistered') === 'true';
  //     const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //     setAuthStatus({ isRegistered: registered, isLoggedIn: loggedIn });
  //   };

  //   checkLoginStatus();
  // }, []);

    // Use more secure auth check
    useEffect(() => {
      const checkLoginStatus = () => {
        try {
          const registered = localStorage.getItem('isRegistered') === 'true';
          const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
          setAuthStatus({ isRegistered: registered, isLoggedIn: loggedIn });
        } catch (error) {
          console.error('Error checking auth status:', error);
          setAuthStatus({ isRegistered: false, isLoggedIn: false });
        }
      };
  
      checkLoginStatus();
    }, []);



  // const handleRegister = () => {
  //   localStorage.setItem('isRegistered', 'true');
  //   setAuthStatus(prev => ({ ...prev, isRegistered: true }));
  // };

    // Improve button handlers with error handling
    // const handleRegister = useCallback(() => {
    //   try {
    //     localStorage.setItem('isRegistered', 'true');
    //     setAuthStatus(prev => ({ ...prev, isRegistered: true }));
    //   } catch (error) {
    //     console.error('Error during registration:', error);
    //   }
    // }, []);

    const handleRegister = useCallback(() => {
      try {
        localStorage.setItem('isRegistered', 'true');
        setAuthStatus(prev => ({ ...prev, isRegistered: true }));
        
        // Force page refresh to reflect changes properly
        window.location.reload();
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }, []);
    

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setAuthStatus(prev => ({ ...prev, isLoggedIn: true }));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    // localStorage.removeItem('isRegistered');
    setAuthStatus({  isLoggedIn: false });
    navigate('/');
  };

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const getAuthButton = () => {
  //   if (authStatus.isLoggedIn) {
  //     return (
  //       <>
  //         <Button
  //           href="http://localhost:3000/dashboard"
  //           variant="contained"
  //           color="success"
  //           size="large"
  //           sx={{ mx: 2 }}
  //         >
  //           Dashboard
  //         </Button>
  //         <Button
  //           onClick={handleLogout}
  //           variant="contained"
  //           color="error"
  //           size="large"
  //           sx={{ mx: 2 }}
  //         >
  //           Logout
  //         </Button>
  //       </>
  //     );
  //   } else if (authStatus.isRegistered) {
  //     return (
  //       <Button
  //         href="http://localhost:3000/login"
  //         onClick={handleLogin}
  //         variant="contained"
  //         color="primary"
  //         size="large"
  //         sx={{ mx: 2 }}
  //       >
  //         Login
  //       </Button>
  //     );
  //   } else {
  //     return (
  //       <Button
  //         // href="http://localhost:3000/register"
  //         onClick={handleRegister}
  //         variant="contained"
  //         color="secondary"
  //         size="large"
  //         sx={{ mx: 2 }}
  //       >
  //         Register
  //       </Button>
  //     );
  //   }
  // };

  const getAuthButton = () => {
    if (authStatus.isLoggedIn) {
      return (
        <>
          <Button
            href="https://sultan-garage-production.up.railway.app/dashboard"
            variant="contained"
            color="success"
            size="large"
            sx={{ mx: 2 }}
          >
            Dashboard
          </Button>
          <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
            size="large"
            sx={{ mx: 2 }}
          >
            Logout
          </Button>
        </>
      );
    } 
  
    if (!authStatus.isRegistered) {
      return (
        <Button
          onClick={handleRegister}
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mx: 2 }}
        >
          Register
        </Button>
      );
    }
  
    return (
      <Button
        href="https://sultan-garage-production.up.railway.app/login"
        onClick={handleLogin}
        variant="contained"
        color="primary"
        size="large"
        sx={{ mx: 2 }}
      >
        Login
      </Button>
    );
  };

  // const getAuthButton = () => {
  //   if (authStatus.isLoggedIn) {
  //     return (
  //       <>
  //         <Button
  //           href="http://localhost:3000/dashboard"
  //           variant="contained"
  //           color="success"
  //           size="large"
  //           sx={{ mx: 2 }}
  //         >
  //           Dashboard
  //         </Button>
  //         <Button
  //           onClick={handleLogout}
  //           variant="contained"
  //           color="error"
  //           size="large"
  //           sx={{ mx: 2 }}
  //         >
  //           Logout
  //         </Button>
  //       </>
  //     );
  //   } 
    
  //   // Show register only if the user is not logged in
  //   return (
  //     <Button
  //       href="http://localhost:3000/register"
  //       onClick={handleRegister}
  //       variant="contained"
  //       color="secondary"
  //       size="large"
  //       sx={{ mx: 2 }}
  //     >
  //       {authStatus.isRegistered ? "Login" : "Register"}
  //     </Button>
  //   );
  // };
  

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and Brand Name */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
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
              sx={{ display: { xs: 'block', md: 'none' } }}
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
               {/* {authStatus.isLoggedIn ? */}
               <MenuItem onClick={() => handleNavClick('/create')}>
                 <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
               </MenuItem> 
               {/* } */}
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
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
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
             {/* {authStatus.isLoggedIn ?  */}
             <Button onClick={() => handleNavClick('/create')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Create Product
             </Button> 
             {/* } */}
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
              <MenuItem>
                { getAuthButton() }
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;