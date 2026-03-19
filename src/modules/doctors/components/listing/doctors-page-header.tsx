import { Input, Button } from "@/components/ui";

interface DoctorsPageHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isLoading?: boolean;
}

export function DoctorsPageHeader({
  searchQuery,
  onSearchChange,
  isLoading,
}: DoctorsPageHeaderProps) {
  return (
    <div className="flex w-full items-center justify-center pt-8 pb-4">
      <div className="relative flex w-full max-w-[600px] items-center rounded-full border border-gray-200 bg-white p-1.5 shadow-sm">
        <div className="flex pr-2 pl-4">
          <svg
            className="h-5 w-5 text-[#4FB3AA]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Input
          type="text"
          placeholder="Cardiologist, Clinic, etc..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 border-0 bg-transparent px-2 text-base shadow-none focus-visible:ring-0"
        />
        <Button
          className="h-10 rounded-full bg-[#4FB3AA] px-8 font-medium text-white hover:bg-[#3D8F87]"
          disabled={isLoading}
        >
          {isLoading ? "..." : "Search"}
        </Button>
      </div>
    </div>
  );
}
