
import  { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
  Skeleton,
  Link,
  
} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinFill } from "react-icons/ri";
import { useProductStore } from '../store/productStore';
import hero from '../assets/images/hero.jpg';



const ProductCard = () => {
  const { products, fetchProducts,  loading, error } = useProductStore();
  const {deleteProduct} = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [loadingImages, setLoadingImages] = useState({});
  // const notifySuccess = () => toast.success('Success Notification!');

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Helper function to handle image src
  const getImageSrc = (product) => {
    // Prioritize image sources
    if (product.image.startsWith('/uploads')) {
      // If it's a local File object
      if (product.image instanceof File) {
        return URL.createObjectURL(product.image);
      }
      if (product.image) {
        // If it's a relative path, prepend the base URL
        if (product.image.startsWith('/uploads')) {
          const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
          return `${baseURL}${product.image}`;
        }
        return product.image; // For already full URLs
      }
      
      // If it's a string URL
      if (typeof product.image === 'string') {
        // Full URL or data URI
        if (product.image.startsWith('http') || product.image.startsWith('data:')) {
          return product.image;
        }
        
        
        // const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'; 
        // return `${baseURL}/${product.image}`;
        // Relative path - prepend base URL
        return `${import.meta.env.VITE_API_BASE_URL || ''}/uploads/${product.image}`;
      }

    }
    
    // Fallback placeholder
    return hero;
  };

  // Handle image load state
  const handleImageLoad = (productId) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  // Filter and Search Logic
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (categoryFilter === 'All' || product.category === categoryFilter) &&
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    });
  }, [products, searchTerm, categoryFilter]);

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category).filter(Boolean));
    return ['All', ...uniqueCategories];
  }, [products]);

  // Loading and Error States
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Typography variant="h6">Loading products...</Typography>
      </Box>
    );
  }

 // For products deletion 
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await deleteProduct(productId);
      
      if (response.success) {
         // Optional: Add toast notification
         toast.success('Product deleted successfully');
        // Refresh the product list
        // fetchProducts();
        
       
      } else {
        // Optional: Add error toast
        toast.error(response.message || 'Failed to delete product');
        console.error('Product deletion unsuccessful:', response.message);
      }
    } catch (error) {
      console.error('Error during product deletion:', error);
      // Optional: Add error toast
      toast.error('An unexpected error occurred');
    }
  };
     
  

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Typography variant="h6" color="error">
          Error loading products: {error}
        </Typography>
      </Box>
    );
  } 

  return (
 
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
      <ToastContainer position="top-right" autoClose={1000} />
         
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: '#1a1a2e' }}
      >
        Featured Products
      </Typography>

      {/* Search Input */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '300px', backgroundColor: 'white' }}
        />
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 4, gap: 2 }}>
        {products.length === 0 ? '' : 
          categories.map((category) => (
          <Button
            key={category}
            variant={categoryFilter === category ? 'contained' : 'outlined'}
            onClick={() => setCategoryFilter(category)}
            sx={{
              borderRadius: '20px',
              textTransform: 'none',
              color: categoryFilter === category ? 'white' : '#1a1a2e',
              backgroundColor: categoryFilter === category ? '#1a1a2e' : 'transparent',
              '&:hover': {
                backgroundColor: '#1a1a2e',
                color: 'white',
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={3} 
            key={product._id}
          >
            <Card sx={{ boxShadow: 3, borderRadius: '15px', height: '100%' }}>
              {!loadingImages[product._id] && (
                <Skeleton 
                  variant="rectangular" 
                  width="100%" 
                  height={140} 
                />
              )}
              <CardMedia
                component="img"
                height="140"
                image={getImageSrc(product)}
                alt={product.name}
                sx={{ 
                  objectFit: 'cover', 
                  objectPosition: 'center',
                  display: loadingImages[product._id] ? 'block' : 'none'
                }}
                onLoad={() => handleImageLoad(product._id)}
                onError={(e) => {
                  e.target.src = hero;
                  handleImageLoad(product._id);
                }}
                
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>
                  {product.name}
                </Typography>
                <Typography variant="body1" sx={{ color: '#1a1a2e', mt: 1 }}>
                  ${product.price}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button
              variant="contained"
              color="error" // Red color
              onClick={() => handleDeleteProduct(product._id)}
              startIcon={<RiDeleteBinFill />}
            >
              Delete
            </Button>
          </Box>
       </CardContent>
       
      </Card>
     
  </Grid>
  ))}
 
</Grid>
{ products.length === 0 ? '' :
<Typography sx={{ textAlign: 'center' }}>
   <Link href="/create"  variant='h5'  sx={{ display: 'block', fontWeight: 'bold',  textDecoration: 'none', mt: 4, color: '#1B77D2', 
     '&:hover': {
      color: 'blue',
    },
    }} >Create New Product</Link>
    </Typography>
}

      {/* No Products Message */}
      {products.length === 0 ? 
        <Typography variant='h6'
          sx={{ textAlign: 'center', mt:4, color: '#555'}}
        >
        No Products Found 
        <Link href="/create"  variant='h5'  sx={{ display: 'block', fontWeight: 'bold', color: '#1B77D2', textDecoration: 'none',
            '&:hover': {
              color: 'blue',
            },
         }} >Create New Product</Link>
        </Typography>
         : 
        filteredProducts.length === 0 && (
        <Typography
          variant="h6"
          sx={{ textAlign: 'center', mt: 4, color: '#555' }}
        >
          No products match your search.
         
        </Typography>
      )}
    </Box>
  );
};

export default ProductCard;