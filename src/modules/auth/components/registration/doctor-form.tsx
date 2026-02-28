"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { doctorRegistrationSchema } from "../../schemas";
import { DoctorRegistrationValues } from "../../types/registration.types";
import { FormInput } from "../shared/form-input";
import { Button } from "@/components/ui/button";
import { useRegister } from "../../hooks";
import { Icons } from "../shared/icons";

export function DoctorRegistrationForm() {
  const { mutate, isPending } = useRegister();
  const {
    register,
    handleSubmit,
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

  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
      className="w-full space-y-6"
    >
      <FormInput
        label="Full Name"
        {...register("name")}
        placeholder="Enter your full name"
        icon={<Icons.User />}
        error={errors.name?.message}
      />
      <FormInput
        label="Username"
        {...register("username")}
        placeholder="dr_arora12"
        icon={<Icons.Email />}
        error={errors.username?.message}
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput
          label="Phone Number"
          {...register("phone")}
          placeholder="+1 (555) 000-0000"
          icon={<Icons.Phone />}
          error={errors.phone?.message}
        />
        <FormInput
          label="Email"
          {...register("email")}
          placeholder="doctor@example.com"
          icon={<Icons.Email />}
          error={errors.email?.message}
        />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput
          label="Password"
          {...register("password")}
          type="password"
          placeholder="••••••••"
          icon={<Icons.Lock />}
          error={errors.password?.message}
        />
        <FormInput
          label="Confirm Password"
          {...register("confirmPassword")}
          type="password"
          placeholder="••••••••"
          icon={<Icons.Lock />}
          error={errors.confirmPassword?.message}
        />
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
      >
        <span>Submit Request</span>
        <Icons.Check />
      </Button>
    </form>
  );
}
