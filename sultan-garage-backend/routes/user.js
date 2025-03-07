// // import express from 'express';
// // import { registerUser, loginUser } from '../controllers/authController.js';

// // const router = express.Router();

// // router.post('/api/auth/register', registerUser);
// // router.post('/api/auth/login', loginUser);

// // router.post('/logout', (req, res) => {
// //   req.logout((err) => {
// //     if (err) return res.status(500).json({ message: 'Logout failed' });
// //     res.json({ message: 'Logged out successfully' });
// //   });
// // });

// // router.post('/login', passport.authenticate('local'), (req, res) => {
// //   res.json({ 
// //     message: 'Login successful', 
// //     user: {
// //       id: req.user._id,
// //       username: req.user.username,
// //       email: req.user.email,
// //       role: req.user.role
// //     }
// //   });
// // });

// // // Add this route explicitly
// // router.get('/user', (req, res) => {
// //   // Check if user is authenticated
// //   if (req.isAuthenticated()) {
// //     // Return user details, excluding sensitive information
// //     const { _id, username, email, role } = req.user;
// //     return res.json({ id: _id, username, email, role });
// //   } else {
// //     // Send 401 if not authenticated
// //     return res.status(401).json({ message: 'Not authenticated' });
// //   }
// // });

// // export default router;

// import express from 'express';
// import passport from 'passport';
// // import User from '../models/Admin.js'; // Adjust path as needed
// import { registerUser, loginUser } from '../controllers/authController.js';





// const router = express.Router();
// router.post('/api/auth/register', registerUser);
// router.post('/api/auth/login', loginUser);

// // router.post('/register', async (req, res) => {
// //   try {
// //     const { username, email, password, role } = req.body;

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     // Allow only one admin
// //     if (role === 'admin') {
// //       const adminExists = await User.findOne({ role: 'admin' });
// //       if (adminExists) {
// //         return res.status(403).json({ message: 'An admin already exists.' });
// //       }
// //     }

// //     // Create new user
// //     const newUser = new User({
// //       username,
// //       email,
// //       password: await bcrypt.hash(password, 10),
// //       role: role || 'user'
// //     });

// //     await newUser.save();
// //     res.status(201).json({ message: 'User registered successfully.' });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error registering user', error: error.message });
// //   }
// // });

// // router.post('/login', passport.authenticate('local'), (req, res) => {
// //   res.json({ 
// //     message: 'Login successful', 
// //     user: {
// //       id: req.user._id,
// //       username: req.user.username,
// //       email: req.user.email,
// //       role: req.user.role
// //     }
// //   });
// // });

// router.post('/logout', (req, res) => {
//   req.logout((err) => {
//     if (err) return res.status(500).json({ message: 'Logout failed' });
//     res.json({ message: 'Logged out successfully' });
//   });
// // });

// router.get('/user', (req, res) => {
//   if (req.isAuthenticated()) {
//     const { _id, username, email, role } = req.user;
//     res.json({ id: _id, username, email, role });
//   } else {
//     res.status(401).json({ message: 'Not authenticated' });
//   }
// });

// export default router;


import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';


const router = express.Router();


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login attempt:", email);
        console.log("Password received:", password);

        const user = await User.findByCredentials(email, password);
        res.status(200).json({ 
            message: "Login successful",
            user: {
                id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error("Login failed:", error.message);
        res.status(401).json({ error: "Invalid credentials" });
    }
});

// router.post("/login", async (req, res) => {
//     try {
//         console.log("Login request body:", req.body);
//         const user = await User.findByCredentials(req.body.email, req.body.password);
//         res.status(200).json({ message: "Login successful", user });
//     } catch (error) {
//         console.error("Login failed:", error.message);
//         res.status(401).json({ error: "Invalid g email or password" });
//     }
// });
// const passwordEntered = 'khan12345'; // Password entered during login
// const hashedPassword = '$2a$10$WfbpPEkIHtj1M5ssin4I6u6AQeazpx2mGSd2zI4DGhZYgcPbaI0He'; // Put the hashed password from the database here


// bcrypt.compare(passwordEntered, hashedPassword, (err, result) => {
//     if (err) {
//         console.log('Error comparing passwords:', err);
//     } else {
//         console.log('Password match:', result); // Should be true if passwords match
//     }
// });







// router.post("/logout",auth,async(req,res)=>{

//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token; 
//         })

//         await req.user.save();
//         res.send();

//     } catch (error) {
//         res.status(500).send();
//     }

// })





// router.post("/register", async (req, res) => {
//     console.log(req.body);
//     const { username, email, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "Email already in use" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 8);
//         const user = new User({ username, email, password: hashedPassword });

//         await user.save();
//         res.status(201).json({ message: "User registered successfully", user });

//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(400).json({ error: error.message });
//     }
// });

// router.post("/register", async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "Email already in use" });
//         }
//         // Remove manual hashing here - let middleware handle it
//         const user = new User({ username, email, password });
//         await user.save();
//         res.status(201).json({ 
//             message: "User registered successfully",
//             user: {
//                 id: user._id,
//                 email: user.email,
//                 username: user.username
//             }
//         });
//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(400).json({ error: error.message });
//     }
// });


// router.post("/register", async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: "Email already in use" });
//         }
        
//         console.log("Original password:", password);
//         const hashedPassword = await bcrypt.hash(password, 8);
//         console.log("Hashed password:", hashedPassword);
        
//         const user = new User({
//             username,
//             email,
//             password: hashedPassword
//         });
        
//         await user.save();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         console.error("Registration error:", error);
//         res.status(400).json({ error: error.message });
//     }
// });


