import React from "react";
import { HospitalDoctorListProps } from "../../types/hospital.types";
import { UsersIcon } from "@/components/icons";
import HospitalDoctorCard from "../HospitalDoctorCard";
import DoctorListHeader from "./DoctorListHeader";
import DoctorListPagination from "./DoctorListPagination";

const HospitalDoctorList: React.FC<HospitalDoctorListProps> = ({
  doctors,
  searchQuery,
  onSearchChange,
  themeColor,
  onUpdateDoctor,
  onEditDoctor,
  currentPage,
  totalPages,
  onPageChange,
  isLoading,
  onAddDoctor,
}) => {
  return (
    <div
      className="relative bg-white px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-10"
      style={{
        borderRadius: 32,
        boxShadow: "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[32px] bg-white/60 backdrop-blur-[1px]">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#e2e8f0] border-t-[#4ab4a5]" />
        </div>
      )}

      <DoctorListHeader
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        themeColor={themeColor}
        onAddDoctor={onAddDoctor}
      />

      <div className="flex min-h-[400px] flex-col gap-4">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <HospitalDoctorCard
              key={doctor.name + index}
              doctor={doctor}
              themeColor={themeColor}
              onUpdate={onUpdateDoctor}
              onEdit={onEditDoctor}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-[#64748b]">
            <UsersIcon className="mb-4 h-12 w-12 opacity-20" />
            <p className="text-[15px] font-medium">
              No doctors found matching your criteria
            </p>
          </div>
        )}
      </div>

      <DoctorListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        themeColor={themeColor}
      />
    </div>
  );
};

export default HospitalDoctorList;
