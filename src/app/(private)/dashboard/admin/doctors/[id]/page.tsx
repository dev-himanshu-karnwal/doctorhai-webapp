"use client";

import { useParams } from "next/navigation";
import DoctorDetailsView from "@/modules/dashboard/admin/doctors/details";

export default function DoctorDetailPage() {
  const params = useParams();
  const id = params.id as string;
  return <DoctorDetailsView id={id} />;
}
