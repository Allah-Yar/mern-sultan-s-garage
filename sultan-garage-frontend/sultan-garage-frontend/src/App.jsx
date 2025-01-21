import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
// import { AuthProvider } from './components/Auth/AuthContext'
import Layout from './components/Layout'
import Home from './pages/HomePage'
import About from './components/About'
import Services from './components/Services'
import ProductCard from './components/ProductCard'
import AppointmentForm from './components/AppointmentForm'
import Testimonials from './components/Testimonials'
import Product from './pages/Product'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'


function App() {
  return (
    <Router>
      <div>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<ProductCard />} />
            <Route path="contact" element={<AppointmentForm />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="create" element={<Product />} />
            <Route path="*" element={<NotFound/>} />
           
          </Route>
        </Routes>
        <Footer />
        
      </div>
    </Router>
  )
}

export default App
