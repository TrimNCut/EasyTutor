import {createToken} from '../../utils/createToken';
import {hashData, verifyHashedData} from '../../utils/hashData';
import User from './model';

// !Create new user
export async function createNewUser(data: {username: string; email: string; password: string; accountType: string}) {
  const {username, email, password, accountType} = data;

  // !Check if user exists
  const existingUser = await User.findOne({$or: [{email}, {username}]});

  if (existingUser) {
    if (existingUser.email === email) {
      throw Error('User with the provided email exists');
    }
    if (existingUser.username === username) {
      throw Error('User with the provided username exists');
    }
  }

  // !Hash the password
  const hashedPassword = await hashData(password);

  // !Create the user
  const newUser = new User({
    username,
    email,
    accountType,
    password: hashedPassword,
  });
  const createdUser = await newUser.save();

  return createdUser;
}

// !Authenticate user
export async function authenticateUser(data: {email: string; password: string}) {
  const {email, password} = data;

  // !Get user from database
  const fetchedUser = await User.findOne({email});

  // !Check if user does not exist
  if (!fetchedUser) {
    throw Error('Invalid credentials entered!');
  }

  // !Check if email has been verified
  if (!fetchedUser.verified) {
    throw Error('Email has not been verified yet. Check your inbox.');
  }

  // !Verify password
  const hashedPassword = fetchedUser.password;

  const passwordMatch = await verifyHashedData(password, hashedPassword);

  if (!passwordMatch) {
    throw Error('Invalid password entered!');
  }

  // !Generate JWT token
  const tokenData = {userId: fetchedUser.id, email};

  const token = createToken(tokenData);

  fetchedUser.token = token;

  return fetchedUser;
}
