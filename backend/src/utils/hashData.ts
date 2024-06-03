import bcrypt from 'bcrypt';

export async function hashData(data: string, saltRounds = 10) {
  const hashedData = await bcrypt.hash(data, saltRounds);
  return hashedData;
}
