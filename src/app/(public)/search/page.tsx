import { SearchPage } from "@/modules/global-search";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Search Doctors & Clinics | DoctorHai",
  description:
    "Find the best doctors and clinics near you. Book appointments instantly and track live availability.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#F6FAF9] font-bold text-[#4FB3AA]">
          Loading Search...
        </div>
      }
    >
      <SearchPage initialSearch={search} />
    </Suspense>
  );
}
