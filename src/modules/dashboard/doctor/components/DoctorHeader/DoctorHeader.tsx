import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SettingsIcon, UserIcon, LogOutIcon } from "@/components/icons";
import { useAuth } from "@/modules/auth";
import { EditDoctorSlider } from "../EditDoctorSlider/EditDoctorSlider";
import { useUpdateDoctorProfile } from "../../hooks";
import { type DoctorProfileBaseValues } from "../../validators";

interface DoctorHeaderProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (isOpen: boolean) => void;
}

export const DoctorHeader = ({
  isSettingsOpen,
  setIsSettingsOpen,
}: DoctorHeaderProps) => {
  const { user } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { mutate: updateProfile, isPending: isUpdating } =
    useUpdateDoctorProfile();

  // Extract the role from user account
  const role = user?.account?.roles?.[0];

  // Determine user data based on role
  let entityData = null;
  if (role === "doctor" && user?.doctor) {
    entityData = user.doctor;
  }

  const profileImage =
    entityData?.profilePhotoUrl && entityData.profilePhotoUrl !== "string"
      ? entityData.profilePhotoUrl
      : "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150";
  const displayName = entityData?.fullName || "Doctor";
  const title =
    entityData?.designation || entityData?.specialization || "Doctor";

  const handleSaveProfile = (data: DoctorProfileBaseValues) => {
    if (!entityData?.id) return;
    updateProfile(
      {
        id: entityData.id,
        data,
      },
      {
        onSuccess: () => {
          setIsProfileOpen(false);
        },
      }
    );
  };

  return (
    <header className="flex w-full items-center justify-between border-b border-[#f1f5f9] bg-white px-5 py-4 sm:px-10 lg:px-16">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-md sm:h-11 sm:w-11">
          <Image
            src={profileImage}
            alt={"Doctor image"}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-[13.5px] leading-tight font-bold text-[#0f172a] sm:text-[15px]">
            {displayName}
          </h1>
          <p className="line-clamp-1 text-[10.5px] font-medium text-[#64748b] sm:text-[12px]">
            {title}
          </p>
        </div>
      </div>

      <div className="relative">
        <Button
          variant="ghost"
          onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] p-0 text-[#3b82f6] shadow-sm transition-all hover:bg-white hover:text-[#3b82f6] active:scale-95 sm:h-10 sm:w-10"
        >
          <SettingsIcon className="h-5 w-5 sm:h-[21px] sm:w-[21px]" />
        </Button>

        {isSettingsOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsSettingsOpen(false)}
            />
            <div className="animate-in fade-in zoom-in-95 absolute right-0 z-50 mt-3 flex w-48 origin-top-right flex-col gap-1 rounded-2xl bg-white p-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 duration-200">
              <Button
                variant="ghost"
                onClick={() => {
                  setIsProfileOpen(true);
                  setIsSettingsOpen(false);
                }}
                className="flex w-full items-center justify-start gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#64748b] transition-colors hover:bg-blue-50 hover:text-[#3b82f6]"
              >
                <UserIcon className="h-4.5 w-4.5" />
                <span>Profile</span>
              </Button>
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#ef4444] transition-colors hover:bg-red-50 hover:text-[#ef4444]"
              >
                <LogOutIcon className="h-4.5 w-4.5" />
                <span>Logout</span>
              </Button>
            </div>
          </>
        )}
      </div>

      <EditDoctorSlider
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        initialData={entityData as unknown as Partial<DoctorProfileBaseValues>}
        onSave={handleSaveProfile}
        isPending={isUpdating}
      />
    </header>
  );
};

export default DoctorHeader;
