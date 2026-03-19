import * as z from "zod";

export const addressSchema = z.object({
  addressLine1: z.string().min(5, "Address Line 1 is required"),
  addressLine2: z.string().nullable().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().min(6, "Pincode must be at least 6 characters"),
  latitude: z.number().nullable().optional(),
  longitude: z.number().nullable().optional(),
});

export type AddressValues = z.infer<typeof addressSchema>;
