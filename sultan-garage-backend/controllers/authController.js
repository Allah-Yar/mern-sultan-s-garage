import bcrypt from 'bcryptjs';
import User from '../models/Admin.js';
import passport from 'passport';

// Register User
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Allow only one admin
    if (role === 'admin') {
      const adminExists = await User.findOne({ role: 'admin' });
      if (adminExists) {
        return res.status(403).json({ message: 'An admin already exists.' });
      }
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user',
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login User
export const loginUser = (req, res, next) => {
  // passport.authenticate('local', (err, user, info) => {
  //   if (err) return res.status(500).json({ message: 'Login failed', error: err });
  //   if (!user) return res.status(401).json({ message: info.message });

  //   req.logIn(user, (err) => {
  //     if (err) return res.status(500).json({ message: 'Login failed', error: err });
  //     res.cookie('token', 'dummy-token', { httpOnly: true, sameSite: 'Lax' }); // Example token
  //     return res.json({ message: 'Login successful', user });
  //   });
  // })(req, res, next);
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ message: 'Login failed', error: err });
    if (!user) return res.status(401).json({ message: info.message });

    req.login(user, (err) => {
      if (err) return res.status(500).json({ message: 'Login failed', error: err });
      
      // Important: Send user data in a consistent format
      return res.json({ 
        message: 'Login successful', 
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    });
  })(req, res);
};
