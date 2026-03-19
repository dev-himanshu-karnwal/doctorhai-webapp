"use client";

import { useParams, useSearchParams } from "next/navigation";
import DoctorDetailsView from "@/modules/dashboard/admin/doctors/details";

export default function DoctorDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const isVerified = searchParams.get("verified") === "true";

  return <DoctorDetailsView id={id} initialIsVerified={isVerified} />;
}
