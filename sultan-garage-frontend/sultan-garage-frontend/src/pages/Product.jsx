import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

import { useProductStore } from "../store/productStore.js";
// import Link from '@mui/material/Link';



const CreateProductDetails =  () => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        category: "",
        image: null,
        imagePreview: "",
      });
    
      const { createProduct } = useProductStore();

      const handleNavigation = (path) => {
        navigate(path)
      }
    
      // Handle Add Product
      const handleAddProduct = (e) => {
        const { name, value } = e.target;
        setProductData((productData) => ({
          ...productData,
          [name]: value,
        }));
      };
    
      // Handle Image Change and Preview
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setProductData({
            ...productData,
            image: file,
            imagePreview: URL.createObjectURL(file),
          });
        }
      };
    
      // Handle Form Submit
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate the form data
        if (!productData.name || !productData.price || !productData.image) {
          alert("Please fill in all fields and upload an image.");
          return;
        }
    
        // Validate Price
        if (isNaN(productData.price) || productData.price <= 0) {
          alert("Price must be a valid number greater than zero.");
          return;
        }
    
        // Submit Product Data
        try {
          const { success, message } = await createProduct(productData);
          if (success) {
            alert("Product created successfully!");
            setProductData({
              name: "",
              price: "",
              category: "",
              image: null,
              imagePreview: "",
            });
          } else {
            alert(`Product creation failed: ${message}`);
          }
        } catch (error) {
          console.error("Error creating product", error);
          alert("An error occurred while creating the product.");
        }
      };
    

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "500px", margin: " 5rem auto" }}>
      <Typography variant="h4" gutterBottom>
        Create Product
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={productData.name}
          onChange={handleAddProduct}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Product Category"
          name="category"
          value={productData.category}
          onChange={handleAddProduct}
          margin="normal"
          required
        />

        {/* Product Price */}
        <TextField
          fullWidth
          label="Product Price"
          name="price"
          type="number"
          value={productData.price}
          onChange={handleAddProduct}
          margin="normal"
          required
        />

        {/* Product Image */}
        <Button
          variant="contained"
          component="label"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Upload Product Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Button>

        {/* Image Preview */}
        {productData.imagePreview && (
          <Box mt={2} display="flex" justifyContent="center">
            <img
              src={productData.imagePreview}
              alt="Product Preview"
              style={{ width: "100%", maxHeight: "150px", objectFit: "contain" }}
            />
          </Box>
        )}

        {/* Submit Button */}
     
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={() => handleNavigation("/products")}
        >
          Add Product
        </Button>
        
      </form>
    </Paper>
  );
};

export default CreateProductDetails;



