import * as z from "zod";

export const doctorProfileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  designation: z.string().min(2, "Designation is required"),
  specialization: z.string().min(2, "Specialization area is required"),
  hasExperience: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
});

export type DoctorProfileValues = z.infer<typeof doctorProfileSchema>;
