import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {authenticateUser, createNewUser} from './contoller';

const router = express.Router();

router.post('/signup', async (request: Request, response: Response) => {
  try {
    let {username, email, password, accountType} = request.body;

    if (!(username && email && password && accountType)) {
      throw Error('Empty input fields!');
    }

    username = username.trim();
    email = email.trim();
    password = password.trim();
    accountType = accountType.trim();

    if (!/^[a-zA-Z ]*$/.test(username)) {
      throw Error('Invalid username entered');
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw Error('Invalid email entered');
    }
    if (password.length < 8) {
      throw Error('Password is too short!');
    }

    const newUser = await createNewUser({username, password, email, accountType});

    return response.status(200).json(newUser);
  } catch (error) {
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

router.post('/login', async (request: Request, response: Response) => {
  try {
    let {email, password} = request.body;

    if (!(email && password)) {
      throw Error('Empty credentials supplied!');
    }

    email = email.trim();
    password = password.trim();

    const authenticatedUser = await authenticateUser({email, password});

    return response.status(200).json(authenticatedUser);
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
