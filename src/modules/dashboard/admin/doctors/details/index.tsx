"use client";

import { useEffect } from "react";
import {
  ProfileHeader,
  IdentityDetails,
  ContactLocation,
  ActionBar,
  DetailsSkeleton,
} from "./components";
import { useDoctor } from "@/modules/doctors/hooks/use-doctor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  doctorProfileSchema,
  type DoctorProfileValues,
} from "@/modules/dashboard/doctor/validators";
import { useUpdateDoctorProfile } from "@/modules/dashboard/doctor/hooks/use-doctor-profile";
import {
  useAddress,
  useUpdateAddress,
  useCreateAddress,
} from "@/modules/address/hooks/use-address";

interface DoctorDetailsViewProps {
  id: string;
}

export default function DoctorDetailsView({ id }: DoctorDetailsViewProps) {
  const { data: doctorData, isLoading: isFetchingDoctor } = useDoctor(id);
  const { data: addressData, isLoading: isFetchingAddress } = useAddress(
    doctorData?.addressId
  );

  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateDoctorProfile();
  const { mutate: updateAddress, isPending: isUpdatingAddress } =
    useUpdateAddress();
  const { mutate: createAddress, isPending: isCreatingAddress } =
    useCreateAddress();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorProfileValues>({
    resolver: zodResolver(doctorProfileSchema),
  });

  useEffect(() => {
    if (doctorData) {
      reset({
        fullName: doctorData.fullName || "",
        designation: doctorData.designation || "",
        specialization: doctorData.specialization || "",
        hasExperience:
          doctorData.hasExperience !== null
            ? String(doctorData.hasExperience)
            : "",
        bio: doctorData.bio || "",
        addressLine1: addressData?.addressLine1 || "",
        addressLine2: addressData?.addressLine2 || "",
        city: addressData?.city || "",
        state: addressData?.state || "",
        pincode: addressData?.pincode || "",
      });
    }
  }, [doctorData, addressData, reset]);

  const onSubmit = (values: DoctorProfileValues) => {
    updateProfile({
      id,
      data: {
        fullName: values.fullName,
        designation: values.designation,
        specialization: values.specialization,
        hasExperience: values.hasExperience,
        bio: values.bio,
      } as DoctorProfileValues,
    });

    const addressPayload = {
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
    };

    if (doctorData?.addressId) {
      updateAddress({
        accountId: doctorData.accountId || "",
        data: addressPayload,
      });
    } else if (doctorData?.accountId) {
      // POST — create address for this account
      createAddress({
        accountId: doctorData.accountId,
        data: addressPayload,
      });
    }
  };

  if (isFetchingDoctor || isFetchingAddress) {
    return <DetailsSkeleton />;
  }

  const isPending = isUpdatingProfile || isUpdatingAddress || isCreatingAddress;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen bg-[#f4f7f9] pt-6 pb-12 font-sans"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* TOP CARD */}
        <div
          className="mb-6 shrink-0 bg-white"
          style={{
            borderRadius: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
            border: "1px solid #f1f5f9",
          }}
        >
          <ProfileHeader
            name={`Dr. ${doctorData?.fullName || ""}`}
            designation={doctorData?.designation || ""}
            specialization={doctorData?.specialization || ""}
            status={doctorData?.status}
          />
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="mb-6 flex flex-col gap-6 lg:flex-row">
          {/* COLUMN 1: Identity */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <IdentityDetails register={register} errors={errors} />
          </div>

          {/* COLUMN 2: Contact & Location */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <ContactLocation register={register} />
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <ActionBar
          isLoading={isPending}
          doctorName={doctorData?.fullName}
          accountId={doctorData?.accountId}
        />
      </div>
    </form>
  );
}
