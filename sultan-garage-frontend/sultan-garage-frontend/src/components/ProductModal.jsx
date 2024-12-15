import  { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
} from '@mui/material';
import { useProductStore } from '../store/productStore';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProductModal = ({ open, handleClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const { updateProduct } = useProductStore();

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        category: product.category || '',
        image: null,
      });
      
      setImagePreview(
        product.image && product.image.startsWith('/uploads') 
          ? `${import.meta.env.VITE_API_BASE_URL || ''}${product.image}` 
          : product.image
      );
    }
  }, [product, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // if (!formData.name || !formData.price || !formData.category || !formData.image) {
    //   alert('Please fill in all required fields');
    //   return;
    // }

    try {
      const response = await updateProduct(product._id, {
        ...formData,
        price: parseFloat(formData.price)
      });

      if (response.success) {
        toast.success('Product Updated Successfully');
        handleClose();
        
      } else {
        console.error('Update failed', response.message);
        toast.error('Failed to update product');
        alert(response.message);
      }
    } catch (error) {
      console.error('Update failed', error);
      alert('Failed to update product');
    }
  };

  

  return (
    <>
    
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
         
      <DialogTitle>Edit Product</DialogTitle>
      
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
              variant="outlined"
              InputProps={{
                startAdornment: '$'
              }}
            />
          </Grid>

          <Grid item xs={12}>
          <TextField
              fullWidth
              label="Product Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="contained-button-file"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
              <Button 
                variant="contained" 
                component="span"
                fullWidth
                sx={{ mt: 1 }}
              >
                Upload New Image
              </Button>
            </label>

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Product Preview"
                style={{
                  width: '100%',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  marginTop: '16px'
                }}
              />
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="inherit" variant='outlined'>
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          color="primary" 
          variant="contained"
        >
          Update Product
        </Button>
      </DialogActions>
      
    </Dialog>
    </>
  );
};

export default EditProductModal;