import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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


