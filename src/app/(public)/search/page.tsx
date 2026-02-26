import { SearchPage } from "@/modules/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Doctors & Clinics | DoctorHai",
  description:
    "Find the best doctors and clinics near you. Book appointments instantly and track live availability.",
};

export default function Page() {
  return <SearchPage />;
}
