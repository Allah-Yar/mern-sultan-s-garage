
import mongoose from "mongoose";


export const db = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/sultanDB');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}
