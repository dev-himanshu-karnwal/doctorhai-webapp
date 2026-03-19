import { Hospital } from "@/modules/hospitals/types/hospital.types";
import { HospitalCardHeader } from "./hospital-card-header";
import { HospitalCardStats } from "./hospital-card-stats";
import { HospitalCardActions } from "./hospital-card-actions";

export function HospitalCard({ h }: { h: Hospital }) {
  return (
    <div
      className="flex flex-col bg-white transition-shadow duration-200 hover:shadow-lg"
      style={{
        borderRadius: 20,
        boxShadow: "0 1px 8px 0 rgba(0,0,0,0.07)",
        border: "1px solid #F1F2F4",
      }}
    >
      <div className="flex flex-col items-center px-5 pt-4 pb-3">
        <HospitalCardHeader
          isVerified={h.isVerified}
          name={h.name}
          imageUrl={"/images/hospital.jpg"}
        />
        <HospitalCardStats name={h.name} />
      </div>
      <HospitalCardActions
        id={h.id}
        accountId={h.accountId}
        name={h.name}
        isVerified={h.isVerified}
      />
    </div>
  );
}
