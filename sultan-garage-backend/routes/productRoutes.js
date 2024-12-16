import { Router } from 'express';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    
} from '../controllers/productController.js';
import checkAdmin from '../middleware/checkAdmin.js';




const router = Router();
router.get('/api/products', getProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', checkAdmin, createProduct);
router.put('/api/products/:id', checkAdmin, updateProduct);
router.delete('/api/products/:id', checkAdmin, deleteProduct);
export default router;