
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";

// // dotenv.config();

// // // Connect to MongoDB
// // const MONGO_URI = "mongodb+srv://sultan:sultangaragekhanwazir@cluster0.92nts.mongodb.net/";

// // mongoose.set('strictQuery', true);
// // export const db = async () => {
// //     try {
       
// //          await mongoose.connect(MONGO_URI);
// //         console.log(`MongoDB Connected: Successfully`);
// //     } catch (error) {
// //         console.error("Mongo", error.message);
// //         process.exit(1);
// //     }
    
// // }

// import mongoose from "mongoose";


// // Ensure to replace 'yourDatabaseName' with your actual database name
// const MONGO_URI = "mongodb+srv://user:4PLCIKRpqqk6fguT@cluster7.iakvc.mongodb.net/sultandb?retryWrites=true&w=majority&serverSelectionTimeoutMS=5000";
// // mongodb://user:4PLCIKRpqqk6fguT@cluster7.iakvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster7


// export const db = async () => {
//     try {
//         await mongoose.connect(MONGO_URI)
//         console.log(`MongoDB Connected: Successfully`);
//     } catch (error) {
//         console.error("MongoDB Connection Error:", error.message);
//         process.exit(1);
//     }
// };

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

