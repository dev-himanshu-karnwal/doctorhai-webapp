import { useEffect } from "react";
import { XIcon, PencilIcon, SaveIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  doctorProfileSchema,
  type DoctorProfileValues,
} from "../../validators";
import { type EditDoctorSliderProps } from "../../types";

export const EditDoctorSlider = ({
  isOpen,
  onClose,
  initialData,
  onSave,
  isPending,
}: EditDoctorSliderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DoctorProfileValues>({
    resolver: zodResolver(doctorProfileSchema),
    defaultValues: {
      fullName: "",
      designation: "",
      specialization: "",
      hasExperience: "",
      bio: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        fullName: initialData.fullName || "",
        designation: initialData.designation || "",
        specialization: initialData.specialization || "",
        hasExperience: initialData.hasExperience || "",
        bio: initialData.bio || "",
      });
    }
  }, [initialData, reset]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-end font-sans transition-all duration-1000 ${
        isOpen
          ? "pointer-events-auto visible"
          : "pointer-events-none invisible delay-500"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-[6px] transition-all duration-1000 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`relative z-10 h-full w-full max-w-[540px] transform overflow-y-auto bg-[#f8fafc] shadow-2xl transition-transform duration-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
          <div>
            <h2 className="text-[20px] font-bold tracking-tight text-[#0f172a] sm:text-[22px]">
              Edit Profile
            </h2>
            <p className="text-[13px] font-medium text-[#64748b]">
              Manage your public doctor profile
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-9 w-9 rounded-xl bg-slate-50 p-0 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <XIcon className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit(onSave)} className="space-y-6 p-6 sm:p-8">
          {/* Basic Info Section */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-500">
                <PencilIcon className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-[15.5px] font-bold text-[#0f172a]">
                Basic Information
              </h3>
            </div>

            <div className="grid gap-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold tracking-wider text-[#64748b] uppercase">
                  Full Name
                </label>
                <Input
                  {...register("fullName")}
                  placeholder="Dr. John Doe"
                  className="h-12 rounded-[18px] border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
                {errors.fullName && (
                  <p className="text-[11px] font-medium text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold tracking-wider text-[#64748b] uppercase">
                    Designation
                  </label>
                  <Input
                    {...register("designation")}
                    placeholder="Senior Surgeon"
                    className="h-12 rounded-[18px] border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.designation && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.designation.message}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold tracking-wider text-[#64748b] uppercase">
                    Specialization
                  </label>
                  <Input
                    {...register("specialization")}
                    placeholder="Cardiology"
                    className="h-12 rounded-[18px] border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                  {errors.specialization && (
                    <p className="text-[11px] font-medium text-red-500">
                      {errors.specialization.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold tracking-wider text-[#64748b] uppercase">
                  Experience
                </label>
                <Input
                  {...register("hasExperience")}
                  placeholder="10+ Years"
                  className="h-12 rounded-[18px] border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold tracking-wider text-[#64748b] uppercase">
                  Bio
                </label>
                <textarea
                  {...register("bio")}
                  placeholder="Tell patients about yourself..."
                  rows={4}
                  className="w-full rounded-[20px] border border-slate-200 bg-slate-50/50 p-4 text-[14px] text-[#0f172a] transition-all outline-none placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="sticky bottom-0 flex gap-4 bg-[#f8fafc]/80 pt-4 backdrop-blur-sm">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-13 flex-1 rounded-[20px] border-slate-200 bg-white font-bold text-slate-600 transition-all active:scale-[0.98]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="h-13 flex-1 rounded-[20px] bg-blue-600 font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-[0.98]"
            >
              {isPending ? (
                "Saving..."
              ) : (
                <>
                  <SaveIcon className="mr-2 h-4.5 w-4.5" />
                  Save Profile
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
