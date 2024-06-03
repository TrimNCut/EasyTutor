import bcrypt from 'bcrypt';

export async function hashData(data: string, saltRounds = 10) {
  try {
    const hashedData = await bcrypt.hash(data, saltRounds);
    return hashedData;
  } catch (error) {
    throw error;
  }
}
