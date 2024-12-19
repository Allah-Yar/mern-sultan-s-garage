

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout.jsx'
// // import Hero from './components/Hero'
// // import main from './main.jsx'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero.jsx'
// import About from './components/About.jsx'
// import Services from './components/Services.jsx'
// // import AutoPartsSection from './components/ProductCard.jsx'
// import ProductCard from './components/ProductCard.jsx'
// import AppointmentForm from './components/AppointmentForm.jsx';
// import Testimonials from './components/Testimonials.jsx';
// import Footer from './components/Footer.jsx';
// import Product from './pages/Product.jsx'

// function App() {
 

//   return (

//     <div>
    
//     <Navbar />
//       <Router >
        
//         <Routes>
          
//           <Route path="/"  element={<Layout />}/>
//           <Route index element={
//   <>
//     <Hero />
//     <About />
//     <Services />
//     <ProductCard />
//     <AppointmentForm />
//     <Testimonials />
//     <Footer />
//   </>
// } />  
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<ProductCard />} />
//           <Route path="/contact" element={<AppointmentForm />} />
//           <Route path="#" element={<Testimonials />} />
//           <Route path="#" element={<Footer />} />
//           <Route path="/create" element={<Product />} />
          
//           </Routes>
//       </Router>
//       </div>
       
    
    
      
   
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './components/Auth/AuthContext'
import Layout from './components/Layout'
import Home from './pages/HomePage'
import About from './components/About'
import Services from './components/Services'
import ProductCard from './components/ProductCard'
import AppointmentForm from './components/AppointmentForm'
import Testimonials from './components/Testimonials'
import Product from './pages/Product'
import Footer from './components/Footer'
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div>
        <AuthProvider>
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
        <Footer />
        </AuthProvider>
      </div>
    </Router>
  )
}

export default App
