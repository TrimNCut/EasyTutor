import express from 'express';
import emailVerificationRoutes from '../domains/email_verification';
import OTPRoutes from '../domains/otp';
import userRoutes from '../domains/user';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/otp', OTPRoutes);
router.use('/email_verification', emailVerificationRoutes);

export default router;
