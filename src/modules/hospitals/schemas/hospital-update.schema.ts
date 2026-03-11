import { z } from "zod";

export const hospitalUpdateSchema = z.object({
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.object({
    addressLine1: z.string().min(1, "Street address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pincode: z.string().min(6, "Invalid ZIP code"),
  }),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  type: z.string().min(1, "Hospital type is required"),
  facilities: z.array(z.object({ value: z.string() })),
  timeline: z.array(
    z.object({
      day: z.string(),
      opentime: z.string(),
      closetime: z.string(),
    })
  ),
});

export type HospitalUpdateValues = z.infer<typeof hospitalUpdateSchema>;

export type HospitalUpdatePayload = Omit<HospitalUpdateValues, "facilities"> & {
  facilities: string[];
};
