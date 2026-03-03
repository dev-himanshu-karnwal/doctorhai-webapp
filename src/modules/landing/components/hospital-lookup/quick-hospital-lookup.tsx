import type {
  DepartmentCategory,
  DoctorEntry,
  HospitalEntry,
} from "../../types";
import { DepartmentsGrid, TopHospitalsList, TopDoctorsList } from "./ui";

type QuickHospitalLookupProps = {
  departments: DepartmentCategory[];
  topHospitals: HospitalEntry[];
  topDoctors: DoctorEntry[];
};

export function QuickHospitalLookup({
  departments,
  topHospitals,
  topDoctors,
}: QuickHospitalLookupProps) {
  return (
    <section className="col-span-12 flex h-auto min-h-[auto] w-full flex-col justify-between rounded-[24px] bg-[#DDF2F8] p-4 shadow-sm transition-all duration-300 sm:rounded-[32px] sm:p-6 md:rounded-[40px] md:p-8 lg:col-span-3 xl:min-h-[646px]">
      <div className="space-y-1 pb-3 sm:pb-4 md:pb-[16px]">
        <h2 className="text-[16px] leading-[22px] font-bold text-[#2D3748] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[28px]">
          Quick Hospital Lookup
        </h2>
        <p className="text-[12px] leading-[16px] font-normal text-[#718096] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
          Jump to department listings
        </p>
      </div>

      <DepartmentsGrid departments={departments} />
      <TopHospitalsList topHospitals={topHospitals} />
      <TopDoctorsList topDoctors={topDoctors} />
    </section>
  );
}
