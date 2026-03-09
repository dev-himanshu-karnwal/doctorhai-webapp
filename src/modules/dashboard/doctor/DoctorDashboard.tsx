"use client";

import { useState, useEffect } from "react";
import DoctorHeader from "./components/DoctorHeader";
import DoctorStatusTracker from "./components/DoctorStatusTracker";
import DoctorStatusOptions from "./components/DoctorStatusOptions";
import DoctorQuickReturns from "./components/DoctorQuickReturns";
import DoctorFooter from "./components/DoctorFooter";
import DoctorDashboardSkeleton from "./components/Skeleton";

import { useAuth } from "@/modules/auth";
import { useDoctor } from "@/modules/doctors/hooks/use-doctor";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quickReturnSchema, type QuickReturnValues } from "./validators";

export const DoctorDashboard = () => {
  const { user } = useAuth();
  const doctorId = user?.doctor?.id;
  const { data: doctorData } = useDoctor(doctorId as string);

  const [dbStatus, setDbStatus] = useState("off_duty"); // Explicit DB status tracking
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const form = useForm<QuickReturnValues>({
    resolver: zodResolver(quickReturnSchema),
    defaultValues: {
      status: "off_duty",
      expectedAt: "",
      expectedAtNote: "",
    },
  });

  useEffect(() => {
    if (doctorData) {
      const apiStatus = (doctorData.status?.status ||
        "off_duty") as QuickReturnValues["status"];
      setDbStatus(apiStatus);

      let initialExpectedAt = "";
      if (doctorData.status?.expectedAt) {
        const expectedTime = new Date(doctorData.status.expectedAt).getTime();
        const now = new Date().getTime();
        const diffMs = expectedTime - now;
        const diffMins = Math.round(diffMs / 60000);

        if ([5, 10, 15, 30].includes(diffMins)) {
          initialExpectedAt = `${diffMins}m`;
        }
      }

      form.reset({
        status: apiStatus,
        expectedAt: initialExpectedAt,
        expectedAtNote: doctorData.status?.expectedAtNote || "",
      });
    }
  }, [doctorData, form]);

  const currentStatus = form.watch("status");

  if (!doctorData) {
    return <DoctorDashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans tracking-tight text-[#1e293b]">
      <DoctorHeader
        isSettingsOpen={isSettingsOpen}
        setIsSettingsOpen={setIsSettingsOpen}
      />

      <main className="mx-auto flex max-w-[850px] flex-col items-center px-5 pt-2 pb-32 sm:px-8 sm:pt-4 lg:pt-6">
        <DoctorStatusTracker currentStatus={dbStatus} />

        <DoctorStatusOptions
          currentStatus={currentStatus}
          setCurrentStatus={(status) =>
            form.setValue("status", status as QuickReturnValues["status"], {
              shouldValidate: true,
            })
          }
        />

        <DoctorQuickReturns
          doctorId={doctorId}
          currentStatus={currentStatus}
          form={form}
        />
      </main>

      <DoctorFooter />
    </div>
  );
};

export default DoctorDashboard;
