export function HospitalManagementStatsSkeleton() {
  return (
    <div
      className="flex w-full flex-shrink-0 animate-pulse flex-col justify-between bg-white lg:w-[384px]"
      style={{
        minHeight: 186,
        borderRadius: 24,
        border: "1px solid #F1F2F4",
        boxShadow: "0px 4px 24px -4px rgba(0,0,0,0.04)",
        padding: "20px 24px",
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex items-center justify-center bg-gray-100"
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
          }}
        />
        <div className="h-6 w-24 rounded-full bg-gray-50 px-3 py-[6px]" />
      </div>
      <div>
        <div className="mb-2 h-4 w-40 rounded bg-gray-50" />
        <div className="h-10 w-20 rounded bg-gray-100" />
      </div>
    </div>
  );
}
