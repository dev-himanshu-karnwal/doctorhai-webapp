import { Button } from "@/components/ui";

export function DoctorsPageFilters() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-8">
      <Button
        variant="outline"
        className="flex h-9 items-center gap-2 rounded-full border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 3H14M4 8H12M6 13H10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        Filters
      </Button>

      <div className="flex h-9 items-center gap-2 rounded-full bg-[#E6F3F2] px-4 text-sm font-medium text-[#007664]">
        <span>Specialty: Cardiology</span>
        <button className="text-[#007664] hover:text-[#004d40]">✕</button>
      </div>

      <Button
        variant="outline"
        className="flex h-9 items-center gap-1 rounded-full border-gray-200 bg-white px-4 text-sm text-gray-700 hover:bg-gray-50"
      >
        Location <span className="text-gray-400">▾</span>
      </Button>

      <Button
        variant="outline"
        className="flex h-9 items-center gap-1 rounded-full border-gray-200 bg-white px-4 text-sm text-gray-700 hover:bg-gray-50"
      >
        Available Now <span className="text-gray-400">✓</span>
      </Button>

      <Button
        variant="outline"
        className="flex h-9 items-center gap-1 rounded-full border-gray-200 bg-white px-4 text-sm text-gray-700 hover:bg-gray-50"
      >
        Insurance <span className="text-gray-400">▾</span>
      </Button>
    </div>
  );
}
