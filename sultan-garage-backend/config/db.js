

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// const MONGO_URI = process.env.MONGODB_URI;
const MONGO_URL = process.env.MONGODB_URL



export const db = async () => {
  try {
    await mongoose.connect( MONGO_URL );
    console.log('MongoDB Connected Successfully on port 27017');
    
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });

  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

