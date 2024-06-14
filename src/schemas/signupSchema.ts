import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(3, "username must be atleast 3 characters")
  .max(20, "username must be no more than 20 characters")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "username must only contain alphanumeric characters and underscores"
  );

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email("please use a valid email address"),
  password: z.string().min(6, "password must be atleast 6 characters"),
});
