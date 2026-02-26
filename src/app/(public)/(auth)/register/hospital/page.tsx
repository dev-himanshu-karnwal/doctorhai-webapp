import { HospitalRegistrationForm } from "@/modules/auth/components/hospital-registration-form";

export const metadata = {
  title: "Hospital Registration | DoctorHai",
  description: "Register your hospital on DoctorHai network",
};

export default function HospitalRegisterPage() {
  return <HospitalRegistrationForm />;
}
