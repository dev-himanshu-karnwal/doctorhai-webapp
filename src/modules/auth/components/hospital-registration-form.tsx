"use client";

import { useState } from "react";
import { FormInput } from "./form-input";
import { Button } from "@/components/ui/button";

export function HospitalRegistrationForm() {
  const [formData, setFormData] = useState({
    hospitalName: "",
    contactPersonName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user type
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
    // Simple validation for demo
    const newErrors: Record<string, string> = {};
    if (!formData.hospitalName)
      newErrors.hospitalName = "Hospital name is required";
    if (!formData.contactPersonName)
      newErrors.contactPersonName = "Contact person is required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitting Hospital registration:", formData);
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <FormInput
        label="Hospital Name"
        name="hospitalName"
        placeholder="St. Mary's General Hospital"
        value={formData.hospitalName}
        onChange={handleChange}
        error={errors.hospitalName}
        icon={
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 18V0H10V4H20V18H0ZM2 16H4V14H2V16ZM2 12H4V10H2V12ZM2 8H4V6H2V8ZM2 4H4V2H2V4ZM6 16H8V14H6V16ZM6 12H8V10H6V12ZM6 8H8V6H6V8ZM6 4H8V2H6V4ZM10 16H18V6H10V8H12V10H10V12H12V14H10V16ZM14 10V8H16V10H14ZM14 14V12H16V14H14Z"
              fill="#94A3B8"
            />
          </svg>
        }
      />
      <FormInput
        label="Contact Person Name"
        name="contactPersonName"
        placeholder="Dr. Sarah Smith"
        value={formData.contactPersonName}
        onChange={handleChange}
        error={errors.contactPersonName}
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        }
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          placeholder="+1 (555) 000-0000"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="admin@hospital.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          }
        />
      </div>
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
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        }
      />
      <FormInput
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        icon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 17V12" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          </svg>
        }
      />

      <Button
        type="submit"
        className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all duration-300 hover:bg-[#3D8F87] active:scale-[0.98]"
      >
        <span>Submit Request</span>
        <svg
          width="19"
          height="16"
          viewBox="0 0 19 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z"
            fill="white"
          />
        </svg>
      </Button>
    </form>
  );
}
