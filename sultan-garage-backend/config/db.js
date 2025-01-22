

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;



export const db = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected Successfully');
    
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });

  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1);
  }
};

