import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

import { useProductStore } from "../store/productStore.js";
// import Link from '@mui/material/Link';



const CreateProductDetails =  () => {
    const navigate = useNavigate();
    // const [error, setError] = useState("");
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        category: "",
        image: null,
        imagePreview: "",
      });
    
      const { createProduct } = useProductStore();

      // const handleNavigation = (path) => {
      //   navigate(path)
      // }
    
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
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   setError("");
      //   setIsSubmitting(true);

      //    // Validate the form data
      //    if (!productData.name || !productData.price || !productData.image) {
      //     alert("Please fill in all fields and upload an image.");
      //     throw new Error("Please fill all required fields");
          
      //   }
    
      //   // Validate Price
      //   if (isNaN(productData.price) || productData.price <= 0) {
      //     alert("Price must be a valid number greater than zero.");
      //     return;
      //   }
        
    
      //   // Submit Product Data
      //   try {
          

         

      //        // Create FormData for file upload
      //         const formData = new FormData();
      //         formData.append('name', productData.name);
      //         formData.append('price', productData.price);
      //         formData.append('category', productData.category);
      //         formData.append('image', productData.image);
              

      //     const response = await createProduct(productData);
      //     if (response.success) {
      //       alert("Product created successfully!");
      //       // Only navigate after successful creation
      //       navigate("/products");
      //       setProductData({
      //         name: "",
      //         price: "",
      //         category: "",
      //         image: null,
      //         imagePreview: "",
      //       });
      //     } else {
      //       throw new Error(response.message || "Failed to create product");
            
      //     }
      //   } catch (error) {
      //     console.error("Error creating product", error);
      //     setError(error.message || "An unexpected error occurred");
      //     alert(error.message, "An error occurred while creating the product.");
      //   } finally {
      //     setIsSubmitting(false);
      //   }
      // };
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      
      //   const formData = new FormData();
      //   formData.append('name', productData.name.trim());
      //   formData.append('price', String(productData.price));
      //   formData.append('category', productData.category.trim());
      //   if (productData.image instanceof File) {
      //     formData.append('image', productData.image);
      //   }
      
      //   const result = await createProduct(formData);
      //   if (result.success) {
      //     navigate('/products');
      //   } else {
      //     alert(result.message);
      //   }
      // };

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate before submission
        if (!productData.name || !productData.price || !productData.category || !productData.image) {
          alert('All fields are required');
          return;
        }
      
        try {
          const result = await createProduct(productData);
          if (result.success) {
            alert('Product created successfully');
            navigate('/products');
          } else {
            alert(result.message);
          }
        } catch (error) {
          console.error('Submission error:', error);
          alert('Failed to create product');
        }
      };
    

  return (
    <Paper elevation={3} style={{ padding: "20px", maxWidth: "500px", margin: " 5rem auto" }}>
      <Typography variant="h4" gutterBottom>
        Create Product
      </Typography>

      {/* {error && (
        <Typography color="error" style={{ marginBottom: "1rem" }}>
          {error}
        </Typography>
      )} */}

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
     
        {/* <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={() => handleNavigation("/products")}
        >
          Add Product
        </Button> */}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          // disabled={isSubmitting}
        >
          {/* {isSubmitting ? "Creating..." : "Add Product"} */}
          Add Product
        </Button>
        
      </form>
    </Paper>
  );
};

export default CreateProductDetails;



