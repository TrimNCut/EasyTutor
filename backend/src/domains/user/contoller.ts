import {prisma} from '../../config/db';
import {createToken} from '../../utils/createToken';
import {hashData, verifyHashedData} from '../../utils/hashData';

export async function createNewUser(data: {username: string; email: string; password: string; accountType: string}) {
  const {username, email, password, accountType} = data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{email}, {username}],
    },
  });

  if (existingUser) {
    if (existingUser.email === email) {
      throw Error('User with the provided email exists');
    }
    if (existingUser.username === username) {
      throw Error('User with the provided username exists');
    }
  }

  const hashedPassword = await hashData(password);

  const createdUser = await prisma.user.create({data: {username, password: hashedPassword, email, accountType}});

  return createdUser;
}

export async function authenticateUser(data: {email: string; password: string}) {
  const {email, password} = data;

  let fetchedUser = await prisma.user.findFirst({where: {email}});

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

  fetchedUser = await prisma.user.update({where: {id: tokenData.userId}, data: {token: token}});

  return fetchedUser;
}
