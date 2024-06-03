import {prisma} from '../../config/db';
import {hashData} from '../../utils/hashData';

export async function createNewUser(data: {username: string; email: string; password: string}) {
  const {username, email, password} = data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{email: email}, {username: username}],
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

  const createdUser = await prisma.user.create({data: {username: username, password: hashedPassword, email: email}});

  return createdUser;
}
