

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// // const MONGO_URI = process.env.MONGODB_URI;
// const MONGO_URI = process.env.MONGODB_URI;

// console.log('MongoDB URI:', MONGO_URI)

// export const db = async () => {
//   try {
//     await mongoose.connect( MONGO_URI, {
//       serverSelectionTimeoutMS: 5000,
//     });
//     ;

//     console.log(`$MongoDB Connected Successfully on ${MONGO_URI}`);
    
//     mongoose.connection.on('error', err => {
//       console.error('MongoDB connection error:', err);
//     });

//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//     process.exit(1);
//   }
// };

// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const MONGO_URI = process.env.MONGODB_URI;

// console.log('MongoDB URI:', MONGO_URI);

// export const db = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);

//     console.log(`MongoDB Connected Successfully on ${MONGO_URI}`);

//     mongoose.connection.on('error', err => {
//       console.error('MongoDB connection error:', err);
//     });

//   } catch (error) {
//     console.error('MongoDB Connection Error:', error);
//     process.exit(1);
//   }
// };

// import mongoose from 'mongoose';

// mongoose.set('debug', true); // Log all MongoDB queries (optional for deeper inspection)

// export const db = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://admin:xDfvpppTXyEXy3zn@cluster0.hnk836f.mongodb.net/myGarage?ssl=true&retryWrites=true&w=majority');
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB Connection Error:', err);
//   }
// };




import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGODB_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const db = async () => {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
   
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
db().catch(console.dir);
