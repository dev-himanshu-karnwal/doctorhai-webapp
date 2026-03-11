"use client";

import { useState } from "react";
import { UsersIcon, SearchIcon } from "@/components/icons";
import { Button, Input } from "@/components/ui";
import { Doctor } from "@/modules/doctors/types";
import Link from "next/link";
import { DoctorTableRow } from "./DoctorTableRow";
import { DeleteModal } from "@/components/modals";
import { EditDoctorSlider } from "@/modules/dashboard/doctor/components/EditDoctorSlider/EditDoctorSlider";
import { useUpdateDoctorProfile } from "@/modules/dashboard/doctor/hooks/use-doctor-profile";
import { DoctorProfileValues } from "@/modules/dashboard/doctor/validators";
import { useDeleteAccount } from "@/modules/accounts/hooks";

interface DoctorManagementTableProps {
  doctors: Doctor[];
  isLoading: boolean;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  hospitalId: string;
}

export function DoctorManagementTable({
  doctors,
  isLoading,
  searchQuery,
  onSearchChange,
  hospitalId,
}: DoctorManagementTableProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const handleEdit = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setIsEditOpen(true);
  };

  const handleDelete = (doc: Doctor) => {
    setSelectedDoctor(doc);
    setIsDeleteOpen(true);
  };

  const handleClose = () => {
    setIsEditOpen(false);
    setIsDeleteOpen(false);
    setSelectedDoctor(null);
  };

  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateDoctorProfile();
  const { mutate: deleteAccount, isPending: isDeletingAccount } =
    useDeleteAccount();

  const handleSave = (data: DoctorProfileValues) => {
    if (selectedDoctor) {
      updateProfile(
        { id: selectedDoctor.id, data },
        {
          onSuccess: () => handleClose(),
        }
      );
    }
  };
  return (
    <div
      className="bg-white p-7"
      style={{
        borderRadius: 20,
        boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <UsersIcon size={20} className="h-5 w-5 text-[#0f766e]" />
          <h2 className="text-[18px] font-bold text-[#0f172a]">
            Doctor Management
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <SearchIcon
              size={16}
              className="absolute top-1/2 left-3 z-10 h-4 w-4 -translate-y-1/2 text-[#94a3b8]"
            />
            <Input
              placeholder="Search doctors..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-[#e2e8f0] bg-white pl-9 text-gray-700 placeholder-[#94a3b8] focus:ring-emerald-200"
            />
          </div>
        </div>
      </div>

      <div className="no-scrollbar flex flex-col overflow-x-auto rounded-[16px] border border-[#f1f5f9]">
        <div className="min-w-[500px]">
          <div
            className="grid grid-cols-[1fr_100px_80px] gap-4 border-b border-[#f1f5f9] bg-white px-6 py-4 font-bold text-[#64748b] uppercase"
            style={{ fontSize: "10.5px", letterSpacing: "0.06em" }}
          >
            <span>Name & Specialty</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          <div className="flex min-h-[100px] flex-col bg-white">
            {isLoading ? (
              <div className="flex items-center justify-center py-10">
                <p className="text-sm text-gray-400">Loading doctors...</p>
              </div>
            ) : doctors.length === 0 ? (
              <div className="flex items-center justify-center py-10">
                <p className="text-sm text-gray-400">No doctors found.</p>
              </div>
            ) : (
              doctors.map((doc) => (
                <DoctorTableRow
                  key={doc.id}
                  doc={doc}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {doctors.length > 0 && (
        <div className="mt-6 text-center">
          <Link href={`/dashboard/admin/doctors?hospitalId=${hospitalId}`}>
            <Button
              variant="ghost"
              className="text-[13px] font-bold text-[#64748b] hover:text-[#0f172a]"
            >
              View All Doctors
            </Button>
          </Link>
        </div>
      )}

      <EditDoctorSlider
        isOpen={isEditOpen}
        onClose={handleClose}
        initialData={
          selectedDoctor
            ? {
                fullName: selectedDoctor.fullName,
                designation: selectedDoctor.designation || "",
                specialization: selectedDoctor.specialization || "",
                hasExperience: selectedDoctor.hasExperience
                  ? String(selectedDoctor.hasExperience)
                  : "0", // Mismatch fix
                bio: selectedDoctor.bio || "",
              }
            : undefined
        }
        onSave={handleSave}
        isPending={isUpdatingProfile}
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={handleClose}
        onConfirm={() => {
          const targetId = selectedDoctor?.accountId;
          if (targetId) {
            deleteAccount(targetId, {
              onSuccess: handleClose,
            });
          } else {
            handleClose();
          }
        }}
        name={selectedDoctor?.fullName || "this doctor"}
        isVerified={true}
        loading={isDeletingAccount}
      />
    </div>
  );
}
