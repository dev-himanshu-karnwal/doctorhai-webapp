import type { Metadata } from "next";
import { HospitalDetailPage } from "@/modules/hospitals/components/hospital-detail-page";

export const metadata: Metadata = {
  title: "City General Hospital | DoctorHai",
  description:
    "View doctor availability, quick info, emergency services and facilities for City General Hospital.",
};

interface Props {
  params: { id: string };
}

export default function Page({ params }: Props) {
  return <HospitalDetailPage />;
}
