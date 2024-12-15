import { Router } from 'express';
import { login, register } from '../controllers/authController.js';
const router = Router();

router.post('/api/login', login);
router.post('/api/register', register);
export default router;