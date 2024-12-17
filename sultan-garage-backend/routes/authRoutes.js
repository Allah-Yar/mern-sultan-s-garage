// import express from 'express';
// import { registerUser, loginUser } from '../controllers/authController.js';

// const router = express.Router();

// router.post('/api/auth/register', registerUser);
// router.post('/api/auth/login', loginUser);

// router.post('/logout', (req, res) => {
//   req.logout((err) => {
//     if (err) return res.status(500).json({ message: 'Logout failed' });
//     res.json({ message: 'Logged out successfully' });
//   });
// });

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   res.json({ 
//     message: 'Login successful', 
//     user: {
//       id: req.user._id,
//       username: req.user.username,
//       email: req.user.email,
//       role: req.user.role
//     }
//   });
// });

// // Add this route explicitly
// router.get('/user', (req, res) => {
//   // Check if user is authenticated
//   if (req.isAuthenticated()) {
//     // Return user details, excluding sensitive information
//     const { _id, username, email, role } = req.user;
//     return res.json({ id: _id, username, email, role });
//   } else {
//     // Send 401 if not authenticated
//     return res.status(401).json({ message: 'Not authenticated' });
//   }
// });

// export default router;

import express from 'express';
import passport from 'passport';
// import User from '../models/Admin.js'; // Adjust path as needed
import { registerUser, loginUser } from '../controllers/authController.js';





const router = express.Router();
router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser);

// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, password, role } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Allow only one admin
//     if (role === 'admin') {
//       const adminExists = await User.findOne({ role: 'admin' });
//       if (adminExists) {
//         return res.status(403).json({ message: 'An admin already exists.' });
//       }
//     }

//     // Create new user
//     const newUser = new User({
//       username,
//       email,
//       password: await bcrypt.hash(password, 10),
//       role: role || 'user'
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully.' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering user', error: error.message });
//   }
// });

// router.post('/login', passport.authenticate('local'), (req, res) => {
//   res.json({ 
//     message: 'Login successful', 
//     user: {
//       id: req.user._id,
//       username: req.user.username,
//       email: req.user.email,
//       role: req.user.role
//     }
//   });
// });

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: 'Logout failed' });
    res.json({ message: 'Logged out successfully' });
  });
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username, email, role } = req.user;
    res.json({ id: _id, username, email, role });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

export default router;
