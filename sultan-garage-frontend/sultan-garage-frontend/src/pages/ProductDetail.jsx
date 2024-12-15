import  { useMemo, useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import hero from '../assets/images/hero.jpg';

// Sample Data for Auto Parts
const productsData = [
  {
    id: 1,
    title: 'Car Tire',
    price: '$50',
    category: 'Tires',
    image: hero,
  },
  {
    id: 2,
    title: 'Engine Oil',
    price: '$30',
    category: 'Oils',
    image: hero,
  },
  {
    id: 3,
    title: 'Car Battery',
    price: '$120',
    category: 'Batteries',
    image: hero,
  },
  {
    id: 4,
    title: 'Brake Pads',
    price: '$40',
    category: 'Accessories',
    image: hero,
  },
];

const AutoPartsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Filter and Search Logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
    return (
      (categoryFilter === 'All' || product.category === categoryFilter) &&
      product.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  })
}, [searchTerm, categoryFilter]);

  return (
    <Box sx={{ py: 8, px: 4, backgroundColor: '#f5f5f5' }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, color: '#1a1a2e', }}
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
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 4, gap: 2  }}>
        {['All', 'Tires', 'Oils', 'Batteries', 'Accessories'].map((category) => (
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
            //   padding: { xs: '6px 8px', sm: '8px 16px' },
            //     fontSize: { xs: '12px', sm: '14px' }

            }}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Product Cards */}
      <Grid container spacing={4} justifyContent="center">
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card sx={{ boxShadow: 3, borderRadius: '15px', height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a1a2e' }}>
                  {product.title}
                </Typography>
                <Typography variant="body1" sx={{ color: '#1a1a2e', mt: 1 }}>
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
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

export default AutoPartsSection;