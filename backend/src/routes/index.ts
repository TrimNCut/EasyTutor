import express from 'express';
import emailVerificationRoutes from '../domains/email_verification';
import forgotPasswordRoutes from '../domains/forgot_password';
import OTPRoutes from '../domains/otp';
import userRoutes from '../domains/user';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/otp', OTPRoutes);
router.use('/email_verification', emailVerificationRoutes);
router.use('/forgot_password', forgotPasswordRoutes);

export default router;
