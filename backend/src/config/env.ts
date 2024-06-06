import {z} from 'zod';
import {fromZodError} from 'zod-validation-error';

const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string(),
  TOKEN_KEY: z.string(),
  TOKEN_EXPIRY: z.string(),
  AUTH_EMAIL: z.string(),
  AUTH_PASS: z.string(),
});

type Env = z.infer<typeof envSchema>;
function parseEnv(): Env {
  const env = envSchema.safeParse(process.env);

  if (env.success && env.data) {
    return env.data;
  }

  console.log(fromZodError(env.error).message);
  return {
    PORT: '3001',
    DATABASE_URL: 'mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase',
    TOKEN_KEY: 'jaoijdoiklandkofnvaodoifoksidnsimfidinjfijdij',
    TOKEN_EXPIRY: '60d',
    AUTH_EMAIL: 'email@hotmail.com',
    AUTH_PASS: 'password',
  };
}

const env = parseEnv();

export default env;
