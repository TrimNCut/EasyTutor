import bcrypt from 'bcrypt';

// !Hash password
export async function hashData(data: string, saltRounds = 10) {
  return await bcrypt.hash(data, saltRounds);
}

// !Verify hashed data
export async function verifyHashedData(unHashed: string, hashed: string) {
  return await bcrypt.compare(unHashed, hashed);
}
