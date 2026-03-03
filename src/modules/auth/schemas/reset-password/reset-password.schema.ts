import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    accountId: z.string().min(1, "Account type must be selected"),
    newPassword: z
      .string()
      .min(8, "At least 8 characters long")
      .regex(/[A-Z]/, "One uppercase letter")
      .regex(/[a-z]/, "One lowercase letter")
      .regex(/[0-9]/, "One number (0-9)")
      .regex(/[^A-Za-z0-9]/, "One special character (!@#$%)"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
