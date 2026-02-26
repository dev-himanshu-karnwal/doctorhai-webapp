import type { Metadata } from "next";
import { HospitalsPage } from "@/modules/hospitals";

export const metadata: Metadata = {
  title: "Find a Hospital | DoctorHai",
  description:
    "Live availability status for medical centers near you. Filter by specialty, distance, and more.",
};

export default function Page() {
  return <HospitalsPage />;
}
