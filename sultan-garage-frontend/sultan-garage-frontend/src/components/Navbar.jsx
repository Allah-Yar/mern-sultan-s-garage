import * as React from 'react';
// import { useState } from 'react';
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
import { useAuth } from './Auth/AuthContext';
// import { useAuth } from './Auth/AuthContext';

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [currentPage, setCurrentPage] = useState("home");
// const [isRegistering, setIsRegistering] = useState(false);
const {
  isLoggedIn,
  isRegistering,
  currentPage,
  login,
  logout,
  register,
  setCurrentPage,
} = useAuth();

  const handleNavClick = (path) => {
    // Navigate to the path
    navigate(path);

    // Scroll to top
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  // Close navigation menu
  setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleUserClick = (path) => {
    navigate(path);

    switch (path) {
      case "/register":
        register();
        break;
      case "/login":
        login();
        break;
      case "/logout":
        logout();
        break;
      case "/dashboard":
        setCurrentPage("dashboard");
        break;
      default:
        setCurrentPage("home");
        break;
    }
    setAnchorElUser(null);
  };
  

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* This will show for Desktop */}
          <Typography
            variant="h6"
            noWrap
            // component={Link}
            // to="/"
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

            {/* For Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              onClose={() => setAnchorElNav(null)}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
             

            <MenuItem onClick={() => handleNavClick('/')}>
              <Typography sx={{ textAlign: 'center' }}>Home</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/about')}>
              <Typography sx={{ textAlign: 'center' }}>About</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/services')}>
              <Typography sx={{ textAlign: 'center' }}>Services</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/create')}>
              <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/products')}>
              <Typography sx={{ textAlign: 'center' }}>Products</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/contact')}>
              <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleNavClick('/testimonials')}>
              <Typography sx={{ textAlign: 'center' }}>Testimonials</Typography>
            </MenuItem>
            </Menu>
          </Box>
          
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
          
          {/* For Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button 
              onClick={() => handleNavClick('/')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            {/* <Button 
              component={Link} 
              to="/about" 
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={handleCloseNavMenu}
            >
              About
            </Button> */}
            <Button 
              onClick={() => handleNavClick('/services')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Services
            </Button>
            <Button 
              onClick={() => handleNavClick('/create')}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Create Product
            </Button>
            <Button 
              onClick={() => handleNavClick('/products')} 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Products
            </Button>
            <Button 
              onClick={() => handleNavClick('/contact')} 
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Contact
            </Button>
            {/* <Button 
              component={Link} 
              to="/testimonials" 
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={handleCloseNavMenu}
            >
              Testimonials
            </Button> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp">S</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              // onClose={handleCloseUserMenu}
              onClose={() => setAnchorElUser(null)}
              
            >
            <nav>
  {isRegistering ? (
    // Show Login during Registration
    <MenuItem onClick={() => handleUserClick("/login")}>
      <Typography sx={{ textAlign: "center" }}>Login</Typography>
    </MenuItem>
  ) : !isLoggedIn && currentPage === "home" ? (
    // Show Login and Register when Not Logged In and on Home
    <>
      <MenuItem onClick={() => handleUserClick("/login")}>
        <Typography sx={{ textAlign: "center" }}>Login</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleUserClick("/register")}>
        <Typography sx={{ textAlign: "center" }}>Register</Typography>
      </MenuItem>
    </>
  ) : isLoggedIn && currentPage === "home" ? (
    // Show Dashboard when Logged In and on Home
    <MenuItem onClick={() => handleUserClick("/dashboard")}>
      <Typography sx={{ textAlign: "center" }}>Dashboard</Typography>
    </MenuItem>
  ) : isLoggedIn && currentPage === "dashboard" ? (
    // Show Home and Logout when Logged In and on Dashboard
    <>
      <MenuItem onClick={() => handleUserClick("/")}>
        <Typography sx={{ textAlign: "center" }}>Home</Typography>
      </MenuItem>
      <MenuItem onClick={() => handleUserClick("/logout")}>
        <Typography sx={{ textAlign: "center" }}>Logout</Typography>
      </MenuItem>
    </>
  ) : null}
</nav>


  

    

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


