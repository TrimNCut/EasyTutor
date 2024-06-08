import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {sendVerificationOTPEmail, verifyUserEmail} from './controller';

const router = express.Router();

// !Request new verification otp
router.post('/', async (request: Request, response: Response) => {
  try {
    // !Validate post form data
    let {email} = request.body;

    if (!email) {
      throw Error('An email is required');
    }

    email = String(email).trim();

    const createdEmailVerificationOtP = await sendVerificationOTPEmail(email);

    return response.status(200).json(createdEmailVerificationOtP);
  } catch (error) {
    // !Error handling
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

// !Verify email verification otp
router.post('/verify', async (request: Request, response: Response) => {
  try {
    let {email, otp} = request.body;

    if (!(email && otp)) {
      throw 'Empty otp details are not allowed';
    }

    email = String(email).trim();
    otp = String(otp).trim();

    await verifyUserEmail({email, otp});

    // !Verify user email
    return response.status(200).json({email, verified: true});
  } catch (error) {
    // !Error handling
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

export default router;
