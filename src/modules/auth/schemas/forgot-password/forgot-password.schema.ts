import { z } from "zod";

export const forgotPasswordRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const forgotPasswordVerifySchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 characters")
    .regex(/^\d+$/, "OTP must contain only numbers"),
});

export type ForgotPasswordRequestValues = z.infer<
  typeof forgotPasswordRequestSchema
>;
export type ForgotPasswordVerifyValues = z.infer<
  typeof forgotPasswordVerifySchema
>;
