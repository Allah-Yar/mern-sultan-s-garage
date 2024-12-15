import express from 'express';
import dotenv from 'dotenv';
import { db } from './config/db.js';
import  productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';
import path from 'path';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
db();

app.use(cors({
    origin: 'http://localhost:5173', // Allow only the frontend app to make requests
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods (optional)
  }));
// Serve the uploads folder statically
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(productRoutes);
app.use(authRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})