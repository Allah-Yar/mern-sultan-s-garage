import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { db } from './config/db.js';
import ejs from 'ejs';
import session from 'express-session';
import passport from 'passport';
import passportLocalMongoose from 'passport-local-mongoose';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import { Strategy as LocalStrategy } from 'passport-local'; // Using ES6 import syntax
import findOrCreate from 'mongoose-findorcreate';
// import passport from './config/passportConfig.js';
import  productRoutes from './routes/productRoutes.js';
// import authRoutes from './routes/authRoutes.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import path from 'path';



dotenv.config();

const app = express();
app.use(express.static("public"));
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;
db();

// 'https://sultans-garage.vercel.app',
app.use(cors({
    origin: ['https://sultans-garage.vercel.app', 'http://localhost:5173'], // Array format for multiple origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods (optional)
    credentials: true,
  }));
// Serve the uploads folder statically
// app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(compression());





// const adminSchema = new mongoose.Schema({
//   // username: { type: String, required: true },
//   // email: { type: String, required: true, unique: true },
//   // password: String,
//   // googleId: String,
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
//   // secret: String
// });



// const Admin = new mongoose.model("Admin", adminSchema);


// Signup route
// app.post('/api/signup', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Check if an admin already exists
//     const existingAdmin = await Admin.findOne();
//     if (existingAdmin) {
//       return res.status(400).json({ error: 'Only one admin is allowed' });
//     }

//     // Hash the password and create the admin
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const admin = new Admin({ email, password: hashedPassword });
//     await admin.save();
//     res.status(201).json({ message: 'Admin created successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating admin' });
//   }
// });



// // Login route
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const admin = await Admin.findOne({ email });
//     if (!admin) return res.status(400).json({ error: 'Admin not found' });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: 'Error logging in' });
//   }
// });

// app.get('/api/check-admin', async (req, res) => {
//   try {
//     const admin = await Admin.findOne();
//     if (admin) {
//       return res.json({ adminExists: true });
//     } else {
//       return res.json({ adminExists: false });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Error checking admin status' });
//   }
// });

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user (first user will be admin)
    const userCount = await User.countDocuments();
    const user = new User({
      email,
      password: hashedPassword,
      isAdmin: userCount === 0 // First user is admin
    });

    await user.save();
    
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected dashboard route
app.get('/api/dashboard', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded.isAdmin) {
      return res.status(403).json({ message: 'Access denied' });
    }
    res.json({ message: 'Welcome to Admin Dashboard' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

app.use((err, req, res, next) => {
  console.error(err); // Log the error
  res.status(500).send("Internal Server Error"); // Respond with a 500 status code
});

// app.use(authRoutes);
app.use(productRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import { db } from './config/db.js';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import compression from 'compression';
// import cors from 'cors';
// import path from 'path';
// import rateLimit from 'express-rate-limit';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import cookieParser from 'cookie-parser';
// import productRoutes from './routes/productRoutes.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Connect to database
// db();

// // Security middleware
// app.use(helmet());

// // Logging & Performance
// app.use(morgan('combined'));
// app.use(compression());

// // Middleware
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// // Rate Limiting (prevents brute-force attacks)
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Max 100 requests per IP
//   message: 'Too many requests from this IP, please try again later.',
// });
// app.use(limiter);

// // CORS Configuration
// // const allowedOrigins = ['https://sultans-garage.vercel.app', 'http://localhost:5173'];

// // app.use(
// //   cors({
// //     origin: (origin, callback) => {
// //       if (!origin || allowedOrigins.includes(origin)) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error('Not allowed by CORS'));
// //       }
// //     },
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
// //     credentials: true,
// //   })
// // );
// app.use(cors({
//       origin: ['https://sultans-garage.vercel.app', 'http://localhost:5173'], // Array format for multiple origins
//       methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods (optional)
//       credentials: true,
//     }));


// // User Schema
// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   isAdmin: { type: Boolean, default: false },
// });

// const User = mongoose.model('User', userSchema);

// // Register Route
// app.post('/api/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Determine if the first user is admin
//     const userCount = await User.countDocuments();
//     const user = new User({
//       email,
//       password: hashedPassword,
//       isAdmin: userCount === 0, // First user is admin
//     });

//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login Route
// // app.post('/api/login', async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     // Find user
// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

// //     // Check password
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

// //     // Create JWT Token
// //     const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
// //       expiresIn: '1h',
// //     });

// //     // Store token in HttpOnly cookie
// //     res.cookie('token', token, {
// //       httpOnly: true,
// //       secure: process.env.NODE_ENV === 'production', // Secure in production
// //       sameSite: 'Strict',
// //     }).json({ isAdmin: user.isAdmin });
// //   } catch (error) {
// //     console.error('Login error:', error);
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // });

// // Logout Route
// // app.post('/api/logout', (req, res) => {
// //   res.clearCookie('token').json({ message: 'Logged out successfully' });
// // });



// // Login
// app.post('/api/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
    
//     // Find user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Create token
//     const token = jwt.sign(
//       { userId: user._id, isAdmin: user.isAdmin },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.json({ token, isAdmin: user.isAdmin });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected Dashboard Route
// app.get('/api/dashboard', (req, res) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (!decoded.isAdmin) return res.status(403).json({ message: 'Access denied' });

//     res.json({ message: 'Welcome to Admin Dashboard' });
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid or expired token' });
//   }
// });

// // Serve the uploads folder statically
// // app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// app.use(productRoutes);

// // Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err); // Log the error
//   res.status(500).json({ message: 'Internal Server Error' });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
