// import * as React from 'react';
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
// import Link from '@mui/material/Link';





// // const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = (event, path) => {
//     setAnchorElNav(null);
//     window.location.href = path;
    
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             Sultan&apos;s Garage
//           </Typography>

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
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               <MenuItem onClick={(event) => handleCloseNavMenu(event, '/')}>
//                   <Typography sx={{ textAlign: 'center' }}>Home</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={(event) => handleCloseNavMenu(event, '/create')}>
//                   <Typography sx={{ textAlign: 'center' }}>Add Product</Typography>
//                 </MenuItem>
//                 <MenuItem onClick={(event) => handleCloseNavMenu(event, '/products')}>
//                   <Typography sx={{ textAlign: 'center' }}>Products</Typography>
//               </MenuItem>
//                 <MenuItem onClick={(event) => handleCloseNavMenu(event, '/contact')}>
//                   <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
//               </MenuItem>
                
               

              
              
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
            
//             Sultan&apos;s
            
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//           <Button
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               <Link
                
//                 href="/"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 Home
//               </Link>
//             </Button>
//             <Button
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               <Link
               
//                 href="/create"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 Add Product
//               </Link>
//             </Button>
//             <Button
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               <Link
                
//                 href="/products"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 Products
//               </Link>
//             </Button>
//             <Button
//               onClick={handleCloseNavMenu}
//               sx={{ my: 2, color: 'white', display: 'block' }}
//             >
//               <Link
                
//                 href="/contact"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 Contact
//               </Link>
//             </Button>
//           </Box>


//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
//                 <Avatar alt="Remy Sharp" > S </Avatar>
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
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: 'center' }}>
                    
//                     {setting}
                  
                    
//                     </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;



import * as React from 'react';
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


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
              {/* <MenuItem onClick={handleCloseNavMenu}onClick={() => handleNavClick('/services')} component={Link} to="/">
                <Typography sx={{ textAlign: 'center' }}>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}onClick={() => handleNavClick('/services')} component={Link} to="/about">
                <Typography sx={{ textAlign: 'center' }}>About</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}onClick={() => handleNavClick('/services')} component={Link} to="/services">
                <Typography sx={{ textAlign: 'center' }}>Services</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} onClick={() => handleNavClick('/services')}component={Link} to="/create">
                <Typography sx={{ textAlign: 'center' }}>Create Product</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} onClick={() => handleNavClick('/services')} component={Link} to="/products">
                <Typography sx={{ textAlign: 'center' }}>Products</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} onClick={() => handleNavClick('/services')} component={Link} to="/contact">
                <Typography sx={{ textAlign: 'center' }}>Contact</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} onClick={() => handleNavClick('/services')} component={Link} to="/testimonials">
                <Typography sx={{ textAlign: 'center' }}>Testimonials</Typography>
              </MenuItem> */}

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
            // component={Link}
            // to="/"
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
              // component={Link} 
              // to="/services" 

              sx={{ my: 2, color: 'white', display: 'block' }}
              // onClick={handleCloseNavMenu}
            >
              Services
            </Button>
            <Button 
              onClick={() => handleNavClick('/create')}
              // component={Link} 
              // to="/create" 
              sx={{ my: 2, color: 'white', display: 'block' }}
              // onClick={handleCloseNavMenu}
            >
              Create Product
            </Button>
            <Button 
              onClick={() => handleNavClick('/products')}
              // component={Link} 
              // to="/products" 
              sx={{ my: 2, color: 'white', display: 'block' }}
              // onClick={handleCloseNavMenu}
            >
              Products
            </Button>
            <Button 
              onClick={() => handleNavClick('/contact')}
              // component={Link} 
              // to="/contact" 
              sx={{ my: 2, color: 'white', display: 'block' }}
              // onClick={handleCloseNavMenu}
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;


