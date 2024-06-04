import bcrypt from 'bcrypt';

export async function hashData(data: string, saltRounds = 10) {
  return await bcrypt.hash(data, saltRounds);
}

export async function verifyHashedData(unhashed: string, hashed: string) {
  return await bcrypt.compare(unhashed, hashed);
}
