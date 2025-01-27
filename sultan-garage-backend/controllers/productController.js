import  Product from "../models/Product.js"
import upload from "../config/upload.js"
import path from "path"
import express from 'express'


const app = express()




// // __dirname
// const __dirname = path.resolve();

// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => { cb(null, path.join(process.cwd(), "uploads/"));}, // Save files in the "uploads" folder
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
//   });
//   const upload = multer({ storage });

  // Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        
        if (products) {
            res.status(200).json({data: products});
        } else {
            res.status(404).json({message: "No products found"});
        } 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error", error: error});
    }
}

export const getProductById = async (req, res) => {
    try {
        res.status(200).json({message: "get product by id"})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = [ 
    upload.single("image"),
    async(req, res) => {
    try {
      console.log("Request Body:", req.body);
      console.log("Uploaded File:", req.file);

        if (!req.body.name ||  !req.body.price  || !req.file) {
           return res.status(400).json({message: "Please fill in all fields", received: req.body,});} 
         // Upload the image to Cloudinary
      const result = await cloudinary.v2.uploader.upload(req.file.path);
           const product =  {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url,
            // description: req.body.description,
            
            // rating: req.body.rating,
            // numReviews: req.body.numReviews,
            // countInStock: req.body.countInStock
        }
         console.log("product data", product)
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({success: true, message:"Product created successfully", data: newProduct, product});

        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}
]

export const updateProduct = [
    upload.single("image"),
    async (req, res) => {
      try {
        const productId = req.params.id;
        const updateData = {
          name: req.body.name,
          price: req.body.price,
          category: req.body.category
        };
  
        // If a new image is uploaded, update the image path
        if (req.file) {
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            updateData.image = result.secure_url;
        }
  
        const product = await Product.findByIdAndUpdate(
          productId, 
          updateData, 
          { new: true }
        );
  
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }
  
        res.status(200).json({ 
          message: "Product updated successfully", 
          data: product 
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ 
          message: "Internal server error", 
          error: error.message 
        });
      }
    }
  ];

export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error", error: error});
    }
}