"use client";
import { useState } from "react";
import { Button } from "@/components/ui";
import { PencilIcon, EyeIcon, TrashIcon } from "../icons";
import { DoctorAvatar } from "./doctor-avatar";
import type { Doctor } from "@/modules/doctors/types";
import { getStatusBadge } from "@/modules/dashboard/hospital/utils/status.utils";
import { StatusKind } from "@/types/common.types";
import { DeleteModal } from "@/components/modals/delete-modal";
import { useDeleteAccount } from "@/modules/accounts/hooks/use-delete-account";
import UpdateAvailabilityModal from "@/modules/dashboard/hospital/components/UpdateAvailabilityModal/UpdateAvailabilityModal";
import type { Doctor as HospitalDoctor } from "@/modules/dashboard/hospital/types/hospital.types";

interface DoctorCardProps {
  doc: Doctor;
}

export function DoctorCard({ doc }: DoctorCardProps) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const { mutate: deleteAccount, isPending } = useDeleteAccount();

  const status = (doc.status?.status || "off_duty") as StatusKind;
  const statusConfig = getStatusBadge(status);
  const speciality = doc.specialization || doc.designation || "N/A";
  const experience = doc.hasExperience
    ? isNaN(Number(doc.hasExperience))
      ? doc.hasExperience
      : `${doc.hasExperience} Years Experience`
    : "N/A";

  // Map doc to the format expected by UpdateAvailabilityModal
  const hospitalDocFormat: HospitalDoctor = {
    id: doc.id,
    name: doc.fullName,
    fullName: doc.fullName,
    avatar: doc.profilePhotoUrl || "",
    rawStatus: status,
    expectedAt: doc.status?.expectedAt,
    expectedAtNote: doc.status?.expectedAtNote,
    designation: doc.designation || "",
    specialization: doc.specialization || "",
    hasExperience: doc.hasExperience || "",
    bio: doc.bio || "",
    subtext: speciality,
    statusBadge: statusConfig,
    col1: { label: "Experience", value: experience },
    col2: { label: "Designation", value: speciality },
  };

  const handleDelete = () => {
    if (doc.accountId) {
      deleteAccount(doc.accountId, {
        onSuccess: () => setShowDeleteModal(false),
      });
    }
  };

  return (
    <>
      <div
        className="flex flex-col bg-white transition-shadow duration-200 hover:shadow-md"
        style={{
          borderRadius: 18,
          border: "1px solid #F1F2F4",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
        }}
      >
        <div className="flex flex-col items-center px-4 pt-4 pb-3">
          {/* Status dot */}
          <div className="mb-2 flex w-full justify-end">
            <span
              className="h-[9px] w-[9px] flex-shrink-0 rounded-full"
              style={{ background: statusConfig.dotColor }}
            />
          </div>

          {/* Avatar */}
          <div className="mb-3">
            <DoctorAvatar
              profilePhotoUrl={doc.profilePhotoUrl}
              name={doc.fullName}
              grayscale={status === "off_duty"}
            />
          </div>

          {/* Name */}
          <h3
            className="mb-0.5 line-clamp-1 text-center leading-tight font-bold text-gray-900"
            style={{ fontSize: 14.5 }}
          >
            {doc.fullName}
          </h3>

          {/* speciality */}
          <p
            className="mb-1 line-clamp-1 text-center font-semibold text-[#0D9488]"
            style={{ fontSize: 12 }}
          >
            {speciality}
          </p>

          {/* Experience */}
          <p className="text-center text-gray-400" style={{ fontSize: 11 }}>
            {experience}
          </p>

          {/* Status Message */}
          {doc.status?.expectedAtNote && (
            <p
              className="mt-1 line-clamp-2 text-center font-medium text-gray-500 italic"
              style={{ fontSize: 10, maxWidth: "180px" }}
            >
              &quot;{doc.status.expectedAtNote}&quot;
            </p>
          )}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #F3F4F6" }} />

        {/* Action buttons */}
        <div className="grid grid-cols-3 divide-x divide-gray-100">
          <Button
            variant="ghost"
            href={`/dashboard/admin/doctors/${doc.id}`}
            className="flex h-auto flex-col items-center gap-1 py-2.5 hover:bg-gray-50"
            style={{ borderRadius: "0 0 0 18px" }}
          >
            <PencilIcon className="h-[13px] w-[13px] text-gray-400" />
            <span
              className="font-medium text-gray-500"
              style={{ fontSize: 10.5 }}
            >
              Edit
            </span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowStatusModal(true)}
            className="flex h-auto flex-col items-center gap-1 py-2.5 hover:bg-gray-50"
            style={{ borderRadius: 0 }}
          >
            <EyeIcon className="h-[13px] w-[13px] text-gray-400" />
            <span
              className="font-medium text-gray-500"
              style={{ fontSize: 10.5 }}
            >
              Status
            </span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setShowDeleteModal(true)}
            className="flex h-auto flex-col items-center gap-1 py-2.5 hover:bg-red-50"
            style={{ borderRadius: "0 0 18px 0" }}
          >
            <TrashIcon className="h-[13px] w-[13px] text-gray-400" />
            <span
              className="font-medium text-gray-500"
              style={{ fontSize: 10.5 }}
            >
              Delete
            </span>
          </Button>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        name={doc.fullName}
        isVerified={true}
        loading={isPending}
      />

      <UpdateAvailabilityModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        doctor={hospitalDocFormat}
        themeColor="#0D9488"
      />
    </>
  );
}
