// import  { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
// import Navbar from './components/Navbar'

// // import { AuthProvider } from './components/Auth/AuthContext'
// import Layout from './components/Layout'
// import Home from './pages/HomePage'
// import About from './components/About'
// import Services from './components/Services'
// import ProductCard from './components/ProductCard'
// import AppointmentForm from './components/AppointmentForm'
// import Testimonials from './components/Testimonials'
// import Product from './pages/Product'
// import Footer from './components/Footer'
// import NotFound from './pages/NotFound'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import Dashboard from './components/Dashboard'



// function App() {
//   const [adminExists, setAdminExists] = useState(false);
//   const [loading, setLoading] = useState(true);

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkLogin = () => {
//     setIsLoggedIn(localStorage.getItem('token') ? true : false);

//   }

//   // Check if an admin exists on component mount
//   useEffect(() => {
//     const checkAdmin = async () => {
//       try {
//         const res = await axios.get('http://localhost:3000/api/check-admin');
//         setAdminExists(res.data.adminExists);
//       } catch (err) {
//         console.error('Error checking admin status:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     checkAdmin();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <Router>
//       <div>
        
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="services" element={<Services />} />
//             <Route path="/products" element={<ProductCard />} />
//             <Route path="contact" element={<AppointmentForm />} />
//             <Route path="testimonials" element={<Testimonials />} />
//             <Route path="create" element={<Product />} />
//             <Route path="*" element={<NotFound/>} />
//             <Route path="/" element={<Adm adminExists={adminExists} />} />
            
//             <Route path="/signup" element={adminExists ? <Navigate to="/" /> : <Signup />} />
//             <Route path="/login" element={adminExists ? <Login /> : <Navigate to="/signup"/>}  />
            
          
//             <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to='/'/>} />
            
        
//           </Route>
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// const Adm = ({ adminExists }) => {
//   return (
//     <div>
//       <h1>Welcome to the Admin Panel</h1>
//       {!adminExists && (
//         <>
//           <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
//         </>
//       )}
//       {adminExists && <p>Admin is already registered. Please log in.</p>}
//     </div>
//   );
// };





// export default App

import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
  const [adminExists, setAdminExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if a user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []); // Runs once on component mount

  // Listen for login/logout events
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Check if an admin exists
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get('https://sultan-garage-production.up.railway.app/api/check-admin');
        setAdminExists(res.data.adminExists);
      } catch (err) {
        console.error('Error checking admin status:', err);
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <div>
        {/* Pass `isLoggedIn` to Navbar so it updates correctly */}
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<ProductCard />} />
            <Route path="contact" element={<AppointmentForm />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="create" element={<Product />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Adm adminExists={adminExists} />} />

            <Route path="/signup" element={adminExists ? <Navigate to="/" /> : <Signup />} />
            <Route path="/login" element={adminExists ? <Login /> : <Navigate to="/signup" />} />

            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Adm = ({ adminExists }) => (
  <div>
    <h1>Welcome to the Admin Panel</h1>
    {!adminExists ? (
      <>
        <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </>
    ) : (
      <p>Admin is already registered. Please log in.</p>
    )}
  </div>
);

export default App;

