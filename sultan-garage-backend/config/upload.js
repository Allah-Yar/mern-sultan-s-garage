import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer to Use Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products", // Folder name in Cloudinary
    format: async (req, file) => "png", // Convert all images to PNG
    public_id: (req, file) => file.originalname.split(".")[0], // Use file name as public_id
  },
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024  * 1024 }, // Limit file size to 5MB
});

export default upload;
