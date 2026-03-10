import { Controller, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { TimerIcon } from "@/components/icons";
import { useUpdateDoctorStatus } from "../../hooks";
import { QuickReturnValues } from "../../validators";
import { calculateExpectedAtISO } from "../../utils/status.utils";

interface DoctorQuickReturnsProps {
  doctorId?: string;
  currentStatus: string;
  form: UseFormReturn<QuickReturnValues>;
}

export const DoctorQuickReturns = ({
  doctorId,
  currentStatus,
  form,
}: DoctorQuickReturnsProps) => {
  const { mutate: updateStatus, isPending } = useUpdateDoctorStatus();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const onSubmit = (data: QuickReturnValues) => {
    if (!doctorId) {
      toast.error("Doctor session not found. Please log in again.");
      return;
    }

    let expectedAtISO: string | null = null;
    const expectedAtNote: string | null = data.expectedAtNote?.trim() || null;

    if (data.status === "back_soon" || data.status === "busy") {
      expectedAtISO = calculateExpectedAtISO(data.expectedAt);
    }

    updateStatus(
      {
        id: doctorId,
        data: {
          status: data.status,
          expectedAt: expectedAtISO,
          expectedAtNote,
        },
      },
      {
        onSuccess: () => {
          form.reset({
            status: data.status,
            expectedAt: "",
            expectedAtNote: "",
          });
        },
      }
    );
  };

  const expectedAtWatch = watch("expectedAt");

  return (
    <div className="mt-10 w-full rounded-[32px] bg-white p-7 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04)] sm:mt-14 sm:rounded-[40px] sm:p-10 lg:max-w-[720px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        {(currentStatus === "back_soon" || currentStatus === "busy") && (
          <>
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500 sm:h-9 sm:w-9 sm:rounded-xl">
                <TimerIcon className="h-4.5 w-4.5 stroke-[3] sm:h-5 sm:w-5" />
              </div>
              <h4 className="text-[14px] font-bold tracking-tight text-[#0f172a] sm:text-[16px]">
                Quick Return Times
              </h4>
            </div>

            <Controller
              control={control}
              name="expectedAt"
              render={({ field }) => (
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    {["5m", "10m", "15m", "30m"].map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          field.onChange(time);
                          if (currentStatus !== "busy") {
                            form.setValue("status", "back_soon", {
                              shouldValidate: true,
                            });
                          }
                        }}
                        className={`h-auto rounded-[18px] py-3.5 text-[13.5px] font-bold transition-all active:scale-95 sm:rounded-[22px] sm:py-5 sm:text-[14.5px] ${
                          field.value === time
                            ? "bg-[#eff6ff] text-[#3b82f6] shadow-sm ring-1 ring-[#3b82f6]/20"
                            : "bg-[#f8fafc] text-[#64748b] hover:bg-[#eff6ff] hover:text-[#3b82f6]"
                        }`}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  {errors.expectedAt && currentStatus === "back_soon" && (
                    <p className="text-xs text-red-500">
                      {errors.expectedAt.message}
                    </p>
                  )}
                </div>
              )}
            />

            <div className="mt-6 sm:mt-8">
              <label className="mb-2 block text-[13px] font-bold text-[#475569] sm:text-[14px]">
                Availability Note (Optional)
              </label>
              <Controller
                control={control}
                name="expectedAtNote"
                render={({ field }) => (
                  <div className="flex flex-col gap-1">
                    <Input
                      {...field}
                      placeholder={`e.g., Back in ${expectedAtWatch || "15m"}, please wait.`}
                      className="h-11 rounded-[16px] border-[#e2e8f0] bg-[#f8fafc] px-4 text-[14px] text-[#0f172a] shadow-sm transition-all focus:border-[#3b82f6] focus:bg-white focus:ring-[#3b82f6]/20 sm:h-12 sm:rounded-[20px]"
                    />
                    {errors.expectedAtNote && (
                      <p className="text-xs text-red-500">
                        {errors.expectedAtNote.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>
          </>
        )}

        <div className="mt-4 flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="rounded-[14px] px-6 py-2.5 text-[13.5px] font-bold shadow-sm transition-all active:scale-95 sm:rounded-[16px] sm:text-[14.5px]"
          >
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DoctorQuickReturns;
