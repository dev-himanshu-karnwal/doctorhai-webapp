"use client";

import {
  DoctorProfileCard,
  DoctorAvailabilityCard,
  DoctorHospitalInfo,
  DoctorProfessionalInfo,
  DoctorContactCard,
  DoctorProfileSkeleton,
} from "./index";
import { useParams } from "next/navigation";
import { useDoctor, useIncrementDoctorView } from "../../hooks";
import { useHospital } from "@/modules/hospitals/hooks";
import { useDirections } from "@/hooks/use-directions";
import Link from "next/link";
import { useEffect } from "react";

export function DoctorProfilePage() {
  const { id } = useParams() as { id: string };
  const { incrementView } = useIncrementDoctorView();

  useEffect(() => {
    if (id) {
      incrementView(id);
    }
  }, [id, incrementView]);

  const {
    data: doctor,
    isLoading: isDoctorLoading,
    error: doctorError,
  } = useDoctor(id);
  const { data: hospital, isLoading: isHospitalLoading } = useHospital(
    doctor?.hospitalId || ""
  );
  const { getDirections } = useDirections();

  const isLoading =
    isDoctorLoading || (!!doctor?.hospitalId && isHospitalLoading);
  const error = doctorError;

  if (isLoading) {
    return <DoctorProfileSkeleton />;
  }

  if (error || !doctor) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4F7F5]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1A2B3D]">
            Doctor not found
          </h2>
          <p className="mt-2 text-[#718096]">
            We couldn&apos;t find the doctor you&apos;re looking for.
          </p>
        </div>
      </div>
    );
  }

  const availabilityHours = "Available Mon-Fri, 9am - 5pm";

  const onGetDirections = () => {
    getDirections(hospital?.location?.latitude, hospital?.location?.longitude);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F5] p-4 font-sans sm:p-6 lg:p-10">
      <div className="mx-auto max-w-[1100px]">
        <Link
          href={`${
            hospital?.id && hospital?.slug
              ? `/hospitals/${hospital.id}?name=${hospital.slug}`
              : `/doctors`
          }`}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-[#4FB3AA] hover:text-[#3D8F87]"
        >
          <span>←</span> Back to Directory
        </Link>

        <div className="space-y-4 sm:space-y-6">
          {/* Top Section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
            <DoctorProfileCard
              name={doctor.fullName}
              specialty={doctor.specialization}
              imageUrl={
                doctor.profilePhotoUrl ||
                "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200"
              }
            />
            <DoctorAvailabilityCard
              availabilityStatus={doctor.status?.status || "Unavailable"}
              availabilityMessage={
                doctor.status?.expectedAtNote || "Please call for availability."
              }
            />
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
            {doctor.hospitalId && hospital && (
              <DoctorHospitalInfo
                hospital={{
                  name: hospital.name,
                  street: hospital.address?.addressLine1 || "N/A",
                  city: hospital.address?.city || "N/A",
                  district: hospital.address?.addressLine2 || "N/A",
                  state: hospital.address?.state || "N/A",
                  zipcode: hospital.address?.pincode || "N/A",
                }}
                onGetDirections={onGetDirections}
              />
            )}
            <DoctorProfessionalInfo
              specialty={doctor.designation || doctor.specialization}
              experienceYears={doctor.hasExperience ?? 0}
            />
            <DoctorContactCard
              phoneNumber={doctor.phone}
              availabilityHours={availabilityHours}
              onCallNow={() => window.open(`tel:${doctor.phone}`, "_self")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
