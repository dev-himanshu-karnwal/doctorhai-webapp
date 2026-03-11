"use client";

import { useParams } from "next/navigation";
import { HospitalDetailView } from "@/modules/dashboard/admin/hospitals/components/detail";

export default function HospitalDetailPage() {
  const params = useParams();
  const id = params.id as string;

  return <HospitalDetailView hospitalId={id} />;
}
