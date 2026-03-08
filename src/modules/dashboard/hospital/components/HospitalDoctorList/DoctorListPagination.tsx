import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "../HospitalIcons";
import { Button } from "@/components/ui";

interface DoctorListPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  themeColor: string;
}

const DoctorListPagination: React.FC<DoctorListPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  themeColor,
}) => {
  if (totalPages < 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
      <Button
        variant="outline"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border-[#e2e8f0] p-0 text-[#94a3b8] transition-all hover:bg-[#f1f5f9] active:scale-95 disabled:opacity-50"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          let pageNum = i + 1;
          if (totalPages > 5) {
            if (currentPage > 3) pageNum = currentPage - 2 + i;
            if (pageNum > totalPages) pageNum = totalPages - (4 - i);
            if (pageNum < 1) pageNum = i + 1;
          }

          if (pageNum > totalPages) return null;

          const isActive = currentPage === pageNum;

          return (
            <Button
              key={pageNum}
              variant={isActive ? "primary" : "outline"}
              onClick={() => onPageChange(pageNum)}
              className={`flex h-10 w-10 items-center justify-center rounded-full p-0 font-bold transition-all active:scale-95 ${
                isActive
                  ? "border-none text-white shadow-md"
                  : "border-[#e2e8f0] text-[#64748b] hover:bg-[#f1f5f9]"
              }`}
              style={
                isActive
                  ? { backgroundColor: themeColor, fontSize: 14 }
                  : { fontSize: 14 }
              }
            >
              {pageNum}
            </Button>
          );
        })}
      </div>
      <Button
        variant="outline"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-full border-[#e2e8f0] p-0 text-[#94a3b8] transition-all hover:bg-[#f1f5f9] active:scale-95 disabled:opacity-50"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default DoctorListPagination;
