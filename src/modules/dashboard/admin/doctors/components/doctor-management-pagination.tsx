import { Button } from "@/components/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

interface DoctorManagementPaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages?: number;
}

export function DoctorManagementPagination({
  page,
  setPage,
  totalPages = 1,
}: DoctorManagementPaginationProps) {
  // Logic to show a few pages around current page
  const getVisiblePages = () => {
    const range = [];
    const maxVisible = 3;
    let start = Math.max(1, page - 1);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
      <Button
        variant="secondary"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="h-10 w-10 border-[#E2E8F0] bg-white p-0 sm:h-11 sm:w-11"
        style={{ borderRadius: 12 }}
      >
        <ChevronLeftIcon className="h-[18px] w-[18px] text-gray-500" />
      </Button>

      {visiblePages.map((p) => (
        <Button
          key={p}
          variant={page === p ? "primary" : "secondary"}
          onClick={() => setPage(p)}
          className={`h-10 w-10 p-0 font-semibold sm:h-11 sm:w-11 ${
            page === p
              ? "bg-[#3B82F6]"
              : "border-[#E2E8F0] bg-white text-[#374151]"
          }`}
          style={{
            fontSize: 14,
            borderRadius: 12,
            boxShadow: page === p ? "0 2px 8px rgba(59,130,246,0.25)" : "none",
          }}
        >
          {p}
        </Button>
      ))}

      {totalPages > visiblePages[visiblePages.length - 1] && (
        <>
          <span className="flex h-10 w-10 items-center justify-center font-medium text-gray-400 sm:h-11 sm:w-11">
            ...
          </span>
          <Button
            variant="secondary"
            onClick={() => setPage(totalPages)}
            className="h-10 w-10 border-[#E2E8F0] bg-white p-0 font-semibold text-[#374151] sm:h-11 sm:w-11"
            style={{ fontSize: 14, borderRadius: 12 }}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="secondary"
        onClick={() => setPage(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="h-10 w-10 border-[#E2E8F0] bg-white p-0 sm:h-11 sm:w-11"
        style={{ borderRadius: 12 }}
      >
        <ChevronRightIcon className="h-[18px] w-[18px] text-gray-500" />
      </Button>
    </div>
  );
}
