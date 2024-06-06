import express from 'express';
import OTPRoutes from '../domains/otp';
import userRoutes from '../domains/user';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/otp', OTPRoutes);

export default router;
