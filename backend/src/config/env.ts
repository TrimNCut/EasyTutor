import {z} from 'zod';
import {fromZodError} from 'zod-validation-error';

const envSchema = z.object({port: z.string(), database_url: z.string()});

type Env = z.infer<typeof envSchema>;
function parseEnv(): Env {
  const env = envSchema.safeParse(process.env);

  if (env.success && env.data) {
    return env.data;
  }

  console.log(fromZodError(env.error).message);
  return {
    port: '3001',
    database_url: 'mongodb+srv://test:test@cluster0.ns1yp.mongodb.net/myFirstDatabase',
  };
}

const env = parseEnv();

export default env;
