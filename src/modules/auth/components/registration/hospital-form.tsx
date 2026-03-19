"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { hospitalRegistrationSchema } from "../../schemas";
import { HospitalRegistrationValues } from "../../types/registration.types";
import { FormInput } from "../shared/form-input";
import { PhoneIcon, MailIcon, LockIcon } from "@/components/icons";
import { AuthHospitalIcon, AuthSubmitIcon } from "@/modules/auth/icons";
import { Button } from "@/components/ui";
import { useRegister } from "../../hooks";
import { RegistrationSuccessModal } from "./registration-success-modal";

export function HospitalRegistrationForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HospitalRegistrationValues>({
    resolver: zodResolver(hospitalRegistrationSchema),
    defaultValues: {
      registrationType: "hospital",
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <RegistrationSuccessModal isOpen={showSuccessModal} />
      <form
        onSubmit={handleSubmit((data) =>
          mutate(data, { onSuccess: () => setShowSuccessModal(true) })
        )}
        className="w-full space-y-6"
      >
        <FormInput
          label="Hospital Name"
          {...register("name")}
          placeholder="St. Mary's General Hospital"
          icon={<AuthHospitalIcon size={20} className="text-[#94A3B8]" />}
          error={errors.name?.message}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormInput
            label="Phone Number"
            {...register("phone")}
            placeholder="9876543210"
            icon={<PhoneIcon size={20} className="text-[#94A3B8]" />}
            addonLeft={
              <span className="flex items-center gap-1">
                <span>🇮🇳</span>
                <span>+91</span>
              </span>
            }
            error={errors.phone?.message}
          />
          <FormInput
            label="Email"
            {...register("email")}
            placeholder="admin@hospital.com"
            icon={<MailIcon size={20} className="text-[#94A3B8]" />}
            error={errors.email?.message}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <FormInput
            label="Password"
            {...register("password")}
            type="password"
            placeholder="••••••••"
            icon={<LockIcon size={20} className="text-[#94A3B8]" />}
            error={errors.password?.message}
          />
          <FormInput
            label="Confirm Password"
            {...register("confirmPassword")}
            type="password"
            placeholder="••••••••"
            icon={<LockIcon size={20} className="text-[#94A3B8]" />}
            error={errors.confirmPassword?.message}
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          loading={isPending}
          className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
        >
          <span>{isPending ? "Submitting..." : "Submit Request"}</span>
          {!isPending && <AuthSubmitIcon size={16} className="text-white" />}
        </Button>
      </form>
    </>
  );
}
