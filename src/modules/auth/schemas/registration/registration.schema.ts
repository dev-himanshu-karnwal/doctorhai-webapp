import { z } from "zod";

export const baseRegistrationSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
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
  contactPersonName: z.string().min(2, "Contact person name is required"),
});

export const doctorRegistrationSchema = baseRegistrationSchema.extend({
  registrationType: z.literal("doctor"),
  username: z.string().min(3, "Username is required"),
});
