import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { UpdateAvailabilityModalProps } from "../../types/hospital.types";
import { Button, Input } from "@/components/ui";
import { XIcon, SaveIcon } from "@/components/icons";
import { useUpdateDoctorStatus } from "../../../doctor/hooks/use-doctor-status";
import {
  quickReturnSchema,
  QuickReturnValues,
} from "../../../doctor/validators/quick-return.validator";
import { statusOptions } from "../../../doctor/data/doctor.data";
import { DoctorStatusUpdateData } from "../../../doctor/types";
import { calculateExpectedAtISO } from "../../../doctor/utils/status.utils";

const UpdateAvailabilityModal: React.FC<UpdateAvailabilityModalProps> = ({
  isOpen,
  onClose,
  doctor,
  themeColor,
}) => {
  const { mutate: updateStatus, isPending } = useUpdateDoctorStatus();

  const form = useForm<QuickReturnValues>({
    resolver: zodResolver(quickReturnSchema),
    defaultValues: {
      status: "off_duty",
      expectedAt: "",
      expectedAtNote: "",
    },
  });

  const {
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = form;

  const currentStatus = useWatch({ control, name: "status" });
  const expectedAtWatch = useWatch({ control, name: "expectedAt" });

  useEffect(() => {
    if (isOpen && doctor) {
      // Map existing status or default to off_duty
      const initialStatus =
        (doctor.rawStatus as QuickReturnValues["status"]) ||
        (doctor.statusBadge?.text
          ?.toLowerCase()
          .replace(" ", "_") as QuickReturnValues["status"]) ||
        "off_duty";

      reset({
        status: initialStatus,
        expectedAt: doctor.expectedAt || "",
        expectedAtNote: doctor.expectedAtNote || "",
      });
    }
  }, [isOpen, doctor, reset]);

  const onSubmit = (data: QuickReturnValues) => {
    if (!doctor?.id) {
      toast.error("Doctor not found.");
      return;
    }

    const expectedAtISO =
      data.status === "back_soon" || data.status === "busy"
        ? calculateExpectedAtISO(data.expectedAt)
        : null;
    const expectedAtNote = data.expectedAtNote?.trim() || null;

    const updateData: DoctorStatusUpdateData = {
      status: data.status,
      expectedAtNote,
    };

    if (expectedAtISO) {
      updateData.expectedAt = expectedAtISO;
    }

    updateStatus(
      {
        id: doctor.id,
        data: updateData,
      },
      {
        onSuccess: () => {
          reset();
          onClose();
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 max-h-[90vh] w-[min(calc(100vw-2rem),520px)] overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="text-[19px] font-bold tracking-tight text-[#1e293b]">
              Update Status
            </h3>
            <p className="mt-[2px] text-[13.5px] font-medium text-[#64748b]">
              Update current availability for{" "}
              <span className="font-bold text-[#0f172a]">{doctor?.name}</span>
            </p>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            className="h-auto rounded-full p-2 text-[#94a3b8] transition-colors hover:bg-[#f1f5f9] hover:text-[#475569]"
          >
            <XIcon className="h-[20px] w-[20px]" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Status Grid */}
          <div className="mb-6">
            <p className="mb-3 text-[10.5px] font-extrabold tracking-widest text-[#94a3b8] uppercase">
              SELECT NEW STATUS
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {statusOptions.map((option) => (
                <Button
                  key={option.id}
                  type="button"
                  variant="ghost"
                  onClick={() =>
                    setValue(
                      "status",
                      option.id as QuickReturnValues["status"],
                      { shouldValidate: true }
                    )
                  }
                  className={`flex h-auto flex-col items-center justify-center gap-2.5 rounded-[20px] p-5 transition-all hover:shadow-sm active:scale-95 ${
                    currentStatus === option.id
                      ? `border-2 bg-white ring-2 ring-offset-1`
                      : "border border-[#f1f5f9] bg-white"
                  }`}
                  style={{
                    borderColor:
                      currentStatus === option.id
                        ? option.iconColor
                        : "#f1f5f9",
                    boxShadow:
                      currentStatus === option.id
                        ? `0 4px 12px ${option.iconColor}40`
                        : "none",
                  }}
                >
                  <div
                    className="flex h-[40px] w-[40px] items-center justify-center rounded-full"
                    style={{
                      backgroundColor: option.iconBg,
                      color: option.iconColor,
                    }}
                  >
                    {option.icon}
                  </div>
                  <span
                    className="text-[12px] font-extrabold tracking-wider uppercase"
                    style={{
                      color:
                        currentStatus === option.id
                          ? option.iconColor
                          : "#475569",
                    }}
                  >
                    {option.title}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          {(currentStatus === "back_soon" || currentStatus === "busy") && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              {/* Quick Return Times */}
              <div className="mb-6">
                <p className="mb-3 text-[10.5px] font-extrabold tracking-widest text-[#94a3b8] uppercase">
                  QUICK RETURN TIMES
                </p>
                <div className="grid grid-cols-4 gap-2.5">
                  {["5m", "10m", "15m", "30m"].map((time) => (
                    <Button
                      key={time}
                      type="button"
                      variant="ghost"
                      onClick={() => setValue("expectedAt", time)}
                      className={`h-auto rounded-[14px] py-2.5 text-[12.5px] font-bold transition-all active:scale-95 ${
                        expectedAtWatch === time
                          ? "bg-[#eff6ff] text-[#3b82f6] ring-1 ring-[#3b82f6]/20"
                          : "bg-[#f8fafc] text-[#64748b] hover:bg-[#eff6ff] hover:text-[#3b82f6]"
                      }`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
                {errors.expectedAt && (
                  <p className="mt-2 text-[11px] font-medium text-red-500">
                    {errors.expectedAt.message}
                  </p>
                )}
              </div>

              {/* Availability Note */}
              <div className="mb-8">
                <p className="mb-3 text-[10.5px] font-extrabold tracking-widest text-[#94a3b8] uppercase">
                  AVAILABILITY NOTE (OPTIONAL)
                </p>
                <div className="relative">
                  <Input
                    {...form.register("expectedAtNote")}
                    placeholder={`e.g., Back in ${expectedAtWatch || "15m"}, please wait.`}
                    className="h-11 rounded-[16px] border-[#e2e8f0] bg-[#f8fafc] px-4 text-[13.5px] text-[#0f172a] shadow-sm transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-[#3b82f6]/20"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Actions Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-[#f1f5f9] pt-6">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-auto rounded-full px-8 py-5 text-[14px] font-bold text-[#64748b] transition-all hover:bg-[#f1f5f9] hover:text-[#1e293b] active:scale-95"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="h-auto rounded-full px-7 py-5 font-bold text-white shadow-md transition-all active:scale-95"
              style={{ backgroundColor: themeColor }}
            >
              <SaveIcon className="mr-2 h-[18px] w-[18px]" />
              {isPending ? "Updating..." : "Update Status"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAvailabilityModal;
