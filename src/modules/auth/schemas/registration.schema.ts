import { z } from "zod";

export const hospitalRegistrationSchema = z
  .object({
    hospitalName: z.string().min(2, "Hospital name is required"),
    contactPersonName: z.string().min(2, "Contact person name is required"),
    phoneNumber: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const doctorRegistrationSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    phoneNumber: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type HospitalRegistrationValues = z.infer<
  typeof hospitalRegistrationSchema
>;
export type DoctorRegistrationValues = z.infer<typeof doctorRegistrationSchema>;
