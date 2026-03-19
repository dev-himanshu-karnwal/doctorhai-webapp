"use client";

import { useState } from "react";
import { HospitalDetailHeader } from "./hospital-detail-header";
import { HospitalStatsRow } from "./hospital-stats-row";
import { HospitalConfigForm } from "./hospital-config-form";
import { DoctorManagementTable } from "./doctor-management-table";
import { useHospital } from "@/modules/hospitals/hooks/use-hospital";
import { useStats } from "@/modules/stats/hooks/use-stats";
import { useDoctorsListing } from "@/modules/doctors/hooks/use-doctors-listing";
import { useHospitalDetailForm } from "../../hooks";
import { DangerZone } from "./DangerZone";
import {
  HeaderSkeleton,
  StatsSkeleton,
  ConfigFormSkeleton,
  TableSkeleton,
} from "./skeleton";
import { DeleteModal, ApproveModal } from "@/components/modals";
import { useVerifyAccount, useDeleteAccount } from "@/modules/accounts/hooks";
import { usePathname, useRouter } from "next/navigation";

interface HospitalDetailViewProps {
  hospitalId: string;
  initialIsVerified: boolean;
}

export function HospitalDetailView({
  hospitalId,
  initialIsVerified,
}: HospitalDetailViewProps) {
  console.log(initialIsVerified);
  const router = useRouter();
  const pathname = usePathname();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isApproveModalOpen, setIsApproveModalOpen] = useState(false);
  const [isVerifiedState, setIsVerifiedState] = useState(initialIsVerified);

  const { data: hospital, isLoading: isHospitalLoading } =
    useHospital(hospitalId);
  const { mutate: verifyAccount, isPending: isVerifying } = useVerifyAccount();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();

  const { doctorStats, isLoading: isStatsLoading } = useStats(hospitalId);
  const {
    items: doctors,
    isLoading: isDoctorsLoading,
    searchQuery,
    handleSearch,
    hasMore,
    loadMore,
  } = useDoctorsListing({ initialSearch: "", hospitalId });

  const { hospitalForm, addressForm, onSubmit, isUpdating } =
    useHospitalDetailForm({
      hospital,
    });

  const isLoading = isHospitalLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f1fcf8] px-4 pt-6 pb-12 font-sans sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <HeaderSkeleton />
          <StatsSkeleton />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_310px]">
            <div className="flex flex-col gap-6">
              <ConfigFormSkeleton />
              <TableSkeleton />
            </div>
            <aside className="hidden lg:block">
              <div className="h-48 w-full animate-pulse rounded-2xl bg-white" />
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1fcf8] pt-6 pb-12 font-sans">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <HospitalDetailHeader
          hospital={hospital}
          isLoading={isHospitalLoading}
          isVerified={isVerifiedState}
          onApprove={() => setIsApproveModalOpen(true)}
          onReject={() => setIsDeleteModalOpen(true)}
        />
        <HospitalStatsRow
          stats={doctorStats}
          isLoading={isStatsLoading}
          public_view_count={hospital?.public_view_count}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_310px]">
          <div className="flex flex-col gap-6">
            <HospitalConfigForm
              isLoading={isLoading}
              hospitalForm={hospitalForm}
              addressForm={addressForm}
              onSubmit={onSubmit}
              isUpdating={isUpdating}
            />
            <DoctorManagementTable
              doctors={doctors}
              isLoading={isDoctorsLoading}
              searchQuery={searchQuery}
              onSearchChange={handleSearch}
              hasMore={hasMore}
              onLoadMore={loadMore}
            />
          </div>
          <DangerZone onDelete={() => setIsDeleteModalOpen(true)} />
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          if (hospital?.accountId) {
            deleteAccount(hospital.accountId, {
              onSuccess: () => {
                setIsDeleteModalOpen(false);
                import("sonner").then(({ toast }) =>
                  toast.success("Account rejected successfully")
                );
                router.push("/dashboard/admin");
              },
            });
          }
        }}
        name={hospital?.name || "this hospital"}
        isVerified={isVerifiedState}
        loading={isDeleting}
      />

      <ApproveModal
        isOpen={isApproveModalOpen}
        onClose={() => setIsApproveModalOpen(false)}
        onConfirm={() => {
          if (hospital?.accountId) {
            verifyAccount(
              { id: hospital.accountId, payload: { isVerified: true } },
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
        name={hospital?.name || "this hospital"}
        loading={isVerifying}
      />
    </div>
  );
}
