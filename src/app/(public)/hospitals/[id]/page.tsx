import type { Metadata } from "next";
import { HospitalDetailPage } from "@/modules/hospitals";

export const metadata: Metadata = {
  title: "City General Hospital | DoctorHai",
  description:
    "View doctor availability, quick info, emergency services and facilities for City General Hospital.",
};

export default function Page() {
  return <HospitalDetailPage />;
}
