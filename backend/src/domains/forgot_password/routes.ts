import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {resetUserPassword, sendPasswordResetOTPEmail} from './controller';

const router = express.Router();

// !Forgot password
router.post('/', async (request: Request, response: Response) => {
  try {
    let {email} = request.body;

    if (!email) {
      throw Error('An email is required');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    email = String(email).trim();

    // !Send password rest email
    const createdPasswordResetOTP = await sendPasswordResetOTPEmail(email);
    return response.status(200).json(createdPasswordResetOTP);
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

router.post('/reset', async (request: Request, response: Response) => {
  try {
    let {email, otp, newPassword} = request.body;

    if (!(email && otp && newPassword)) {
      throw Error('Empty credentials are not allowed');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    email = String(email).trim();
    otp = String(otp).trim();
    newPassword = String(newPassword).trim();

    // !Reset user password
    await resetUserPassword({email, otp, newPassword});
    return response.status(200).json({email, passwordreset: true});
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
