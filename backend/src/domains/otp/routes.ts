import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {sendOTP, verifyOTP} from './controller';

const router = express.Router();

// !Request new verification otp
router.post('/', async (request: Request, response: Response) => {
  try {
    // !Validate form data input
    let {email, subject, message, duration} = request.body;

    if (!(email && subject && message)) {
      throw Error('Provide values for email, subject, message');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    email = String(email).trim();
    subject = String(subject).trim();
    message = String(message).trim();

    // !Send otp
    const createdOTP = await sendOTP({email, message, subject, duration});

    return response.status(200).json(createdOTP);
  } catch (error) {
    // !Error handling
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.status(400).send(String(error));
  }
});

// !Verify otp
router.post('/verify', async (request: Request, response: Response) => {
  try {
    // !Validate form data input
    let {email, otp} = request.body;

    if (!(email && otp)) {
      throw Error('Provide values for email and otp');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    email = String(email).trim();
    otp = String(otp).trim();

    // !Validate otp
    const validOTP = await verifyOTP({email, otp});
    return response.status(200).json({valid: validOTP});
  } catch (error) {
    // !Error handling
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.status(400).send(String(error));
  }
});

export default router;
