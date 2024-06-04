import jwt from 'jsonwebtoken';
import env from '../config/env';

export function createToken(
  tokenData: string | Buffer | object,
  tokenKey = env.TOKEN_KEY,
  expiresIn = env.TOKEN_EXPIRY
) {
  return jwt.sign(tokenData, tokenKey, {expiresIn});
}
