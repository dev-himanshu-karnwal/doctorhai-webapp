"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../shared/form-input";
import { Button } from "@/components/ui";
import { Icons } from "../shared/icons";
import { useRouter } from "next/navigation";
import {
  resetPasswordSchema,
  ResetPasswordValues,
} from "../../schemas/reset-password";
import { useResetPassword } from "../../hooks/reset-password";
import { PasswordRequirements } from "../shared/password-requirements";
import { useEffect, useState } from "react";
import { ProfileAccountCard, type ResetProfile } from "./profile-account-card";

export function ResetPasswordForm() {
  const router = useRouter();
  const { mutate, isPending } = useResetPassword();
  const [profiles] = useState<ResetProfile[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("resetProfiles");
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (profiles.length === 0) {
      router.push("/forgot-password");
    }
  }, [profiles, router]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      accountId: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const watchedAccountId = useWatch({
    control,
    name: "accountId",
  });

  const password =
    useWatch({
      control,
      name: "newPassword",
    }) || "";

  const onSubmit = (data: ResetPasswordValues) => {
    mutate({
      accountId: data.accountId,
      newPassword: data.newPassword,
    });
  };

  if (profiles.length === 0) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="space-y-4">
        <label className="text-[14px] font-bold text-[#1E293B]">
          Select Account to Reset
        </label>
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileAccountCard
              key={profile.accountId}
              profile={profile}
              isSelected={watchedAccountId === profile.accountId}
              register={register}
            />
          ))}
        </div>
        {errors.accountId && (
          <p className="mt-1 text-xs text-red-600">
            {errors.accountId.message}
          </p>
        )}
      </div>

      <div>
        <FormInput
          label="New Password"
          {...register("newPassword")}
          type="password"
          placeholder="••••••••"
          icon={<Icons.Lock />}
          error={errors.newPassword?.message}
        />
        <PasswordRequirements password={password} />
      </div>

      <FormInput
        label="Confirm Password"
        {...register("confirmPassword")}
        type="password"
        placeholder="••••••••"
        icon={<Icons.Lock />}
        error={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        disabled={isPending}
        loading={isPending}
        className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
      >
        <span>{isPending ? "Resetting..." : "Reset Password"}</span>
        {!isPending && <Icons.Check />}
      </Button>
    </form>
  );
}
