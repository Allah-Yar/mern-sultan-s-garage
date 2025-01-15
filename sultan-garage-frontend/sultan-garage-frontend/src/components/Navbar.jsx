// // import * as React from 'react';
// // import { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // import Menu from '@mui/material/Menu';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// // import Button from '@mui/material/Button';
// // import Tooltip from '@mui/material/Tooltip';
// // import MenuItem from '@mui/material/MenuItem';
// // import AdbIcon from '@mui/icons-material/Adb';


// // // const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// // function ResponsiveAppBar() {
  
// //   const navigate = useNavigate();
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);

// //   const [isRegistered, setIsRegistered] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // Handlers for button clicks
// //   const handleRegister = () => {
// //     setIsRegistered(true); // Mark user as registered
// //   };

// //   const handleLogin = () => {
// //     setIsLoggedIn(true); // Mark user as logged in
// //   };


// //   const handleNavClick = (path) => {
// //     // Navigate to the path
// //     navigate(path);

// //     // Scroll to top
// //   window.scrollTo({
// //       top: 0,
// //       behavior: 'smooth'
// //     });

// //   // Close navigation menu
// //   setAnchorElNav(null);
// //   };

// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

 

// //   // const handleCloseNavMenu = () => {
// //   //   setAnchorElNav(null);
// //   // };

// //   // const handleCloseUserMenu = () => {
// //   //   setAnchorElUser(null);
// //   // };

// //   return (
// //     <AppBar position="sticky">
// //       <Container maxWidth="xl">
// //         <Toolbar disableGutters>
// //           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
// //           {/* This will show for Desktop */}
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             // component={Link}
// //             // to="/"
// //             onClick={() => handleNavClick('/')}
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'none', md: 'flex' },
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //               cursor: 'pointer',
// //             }}
// //           >
// //             Sultan&apos;s Garage
// //           </Typography>

// //             {/* For Mobile */}
// //           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //             <IconButton
// //               size="large"
// //               aria-label="account of current user"
// //               aria-controls="menu-appbar"
// //               aria-haspopup="true"
// //               onClick={handleOpenNavMenu}
// //               color="inherit"
// //             >
// //               <MenuIcon />
// //             </IconButton>
// //             <Menu
// //               id="menu-appbar"
// //               anchorEl={anchorElNav}
// //               anchorOrigin={{
// //                 vertical: 'bottom',
// //                 horizontal: 'left',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'left',
// //               }}
// //               open={Boolean(anchorElNav)}
// //               // onClose={handleCloseNavMenu}
// //               onClose={() => setAnchorElNav(null)}
// //               sx={{ display: { xs: 'block', md: 'none' } }}
// //             >
             

// //             <MenuItem onClick={() => handleNavClick('/')}>
// //               <Typography sx={{ textAlign: 'center' }}>Home</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/about')}>
// //               <Typography sx={{ textAlign: 'center' }}>About</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/services')}>
// //               <Typography sx={{ textAlign: 'center' }}>Services</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/create')}>
// //               <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/products')}>
// //               <Typography sx={{ textAlign: 'center' }}>Products</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/contact')}>
// //               <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
// //             </MenuItem>
// //             <MenuItem onClick={() => handleNavClick('/testimonials')}>
// //               <Typography sx={{ textAlign: 'center' }}>Testimonials</Typography>
// //             </MenuItem>
// //             </Menu>
// //           </Box>
          
// //           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
// //           <Typography
// //             variant="h5"
// //             noWrap
// //             onClick={() => handleNavClick('/')}
// //             sx={{
// //               mr: 2,
// //               display: { xs: 'flex', md: 'none' },
// //               flexGrow: 1,
// //               fontFamily: 'monospace',
// //               fontWeight: 700,
// //               letterSpacing: '.3rem',
// //               color: 'inherit',
// //               textDecoration: 'none',
// //               cursor: 'pointer',
// //             }}
// //           >
// //             Sultan&apos;s
// //           </Typography>
          
// //           {/* For Desktop */}
// //           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
// //           <Button 
// //               onClick={() => handleNavClick('/')}
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //             >
// //               Home
// //             </Button>
// //             {/* <Button 
// //               component={Link} 
// //               to="/about" 
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //               onClick={handleCloseNavMenu}
// //             >
// //               About
// //             </Button> */}
// //             <Button 
// //               onClick={() => handleNavClick('/services')}
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //             >
// //               Services
// //             </Button>
// //             <Button 
// //               onClick={() => handleNavClick('/create')}
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //             >
// //               Create Product
// //             </Button>
// //             <Button 
// //               onClick={() => handleNavClick('/products')} 
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //             >
// //               Products
// //             </Button>
// //             <Button 
// //               onClick={() => handleNavClick('/contact')} 
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //             >
// //               Contact
// //             </Button>
// //             {/* <Button 
// //               component={Link} 
// //               to="/testimonials" 
// //               sx={{ my: 2, color: 'white', display: 'block' }}
// //               onClick={handleCloseNavMenu}
// //             >
// //               Testimonials
// //             </Button> */}
// //           </Box>

// //           <Box sx={{ flexGrow: 0 }}>
// //             <Tooltip title="Open settings">
// //               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                 <Avatar alt="Remy Sharp">S</Avatar>
// //               </IconButton>
// //             </Tooltip>
// //             <Menu
// //               sx={{ mt: '45px' }}
// //               id="menu-appbar"
// //               anchorEl={anchorElUser}
// //               anchorOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               keepMounted
// //               transformOrigin={{
// //                 vertical: 'top',
// //                 horizontal: 'right',
// //               }}
// //               open={Boolean(anchorElUser)}
// //               // onClose={handleCloseUserMenu}
// //               onClose={() => setAnchorElUser(null)}
              
// //             >
// //                <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
     
// //       <Box mt={4}>
// //       <Button
// //   href={
// //     isLoggedIn
// //       ? "http://localhost:3000/dashboard"  // Redirect to dashboard page
// //       : isRegistered
// //       ? "http://localhost:3000/login"  // Redirect to login page
// //       : "http://localhost:3000/register"  // Redirect to register page
// //   }
// //   onClick={isLoggedIn ? null : isRegistered ? handleLogin : handleRegister}
// //   variant="contained"
// //   color={
// //     isLoggedIn
// //       ? "success"  // Dashboard color
// //       : isRegistered
// //       ? "primary"  // Login button color
// //       : "secondary"  // Register button color
// //   }
// //   size="large"
// //   sx={{ mx: 2 }}
// // >
// //   {isLoggedIn
// //     ? "Dashboard"  // Show Dashboard if logged in
// //     : isRegistered
// //     ? "Login"  // Show Login if registered but not logged in
// //     : "Register"  // Show Register if not registered
// //   }
// // </Button>


// //       </Box>
// //     </Container>
               
    
            


  

    

// //             </Menu>
// //           </Box>
// //         </Toolbar>
// //       </Container>
// //     </AppBar>
// //   );
// // }
// // export default ResponsiveAppBar;

// import * as React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// function ResponsiveAppBar() {
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const [isRegistered, setIsRegistered] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Handlers for button clicks
//   const handleRegister = () => {
//     setIsRegistered(true);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   const handleNavClick = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setAnchorElNav(null);
//   };

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             onClick={() => handleNavClick('/')}
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Sultan&apos;s Garage
//           </Typography>

//           {/* For Mobile */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={() => setAnchorElNav(null)}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               <MenuItem onClick={() => handleNavClick('/')}>
//                 <Typography sx={{ textAlign: 'center' }}>Home</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavClick('/about')}>
//                 <Typography sx={{ textAlign: 'center' }}>About</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavClick('/services')}>
//                 <Typography sx={{ textAlign: 'center' }}>Services</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavClick('/create')}>
//                 <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavClick('/products')}>
//                 <Typography sx={{ textAlign: 'center' }}>Products</Typography>
//               </MenuItem>
//               <MenuItem onClick={() => handleNavClick('/contact')}>
//                 <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
//               </MenuItem>

//             </Menu>
//           </Box>

//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//          <Typography
//             variant="h5"
//             noWrap
//             onClick={() => handleNavClick('/')}
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//               cursor: 'pointer',
//             }}
//           >
//             Sultan&apos;s
//           </Typography>

//           {/* For Desktop */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             <Button onClick={() => handleNavClick('/')} sx={{ my: 2, color: 'white', display: 'block' }}>
//               Home
//             </Button>
//             <Button onClick={() => handleNavClick('/services')} sx={{ my: 2, color: 'white', display: 'block' }}>
//               Services
//             </Button>
//             <Button onClick={() => handleNavClick('/create')} sx={{ my: 2, color: 'white', display: 'block' }}>
//               Create Product
//             </Button>
//             <Button onClick={() => handleNavClick('/products')} sx={{ my: 2, color: 'white', display: 'block' }}>
//               Products
//             </Button>
//             <Button onClick={() => handleNavClick('/contact')} sx={{ my: 2, color: 'white', display: 'block' }}>
//               Contact
//             </Button>
//           </Box>

//           {/* User Menu */}
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp">S</Avatar>
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={() => setAnchorElUser(null)}
//             >
//                <MenuItem>
//                 {isLoggedIn ? (
//                   <Button
//                     href="http://localhost:3000/dashboard"
//                     variant="contained"
//                     color="success"
//                     size="large"
//                     sx={{ mx: 2 }}
//                   >
//                     Dashboard
//                   </Button>
//                 ) : isRegistered ? (
//                   <Button
//                     href="http://localhost:3000/login"
//                     onClick={handleLogin}
//                     variant="contained"
//                     color="primary"
//                     size="large"
//                     sx={{ mx: 2 }}
//                   >
//                     Login
//                   </Button>
//                 ) : (
//                   <Button
//                     href="http://localhost:3000/register"
//                     onClick={handleRegister}
//                     variant="contained"
//                     color="secondary"
//                     size="large"
//                     sx={{ mx: 2 }}
//                   >
//                     Register
//                   </Button>
//                 )}
//               </MenuItem>
              
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;

import { useState, useEffect } from 'react';
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
  useEffect(() => {
    const checkLoginStatus = () => {
      // Check localStorage or sessionStorage for auth status
      const registered = localStorage.getItem('isRegistered') === 'true';
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setAuthStatus({ isRegistered: registered, isLoggedIn: loggedIn });
    };

    checkLoginStatus();
  }, []);

  const handleRegister = () => {
    localStorage.setItem('isRegistered', 'true');
    setAuthStatus(prev => ({ ...prev, isRegistered: true }));
  };

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setAuthStatus(prev => ({ ...prev, isLoggedIn: true }));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isRegistered');
    setAuthStatus({ isRegistered: false, isLoggedIn: false });
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

  const getAuthButton = () => {
    if (authStatus.isLoggedIn) {
      return (
        <>
          <Button
            href="http://localhost:3000/dashboard"
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
    } else if (authStatus.isRegistered) {
      return (
        <Button
          href="http://localhost:3000/login"
          onClick={handleLogin}
          variant="contained"
          color="primary"
          size="large"
          sx={{ mx: 2 }}
        >
          Login
        </Button>
      );
    } else {
      return (
        <Button
          href="http://localhost:3000/register"
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
  };

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
               {authStatus.isLoggedIn ?
               <MenuItem onClick={() => handleNavClick('/create')}>
                 <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
               </MenuItem> : " "
               }
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
             {authStatus.isLoggedIn ? 
             <Button onClick={() => handleNavClick('/create')} sx={{ my: 2, color: 'white', display: 'block' }}>
               Create Product
             </Button> : " "
             }
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
                {getAuthButton()}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;