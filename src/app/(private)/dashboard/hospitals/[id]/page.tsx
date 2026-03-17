"use client";

import { useParams } from "next/navigation";
import { HospitalProfileView } from "@/modules/dashboard/hospital/components/Profile/HospitalProfileView";

export default function HospitalProfilePage() {
  const params = useParams();
  const id = params.id as string;

  return <HospitalProfileView hospitalId={id} />;
}
