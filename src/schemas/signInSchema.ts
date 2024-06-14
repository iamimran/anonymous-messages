import { z } from 'zod';
import { usernameValidation } from './signupSchema';

export const signInSchema = z.object({
  username: usernameValidation,
  password: z.string().min(6, "password must be atleast 6 characters"),
})
