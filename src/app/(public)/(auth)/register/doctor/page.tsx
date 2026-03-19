import { DoctorRegistrationForm } from "@/modules/auth";

export const metadata = {
  title: "Doctor Registration | DoctorHai",
  description: "Register as a doctor on DoctorHai network",
};

export default function DoctorRegisterPage() {
  return <DoctorRegistrationForm />;
}
