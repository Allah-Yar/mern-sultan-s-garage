// // export default App
// // import React from 'react';
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// import { BrowserRouter as Router, Routes, Route,  Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Layout from './components/Layout';
// import Home from './pages/HomePage';
// import About from './components/About';
// import Services from './components/Services';
// import ProductCard from './components/ProductCard';
// import AppointmentForm from './components/AppointmentForm';
// import Testimonials from './components/Testimonials';
// import Product from './pages/Product';
// import Footer from './components/Footer';
// import NotFound from './pages/NotFound';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
//   // const [adminExists, setAdminExists] = useState(false);
//   // const [loading, setLoading] = useState(true);
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if a user is logged in
//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');
//   //   setIsLoggedIn(!!token);
//   // }, []); // Runs once on component mount

//   // Listen for login/logout events
//   // useEffect(() => {
//   //   const handleStorageChange = () => {
//   //     setIsLoggedIn(!!localStorage.getItem('token'));
//   //   };

//   //   window.addEventListener('storage', handleStorageChange);
//   //   return () => window.removeEventListener('storage', handleStorageChange);
//   // }, []);

//   // Check if an admin exists
//   // useEffect(() => {
//   //   const checkAdmin = async () => {
//   //     try {
//   //       const res = await axios.get('https://sultan-garage-production.up.railway.app/api/check-admin');
//   //       setAdminExists(res.data.adminExists);
//   //     } catch (err) {
//   //       console.error('Error checking admin status:', err);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   checkAdmin();
//   // }, []);

//   // if (loading) return <div>Loading...</div>;

//   return (
//     <Router>
//       <div>
//         {/* Pass `isLoggedIn` to Navbar so it updates correctly */}
//         <Navbar  />
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="services" element={<Services />} />
//             <Route path="products" element={<ProductCard />} />
//             <Route path="contact" element={<AppointmentForm />} />
//             <Route path="testimonials" element={<Testimonials />} />
//             <Route path="create" element={<Product />} />
//             <Route path="*" element={<NotFound />} />
//             {/* <Route path="/" element={<Adm adminExists={adminExists} />} />

//             <Route path="/signup" element={adminExists ? <Navigate to="/" /> : <Signup />} />
//             <Route path="/login" element={adminExists ? <Login /> : <Navigate to="/signup" />} />

//             <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} /> */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Signup />} />
            
//             {/* <Route path="/login" element={<Navigate to="/login" />} /> */}
         
//           </Route>
//           <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         </Routes>
       
//         <Footer />
//       </div>
      
      
       
        
              
      
        
//     </Router>
    
    
    
    
//   );
// }

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
//   if (!token || !isAdmin) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };
// // const Adm = ({ adminExists }) => (
// //   <div>
// //     <h1>Welcome to the Admin Panel</h1>
// //     {!adminExists ? (
// //       <>
// //         <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
// //       </>
// //     ) : (
// //       <p>Admin is already registered. Please log in.</p>
// //     )}
// //   </div>
// // );

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import About from './components/About';
import Services from './components/Services';
import ProductCard from './components/ProductCard';
import AppointmentForm from './components/AppointmentForm';
import Testimonials from './components/Testimonials';
import Product from './pages/Product';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

const MainContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/dashboard", "/login", "/register"];

  return (
    <div>
      {/* Hide Navbar on specific routes */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/contact" element={<AppointmentForm />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/create" element={<Product />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>

        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>

      {/* Hide Footer on Dashboard */}
      {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  
  if (!token || !isAdmin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default App;


