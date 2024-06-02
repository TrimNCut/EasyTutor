import express, {type Request, type Response} from 'express';
import {fromZodError} from 'zod-validation-error';
import {validateSignUpFormData} from './contoller';
import {signUpFormDataSchema} from './types';

const router = express.Router();

router.post('/signup', async (request: Request, response: Response) => {
  const body = signUpFormDataSchema.safeParse(request.body);

  if (!body.success) {
    return response.json({error: String(fromZodError(body.error)), success: false});
  }

  const signUpFormData = body.data;
  const validateResult = await validateSignUpFormData(signUpFormData!);

  if (!validateResult.success) {
    return response.send({error: validateResult.error, success: false});
  }

  return response.json({data: validateResult.data, success: true});
});

router.post('/login', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

export default router;
