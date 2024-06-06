import jwt from 'jsonwebtoken';
import env from '../../config/env';
import {createToken} from '../../utils/createToken';
import {hashData, verifyHashedData} from '../../utils/hashData';
import User from './model';

export async function createNewUser(data: {username: string; email: string; password: string; accountType: string}) {
  const {username, email, password, accountType} = data;

  const existingUser = await User.findOne({$or: [{email}, {username}]});

  if (existingUser) {
    if (existingUser.email === email) {
      throw Error('User with the provided email exists');
    }
    if (existingUser.username === username) {
      throw Error('User with the provided username exists');
    }
  }

  const hashedPassword = await hashData(password);

  const newUser = new User({
    username,
    email,
    accountType,
    password: hashedPassword,
  });
  const createdUser = await newUser.save();

  return createdUser;
}

export async function authenticateUser(data: {email: string; password: string}) {
  const {email, password} = data;

  const fetchedUser = await User.findOne({email});

  if (!fetchedUser) {
    throw Error('Invalid credentials entered!');
  }

  const hashedPassword = fetchedUser.password;

  const passwordMatch = await verifyHashedData(password, hashedPassword);

  if (!passwordMatch) {
    throw Error('Invalid password entered!');
  }

  const tokenData = {userId: fetchedUser.id, email};

  const token = createToken(tokenData);

  fetchedUser.token = token;
  console.log(jwt.verify(token, env.TOKEN_KEY));

  return fetchedUser;
}
