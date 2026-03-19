import { z } from "zod";
import {
  hospitalRegistrationSchema,
  doctorRegistrationSchema,
} from "../schemas";

export type HospitalRegistrationValues = z.infer<
  typeof hospitalRegistrationSchema
>;
export type DoctorRegistrationValues = z.infer<typeof doctorRegistrationSchema>;
export type RegistrationValues =
  | HospitalRegistrationValues
  | DoctorRegistrationValues;
