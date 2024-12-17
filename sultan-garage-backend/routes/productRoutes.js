import { Router } from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    
} from '../controllers/productController.js';
import { isAuthenticated, isAdmin } from '../middleware/checkAdmin.js';




const router = Router();
router.get('/api/products', getProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', isAuthenticated, isAdmin, createProduct);
router.put('/api/products/:id', isAuthenticated, isAdmin, updateProduct);
router.delete('/api/products/:id', isAuthenticated, isAdmin, deleteProduct);
export default router;