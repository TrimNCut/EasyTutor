import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {sendOTP, verifyOTP} from './controller';

const router = express.Router();

// !Request new verification otp
router.post('/', async (request: Request, response: Response) => {
  try {
    const {email, subject, message, duration} = request.body;

    const createdOTP = await sendOTP({email, message, subject, duration});

    return response.status(200).json(createdOTP);
  } catch (error) {
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

router.post('/verify', async (request: Request, response: Response) => {
  try {
    const {email, otp} = request.body;

    const validOTP = await verifyOTP({email, otp});
    return response.status(200).json({valid: validOTP});
  } catch (error) {
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

export default router;
