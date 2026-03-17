"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ProfileHeader,
  IdentityDetails,
  ContactLocation,
  ActionBar,
  DetailsSkeleton,
} from "./components";
import { ApproveModal } from "@/components/modals";
import { useVerifyAccount } from "@/modules/accounts/hooks";
import { useDoctor } from "@/modules/doctors/hooks/use-doctor";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  doctorProfileSchema,
  type DoctorProfileValues,
  type DoctorProfileBaseValues,
} from "@/modules/dashboard/doctor/validators";
import { useUpdateDoctorProfile } from "@/modules/dashboard/doctor/hooks/use-doctor-profile";
import {
  useAddress,
  useUpdateAddress,
} from "@/modules/address/hooks/use-address";

interface DoctorDetailsViewProps {
  id: string;
  initialIsVerified?: boolean;
}

export default function DoctorDetailsView({
  id,
  initialIsVerified,
}: DoctorDetailsViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isVerifiedState, setIsVerifiedState] = useState(
    initialIsVerified ?? false
  );

  const { data: doctorData, isLoading: isFetchingDoctor } = useDoctor(id);
  const { data: addressData, isLoading: isFetchingAddress } = useAddress(
    doctorData?.addressId
  );
  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateDoctorProfile({ showToast: false });
  const { mutate: updateAddress, isPending: isUpdatingAddress } =
    useUpdateAddress();
  const { mutate: verifyAccount, isPending: isVerifying } = useVerifyAccount();

  useEffect(() => {
    if (doctorData) {
      setIsVerifiedState(doctorData.isVerified);
    }
  }, [doctorData]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<DoctorProfileValues>({
    resolver: zodResolver(doctorProfileSchema) as Resolver<DoctorProfileValues>,
  });

  useEffect(() => {
    if (doctorData) {
      // Use nested address if available, fallback to separate fetch
      const src = doctorData.address || addressData;

      reset({
        fullName: doctorData.fullName || "",
        designation: doctorData.designation || "",
        specialization: doctorData.specialization || "",
        hasExperience:
          doctorData.hasExperience !== null
            ? String(doctorData.hasExperience)
            : "",
        bio: doctorData.bio || "",
        addressLine1: src?.addressLine1 || "",
        addressLine2: src?.addressLine2 || "",
        city: src?.city || "",
        state: src?.state || "",
        pincode: src?.pincode || "",
        latitude: src?.latitude ?? null,
        longitude: src?.longitude ?? null,
      });
    }
  }, [doctorData, addressData, reset]);

  const onSubmit = (values: DoctorProfileValues) => {
    let completed = 0;
    const total = 2;
    const onSubSuccess = () => {
      completed++;
      if (completed === total) {
        import("sonner").then(({ toast }) =>
          toast.success("Profile updated successfully!")
        );
      }
    };

    updateProfile(
      {
        id,
        data: {
          fullName: values.fullName,
          designation: values.designation,
          specialization: values.specialization,
          hasExperience: values.hasExperience,
          bio: values.bio,
        } as DoctorProfileBaseValues,
      },
      { onSuccess: onSubSuccess }
    );

    const addressPayload = {
      addressLine1: values.addressLine1,
      addressLine2: values.addressLine2,
      city: values.city,
      state: values.state,
      pincode: values.pincode,
      latitude:
        values.latitude !== undefined && values.latitude !== null
          ? Number(values.latitude)
          : null,
      longitude:
        values.longitude !== undefined && values.longitude !== null
          ? Number(values.longitude)
          : null,
    };

    if (doctorData?.accountId) {
      updateAddress(
        {
          accountId: doctorData.accountId,
          data: addressPayload,
        },
        { onSuccess: onSubSuccess }
      );
    } else {
      onSubSuccess();
    }
  };

  // Wait for address if id exists, but data isn't nested already
  const isAddressPending =
    !!doctorData?.addressId && !doctorData.address && isFetchingAddress;

  if (isFetchingDoctor || isAddressPending) {
    return <DetailsSkeleton />;
  }

  const isPending = isUpdatingProfile || isUpdatingAddress;

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
            isVerified={isVerifiedState}
            onApprove={() => setIsApproveModalOpen(true)}
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
      <ApproveModal
        isOpen={isApproveModalOpen}
        onClose={() => setIsApproveModalOpen(false)}
        onConfirm={() => {
          if (doctorData?.accountId) {
            verifyAccount(
              { id: doctorData.accountId, payload: { isVerified: true } },
              {
                onSuccess: () => {
                  setIsApproveModalOpen(false);
                  setIsVerifiedState(true);
                  router.push(`${pathname}?verified=true`, { scroll: false });
                },
              }
            );
          }
        }}
        name={doctorData?.fullName || "this doctor"}
        loading={isVerifying}
      />
    </form>
  );
}
