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





const adminSchema = new mongoose.Schema({
  // username: { type: String, required: true },
  // email: { type: String, required: true, unique: true },
  // password: String,
  // googleId: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
  // secret: String
});



const Admin = new mongoose.model("Admin", adminSchema);


// Signup route
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if an admin already exists
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return res.status(400).json({ error: 'Only one admin is allowed' });
    }

    // Hash the password and create the admin
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error creating admin' });
  }
});



// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ error: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

app.get('/api/check-admin', async (req, res) => {
  try {
    const admin = await Admin.findOne();
    if (admin) {
      return res.json({ adminExists: true });
    } else {
      return res.json({ adminExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Error checking admin status' });
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