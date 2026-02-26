"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import { FormInput } from "./form-input";

export function LoginPage() {
  const [userType, setUserType] = useState<"doctor" | "hospital">("doctor");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitting login for:", userType, formData);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-[#EAFAFE] via-[#F8FAFC] to-[#FCF4FE] px-4 py-12 sm:px-6 lg:px-8">
      {/* Brand Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#3D8F87] bg-gradient-to-b from-[#3D8F87] to-[#3D8F87] shadow-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="6" width="14" height="14" rx="3" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 10v6" />
            <path d="M9 13h6" />
          </svg>
        </div>
        <h1 className="text-[26px] font-bold tracking-tight text-[#111827]">
          DocStatus
        </h1>
        <p className="mt-1 text-[14px] font-medium text-[#64748B]">
          Staff Portal Access
        </p>
      </div>

      <div className="w-full max-w-[480px]">
        {/* Main Card */}
        <div className="w-full rounded-[32px] bg-white p-8 shadow-[0_12px_48px_rgba(0,0,0,0.03)] ring-1 ring-black/5 sm:p-10">
          {/* Toggle */}
          <div className="mb-10 flex w-full rounded-[16px] bg-[#F8FAFC] p-1.5 shadow-inner">
            <button
              onClick={() => setUserType("doctor")}
              className={cn(
                "relative flex w-1/2 items-center justify-center rounded-[12px] py-3.5 text-[14px] font-bold transition-all duration-300",
                userType === "doctor"
                  ? "bg-white text-[#111827] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                  : "text-[#94A3B8] hover:text-[#64748B]"
              )}
            >
              Doctor
            </button>
            <button
              onClick={() => setUserType("hospital")}
              className={cn(
                "relative flex w-1/2 items-center justify-center rounded-[12px] py-3.5 text-[14px] font-bold transition-all duration-300",
                userType === "hospital"
                  ? "bg-white text-[#111827] shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
                  : "text-[#94A3B8] hover:text-[#64748B]"
              )}
            >
              Hospital
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-[26px] leading-tight font-bold tracking-[-0.5px] text-[#111827]">
              Welcome back!
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#64748B] opacity-90">
              Please enter your credentials to access the {userType} dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              label="Username"
              name="username"
              placeholder="dr_smith"
              value={formData.username}
              onChange={handleChange}
              error={errors.username}
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              }
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              icon={
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />

            <div className="flex items-center justify-between pt-1">
              <label className="group flex cursor-pointer items-center gap-3">
                <div className="relative flex items-center">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[6px] border-[2px] border-[#E2E8F0] bg-white transition-all group-hover:border-[#3D8F87] peer-checked:border-[#3D8F87] peer-checked:bg-[#3D8F87]">
                    <svg
                      className="h-[12px] w-[12px] text-white opacity-0 transition-opacity peer-checked:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <span className="text-[14px] font-medium text-[#64748B] transition-colors group-hover:text-[#475569]">
                  Keep me logged in
                </span>
              </label>
              <a
                href="#"
                className="text-[14px] font-bold text-[#3D8F87] transition-colors hover:text-[#3D8F87]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="group relative mt-[32px] flex w-full items-center justify-center gap-2 overflow-hidden rounded-[16px] bg-[#3D8F87] bg-gradient-to-r from-[#3D8F87] to-[#3D8F87] py-[18px] text-[16px] font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-indigo-500/40 active:scale-[0.98]"
            >
              <span className="relative z-10">
                Sign In as {userType === "doctor" ? "Doctor" : "Hospital"}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 ml-1 opacity-90 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-center text-[13px] font-medium text-[#94A3B8]">
          <p>Protected by industry standard encryption.</p>
          <p className="mt-0.5">Authorized personnel only.</p>
        </div>
      </div>
    </div>
  );
}
