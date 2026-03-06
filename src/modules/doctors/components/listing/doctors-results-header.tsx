export function DoctorsResultsHeader({ totalFound }: { totalFound: number }) {
  return (
    <div className="flex w-full items-center justify-between pt-4 pb-6">
      <div className="flex items-end gap-2 text-gray-800">
        <h2 className="text-xl font-bold">Search Results</h2>
        <span className="text-sm text-gray-400">({totalFound} found)</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Sort by:</span>
        <button className="flex items-center gap-1 font-medium text-[#007664] hover:text-[#004d40]">
          Relevance <span className="text-gray-400">▾</span>
        </button>
      </div>
    </div>
  );
}
