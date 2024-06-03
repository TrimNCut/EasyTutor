import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {createNewUser} from './contoller';

const router = express.Router();

router.post('/signup', async (request: Request, response: Response) => {
  try {
    let {username, email, password} = request.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    if (!(username && email && password)) {
      throw Error('Empty input fields!');
    } else if (!/^[a-zA-Z ]*$/.test(username)) {
      throw Error('Invalid username entered');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw Error('Invalid email entered');
    } else if (password.length < 8) {
      throw Error('Password is too short!');
    } else {
      const newUser = await createNewUser({username: username, password: password, email: email});

      return response.status(200).json(newUser);
    }
  } catch (error) {
    const errorSchema = z.object({message: z.string()});

    const results = errorSchema.safeParse(error);

    if (results.data && results.success) {
      return response.status(400).send(results.data.message);
    }

    return response.send(String(error));
  }
});

router.post('/login', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

export default router;
