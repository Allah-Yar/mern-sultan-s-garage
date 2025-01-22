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
import { Strategy as LocalStrategy } from 'passport-local'; // Using ES6 import syntax
import findOrCreate from 'mongoose-findorcreate';
// import passport from './config/passportConfig.js';
import  productRoutes from './routes/productRoutes.js';
// import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import path from 'path';



dotenv.config();

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT || 3000;
db();

app.use(cors({
    origin:  process.env.FRONTEND_URL || 'http://localhost:5173', // Allow only the frontend app to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods (optional)
    credentials: true,
  }));
// Serve the uploads folder statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(compression());



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
      secure: false,
      }
}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  // secret: String
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    // Using passport-local-mongoose's built-in verify method
    const isValid = await this.authenticate(candidatePassword);
    return isValid;
  } catch (error) {
    return false;
  }
};

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


// Update Google Strategy implementation
passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/dashboard",
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ 
    googleId: profile.id 
  }, {
    username: profile.displayName || profile.emails[0].value.split('@')[0],
    email: profile.emails[0].value,
    googleId: profile.id
  }, function (err, user) {
    return done(err, user);
  });
}));

// // Passport Local Strategy for login
// passport.use(new LocalStrategy({
//   usernameField: 'username',
//   passwordField: 'password',
// }, async (username, password, done) => {
//   try {
//     const user = await User.findOne({ username });  // Adjust this based on your user model
//     if (!user) return done(null, false, { message: 'Invalid credentials.' });

//     const isMatch = await user.comparePassword(password); // Assuming you have a method to compare passwords
//     if (!isMatch) return done(null, false, { message: 'Invalid credentials.' });

//     return done(null, user); // Successfully authenticated
//   } catch (err) {
//     return done(err);
//   }
// }));
// Update the Local Strategy implementation
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Invalid username' });
      }
      
      const isValid = await user.authenticate(password);
      if (!isValid) {
        return done(null, false, { message: 'Invalid password' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));
// Add error handling middleware before your routes
app.use((error, req, res, next) => {
  if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map(err => err.message);
    req.flash('error_msg', messages.join(', '));
    return res.redirect('/register');
  }
  next(error);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/auth/google",
  passport.authenticate('google', { scope: [ "profile", "email" ] })
);

app.get( "/auth/google/dashboard",
  passport.authenticate( 'google', {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
}));

app.post("/login", passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
  
}), (req, res) => {
 
  res.redirect('/login');
});

app.get("/login", (req, res) => {
  res.render("login");
})

app.get("/register", (req, res) => {
  res.render("register");
})

app.get("/dashboard", async (req, res, next) => {
  try {
    const foundUsers = await User.find({});
    if (foundUsers) {
      res.render("dashboard");
    } else {
      res.status(404).send("Cannot operate");
    }
  } catch (error) {
    next(error); // Pass the error to the next error handler
  }
});


app.get("/logout", (req, res) => {
  req.logout( (err) => {
      if (err) {
          console.log(err);
          return res.redirect("/dashboard")
      } else {
          res.redirect("/");
      }
  });
  
});



app.post("/register", async (req, res) => {
  try {
    const newUser = await User.register(
      new User({ username: req.body.username, email: req.body.email }),
      req.body.password
    );
    req.login(newUser, (err) => {
      if (err) {
    
        return res.redirect("/register");
      }
      passport.authenticate("local")(req, res, () => {
      
        return res.redirect("/login");
      });
    });
  } catch (error) {
   
    res.redirect("/register");
  }
});




// app.post("/login", async(req, res) => {
//   const user = new User({
//       username: req.body.email,
//       password: req.body.password
//   });
//   req.login(user, (err) => {
//       if (err) {
//           console.log(err);
//       } else {
//           passport.authenticate("local")(req, res, () => {
//               res.redirect("/dashboard");
//           })
//       }
//   })
// })







// app.use((err, req, res, next) => {
//   console.error(err); // Log the error
//   res.status(500).send("Internal Server Error"); // Respond with a 500 status code
// });

// app.use(authRoutes);
app.use(productRoutes);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})