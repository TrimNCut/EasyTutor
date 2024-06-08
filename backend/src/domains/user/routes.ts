import express, {type Request, type Response} from 'express';
import {z} from 'zod';
import {sendVerificationOTPEmail} from '../email_verification/controller';
import {authenticateUser, createNewUser} from './controller';

const router = express.Router();

// !Sign up
router.post('/signup', async (request: Request, response: Response) => {
  try {
    let {username, email, password, accountType} = request.body;

    // !Check if any input field is empty
    if (!(username && email && password && accountType)) {
      throw Error('Empty input fields! username, email, account and password must be filled!');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    username = String(username).trim();
    email = String(email).trim();
    password = String(password).trim();
    accountType = String(accountType).trim();

    // !Make sure the username and email are valid
    if (!/^[a-zA-Z ]*$/.test(username)) {
      throw Error('Invalid username entered');
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw Error('Invalid email entered');
    }

    // !Create new user
    const newUser = await createNewUser({username, password, email, accountType});
    await sendVerificationOTPEmail(email);

    return response.status(200).json(newUser);
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

// !Login
router.post('/login', async (request: Request, response: Response) => {
  try {
    let {email, password} = request.body;

    // !Check if any input field is empty
    if (!(email && password)) {
      throw Error('Empty credentials supplied!');
    }

    // !Remove the leading and trailing white space and line terminator characters.
    email = String(email).trim();
    password = String(password).trim();

    // !Authenticate user
    const authenticatedUser = await authenticateUser({email, password});

    return response.status(200).json(authenticatedUser);
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
