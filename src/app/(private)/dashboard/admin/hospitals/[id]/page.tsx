"use client";

import { useParams, useSearchParams } from "next/navigation";
import { HospitalDetailView } from "@/modules/dashboard/admin/hospitals/components/detail";

export default function HospitalDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const isVerified = searchParams.get("verified") === "true";

  return <HospitalDetailView hospitalId={id} initialIsVerified={isVerified} />;
}
