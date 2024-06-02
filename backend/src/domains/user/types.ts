import {z} from 'zod';

export const signUpFormDataSchema = z.object({
  username: z.string(),
  passwordOne: z.string(),
  passwordTwo: z.string(),
  email: z.string(),
});

export type SignUpFormData = z.infer<typeof signUpFormDataSchema>;
