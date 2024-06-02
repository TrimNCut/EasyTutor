import express from 'express';
import userRoutes from '../domains/user';

const router = express.Router();

router.use('/user', userRoutes);

export default router;
