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
  
} from '@mui/material';
import EditProductModal from './ProductModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { useProductStore } from '../store/productStore';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/images/hero.jpg';

const ProductCard = () => {
  const navigate = useNavigate();
  // const [anchorElNav, setAnchorElNav] = useState(null);
  const { products, fetchProducts, loading, error } = useProductStore();
  const { deleteProduct } = useProductStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [loadingImages, setLoadingImages] = useState({});
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [authStatus, setAuthStatus] = useState({
  //   isRegistered: false,
  //   isLoggedIn: false
  // });

    useEffect(() => {
      const token = sessionStorage.getItem('token') || localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);
  //  // Check if user is already logged in on component mount
  //  useEffect(() => {
  //   const checkLoginStatus = () => {
  //     // Check localStorage or sessionStorage for auth status
  //     const registered = localStorage.getItem('isRegistered') === 'true';
  //     const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //     setAuthStatus({ isRegistered: registered, isLoggedIn: loggedIn });
  //   };

  //   checkLoginStatus();
  // }, []);


  // This is used for products
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const getImageSrc = (product) => {
    if (!product.image) return hero;

    if (product.image instanceof File) {
      return URL.createObjectURL(product.image);
    }

    if (product.image.startsWith('/uploads')) {
      const baseURL =  'https://sultan-garage.up.railway.app';
      return `${baseURL}${product.image}`;
    }

    if (product.image.startsWith('http') || product.image.startsWith('data:')) {
      return product.image;
    }

    return hero;
  };

  const handleImageLoad = (productId) => {
    setLoadingImages(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (categoryFilter === 'All' || product.category === categoryFilter) &&
        product.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    });
  }, [products, searchTerm, categoryFilter]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category).filter(Boolean));
    return ['All', ...uniqueCategories];
  }, [products]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <Typography variant="h6">Loading products...</Typography>
      </Box>
    );
  }

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await deleteProduct(productId);
      
      if (response.success) {
        toast.success('Product deleted successfully');
      } else {
        toast.error(response.message || 'Failed to delete product');
        console.error('Product deletion unsuccessful:', response.message);
      }
    } catch (error) {
      console.error('Error during product deletion:', error);
      toast.error('An unexpected error occurred');
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(false);
    setEditingProduct(null);
  };

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '300px', backgroundColor: 'white' }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 4, gap: 2 }}>
        {products.length > 0 && 
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

                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', // This will push buttons to opposite ends
                    alignItems: 'center', 
                    mt: 2 
                  }}
                >
                {isLoggedIn ? (
                    
                  <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEditClick(product)}
                  startIcon={<MdModeEdit />}
                >
                  Edit
                </Button>

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDeleteProduct(product._id)}
                  startIcon={<RiDeleteBinFill />}
                >
                  Delete
                </Button>
                </> ) : (
                " "
                        )}
              </Box>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <EditProductModal
        open={isEditModalOpen}
        handleClose={handleEditModalClose}
        product={editingProduct}
      />

      {products.length === 0 ? (
        <Typography 
          variant='h6'
          sx={{ textAlign: 'center', mt: 4, color: '#555' }}
        >
          No Products Found 
          {isLoggedIn ? 
          <Button
          onClick={() => handleNavClick('/create')}
            variant='h5'  
            sx={{ 
              display: 'block', 
              fontWeight: 'bold', 
              color: '#1B77D2', 
              textDecoration: 'none',
              '&:hover': {
                color: 'blue',
              },
            }} 
           
          >
            Create New Product
          </Button> :
          " "
          }

        </Typography>
      ) : (
        filteredProducts.length === 0 && (
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', mt: 4, color: '#555' }}
          >
            No products match your search.
          </Typography>
        )
      )}
    </Box>
  );
};

export default ProductCard;