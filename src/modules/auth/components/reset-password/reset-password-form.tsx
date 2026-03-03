"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../shared/form-input";
import { Button } from "@/components/ui/button";
import { Icons } from "../shared/icons";
import { useRouter } from "next/navigation";
import {
  resetPasswordSchema,
  ResetPasswordValues,
} from "../../schemas/reset-password";
import { useResetPassword } from "../../hooks/reset-password";
import { PasswordRequirements } from "../shared/password-requirements";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

type Profile = {
  accountId: string;
  type: string;
  name: string;
};

export function ResetPasswordForm() {
  const router = useRouter();
  const { mutate, isPending } = useResetPassword();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const storedProfiles = localStorage.getItem("resetProfiles");
    if (storedProfiles) {
      try {
        setProfiles(JSON.parse(storedProfiles));
      } catch {
        console.error("Failed to parse reset profiles");
      }
    } else {
      router.push("/forgot-password");
    }
  }, [router]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      accountId: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const watchedAccountId = watch("accountId");
  const password = watch("newPassword") || "";

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
        <div className="scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent max-h-[300px] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {profiles.map((profile) => (
              <label
                key={profile.accountId}
                className={`relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm transition-all hover:bg-gray-50 focus:outline-none ${
                  watchedAccountId === profile.accountId
                    ? "border-[#3D8F87] ring-1 ring-[#3D8F87]"
                    : "border-gray-200"
                }`}
              >
                <Input
                  type="radio"
                  value={profile.accountId}
                  {...register("accountId")}
                  className="sr-only"
                />
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <span className="block text-sm font-semibold text-gray-900 capitalize">
                      {profile.type} Account
                    </span>
                    <span className="mt-1 flex items-center text-xs text-gray-500">
                      {profile.name}
                    </span>
                  </span>
                </span>
                <Icons.CheckCircle
                  className={`h-5 w-5 text-[#3D8F87] transition-opacity ${
                    watchedAccountId === profile.accountId
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              </label>
            ))}
          </div>
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
