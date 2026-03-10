import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctorRegistrationSchema } from "@/modules/auth/schemas";
import { DoctorRegistrationValues } from "@/modules/auth/types/registration.types";
import { FormInput } from "@/modules/auth/components/shared/form-input";
import { UserIcon, PhoneIcon, MailIcon, LockIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { useDebouncedUsernameCheck } from "@/modules/auth/hooks";

interface AddDoctorFormProps {
  onSubmit: (data: DoctorRegistrationValues) => void;
  isLoading?: boolean;
}

export const AddDoctorForm: React.FC<AddDoctorFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<DoctorRegistrationValues>({
    resolver: zodResolver(doctorRegistrationSchema),
    defaultValues: {
      registrationType: "doctor",
      name: "",
      username: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const username = useWatch({ control, name: "username" });
  const { usernameStatus, usernameStatusIcon } = useDebouncedUsernameCheck(
    username,
    setError,
    clearErrors
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-5 text-left"
    >
      <FormInput
        label="Full Name"
        {...register("name")}
        placeholder="Enter full name"
        icon={<UserIcon />}
        error={errors.name?.message}
      />

      <FormInput
        label="Username"
        {...register("username")}
        placeholder="dr_username"
        icon={<UserIcon />}
        error={errors.username?.message}
        successMessage={
          usernameStatus === "available" ? "Username is available" : undefined
        }
        rightElement={usernameStatusIcon}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormInput
          label="Phone Number"
          {...register("phone")}
          placeholder="9876543210"
          icon={<PhoneIcon />}
          addonLeft={
            <span className="flex items-center gap-1.5 border-r border-gray-200 pr-2">
              <span>🇮🇳</span>
              <span className="text-gray-600">+91</span>
            </span>
          }
          error={errors.phone?.message}
        />
        <FormInput
          label="Email"
          {...register("email")}
          placeholder="doctor@example.com"
          icon={<MailIcon />}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormInput
          label="Password"
          {...register("password")}
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          error={errors.password?.message}
        />
        <FormInput
          label="Confirm Password"
          {...register("confirmPassword")}
          type="password"
          placeholder="••••••••"
          icon={<LockIcon />}
          error={errors.confirmPassword?.message}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        loading={isLoading}
        className="mt-6 h-[56px] w-full rounded-2xl bg-[#3D8F87] text-[16px] font-bold text-white shadow-lg transition-all active:scale-[0.98]"
      >
        {isLoading ? "Adding Doctor..." : "Add Doctor"}
      </Button>
    </form>
  );
};
