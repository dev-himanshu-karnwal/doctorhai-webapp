import { HospitalCardSkeleton } from "./hospital-card-skeleton";

export function HospitalManagementSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <HospitalCardSkeleton key={i} />
      ))}
    </div>
  );
}
