import {z} from 'zod';
import {fromZodError} from 'zod-validation-error';

function parseEnv() {
  const envSchema = z.object({port: z.string()});

  const env = envSchema.safeParse(process.env);

  if (!(env.success && env.data)) {
    console.log(fromZodError(env.error).message);
    return {
      port: '3001',
    };
  }

  return env.data;
}

const env = parseEnv();

export default env;
