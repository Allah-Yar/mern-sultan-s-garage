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
router.get('https://sultan-garage-production.up.railway.app/api/products', getProducts);
router.get('https://sultan-garage-production.up.railway.app/api/products/:id', getProductById);
router.post('https://sultan-garage-production.up.railway.app/api/products',   createProduct);
router.put('https://sultan-garage-production.up.railway.app/api/products/:id', isAuthenticated, isAdmin, updateProduct);
router.delete('https://sultan-garage-production.up.railway.app/api/products/:id',   deleteProduct);
export default router;