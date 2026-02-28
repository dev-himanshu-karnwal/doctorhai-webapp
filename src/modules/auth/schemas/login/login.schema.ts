import { z } from "zod";

export const loginSchema = z.discriminatedUnion("loginType", [
  z.object({
    loginType: z.literal("doctor"),
    username: z.string().min(3, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
  z.object({
    loginType: z.literal("hospital"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
]);

export type LoginValues = z.infer<typeof loginSchema>;
