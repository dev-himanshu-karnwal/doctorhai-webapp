import { z } from "zod";

export const baseRegistrationSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    name: z.string().min(2, "Name is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const hospitalRegistrationSchema = baseRegistrationSchema.extend({
  registrationType: z.literal("hospital"),
});

export const doctorRegistrationSchema = baseRegistrationSchema.extend({
  registrationType: z.literal("doctor"),
  username: z.string().min(3, "Username is required"),
});
