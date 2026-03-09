import { Button } from "@/components/ui/button";
import { statusOptions } from "../../data";
import type { DoctorStatusOptionsProps } from "../../types";

interface ExtendedProps extends DoctorStatusOptionsProps {
  doctorId?: string;
}

export const DoctorStatusOptions = ({
  currentStatus,
  setCurrentStatus,
}: ExtendedProps) => {
  const handleStatusUpdate = (statusId: string) => {
    if (statusId === currentStatus) return;
    setCurrentStatus(statusId);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:max-w-[720px]">
      {statusOptions.map((status) => (
        <Button
          key={status.id}
          variant="ghost"
          onClick={() => handleStatusUpdate(status.id)}
          className={`group relative flex h-auto flex-col items-center justify-center gap-3 overflow-hidden rounded-[32px] p-7 transition-all active:scale-[0.98] sm:rounded-[40px] sm:p-10 ${
            currentStatus === status.id
              ? "shadow-[0_12px_40px_-10px_rgba(0,0,0,0.08)]"
              : "bg-white shadow-[0_8px_30px_-5px_rgba(0,0,0,0.02)] hover:bg-white hover:shadow-md"
          }`}
          style={
            currentStatus === status.id
              ? { backgroundColor: status.iconBg }
              : undefined
          }
        >
          {currentStatus === status.id && (
            <div
              className="absolute top-5 right-5 h-2 w-2 rounded-full sm:top-6 sm:right-6"
              style={{ backgroundColor: status.iconColor }}
            />
          )}

          <div
            className="flex h-[48px] w-[48px] items-center justify-center rounded-[20px] transition-transform duration-300 group-hover:scale-110 sm:h-[56px] sm:w-[56px] sm:rounded-[24px]"
            style={{
              backgroundColor: status.iconBg,
              color: status.iconColor,
            }}
          >
            {status.icon}
          </div>

          <div className="text-center">
            <h3 className="text-[16px] font-bold text-[#0f172a] sm:text-[18px]">
              {status.title}
            </h3>
            <p className="mt-0.5 text-[12.5px] font-medium text-[#94a3b8] sm:text-[14px]">
              {status.subtext}
            </p>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default DoctorStatusOptions;
