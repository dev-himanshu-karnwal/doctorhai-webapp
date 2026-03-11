"use client";

import React, { useState } from "react";

import {
  HospitalHeader,
  HospitalDoctorList,
  UpdateAvailabilityModal,
  AddDoctorModal,
} from "./components";
import { HospitalDashboardSkeleton } from "./components/skeletons";
import { EditDoctorSlider } from "../doctor/components/EditDoctorSlider/EditDoctorSlider";
import { useUpdateDoctorProfile } from "../doctor/hooks/use-doctor-profile";
import { useAuth } from "@/modules/auth";
import { useDoctors } from "@/modules/doctors/hooks/use-doctors";
import { useDebounce } from "@/hooks/use-debounce";
import { useTimeAgo } from "@/hooks";
import { DoctorRegistrationValues } from "@/modules/auth/types/registration.types";
import { useAddDoctor } from "./hooks";
import { Doctor as UIDoctor } from "./types/hospital.types";
import { mapApiDoctorToUI } from "./utils";
import { DoctorProfileValues } from "../doctor/validators";
import { useStats } from "@/modules/stats/hooks/use-stats";

const HospitalDashboard: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  const debouncedSearch = useDebounce(searchQuery, 500);
  const hospitalId = user?.hospital?.id;

  const { data, isLoading: doctorsLoading } = useDoctors({
    hospitalId,
    search: debouncedSearch,
    page,
    limit,
  });

  const { doctorStats, isLoading: statsLoading } = useStats(hospitalId);

  const [selectedDoctor, setSelectedDoctor] = useState<UIDoctor | null>(null);
  const [editingDoctor, setEditingDoctor] = useState<UIDoctor | null>(null);
  const [isAddDoctorModalOpen, setIsAddDoctorModalOpen] = useState(false);

  const themeColor = "#4ab4a5";

  const { mutate: addDoctor, isPending: isAddingDoctor } = useAddDoctor();
  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateDoctorProfile();

  const handleAddDoctor = (values: DoctorRegistrationValues) => {
    addDoctor(values, {
      onSuccess: () => {
        setIsAddDoctorModalOpen(false);
      },
    });
  };

  const handleEditSave = (values: DoctorProfileValues) => {
    if (!editingDoctor) return;
    updateProfile(
      { id: editingDoctor.id, data: values },
      {
        onSuccess: () => {
          setEditingDoctor(null);
        },
      }
    );
  };

  // Show skeleton if auth is still loading or if we have a hospital and doctors are loading
  const showSkeleton =
    authLoading || (!!hospitalId && doctorsLoading && !data) || statsLoading;

  // Aggregate counts from the useStats hook
  const availableCount = doctorStats?.total_available || 0;
  const totalCount = doctorStats?.total_doctor_count || 0;

  // Map API doctors to UI doctors
  const uiDoctors: UIDoctor[] = (data?.doctors || []).map(mapApiDoctorToUI);

  const lastUpdated = useTimeAgo(user?.hospital?.updatedAt);

  if (showSkeleton) {
    return <HospitalDashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-6 pb-16 font-sans text-[#0f172a] sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <HospitalHeader
          hospitalName={user?.hospital?.name || "Hospital Dashboard"}
          address={
            user?.hospital?.address?.addressLine1 || "Loading address..."
          }
          availableCount={availableCount}
          totalCount={totalCount}
          themeColor={themeColor}
          lastUpdated={lastUpdated}
        />

        <HospitalDoctorList
          doctors={uiDoctors}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setPage(1);
          }}
          themeColor={themeColor}
          onUpdateDoctor={setSelectedDoctor}
          onEditDoctor={setEditingDoctor}
          currentPage={page}
          totalPages={data?.metadata?.totalPages || 1}
          onPageChange={setPage}
          isLoading={doctorsLoading}
          onAddDoctor={() => setIsAddDoctorModalOpen(true)}
        />
      </div>

      <UpdateAvailabilityModal
        isOpen={!!selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        doctor={selectedDoctor}
        themeColor={themeColor}
      />

      <EditDoctorSlider
        isOpen={!!editingDoctor}
        onClose={() => setEditingDoctor(null)}
        initialData={editingDoctor || undefined}
        onSave={handleEditSave}
        isPending={isUpdatingProfile}
      />

      <AddDoctorModal
        isOpen={isAddDoctorModalOpen}
        onClose={() => setIsAddDoctorModalOpen(false)}
        onSubmit={handleAddDoctor}
        isLoading={isAddingDoctor}
        themeColor={themeColor}
      />
    </div>
  );
};

export default HospitalDashboard;
