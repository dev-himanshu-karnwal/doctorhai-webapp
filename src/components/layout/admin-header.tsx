"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, useLogout } from "@/modules/auth";
import { Button } from "@/components/ui/button";
import { SettingsIcon, UserIcon, LogOutIcon } from "@/components/icons";
import { LogoutModal } from "@/components/modals";

export function AdminHeader() {
  const { user } = useAuth();
  const router = useRouter();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Extract role
  const role = user?.account?.roles?.[0];

  const handleProfileClick = () => {
    const hospitalId = user?.hospital?.id;
    if (hospitalId) {
      router.push(`/dashboard/hospitals/${hospitalId}`);
    }
    setIsSettingsOpen(false);
  };

  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    setIsSettingsOpen(false);
  };

  const onLogoutConfirm = () => {
    logout();
  };

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-50">
              <svg
                className="h-4 w-4 text-teal-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-[15px] font-bold tracking-tight text-gray-900">
              DocStatus Super Admin
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-gray-500">
              Logged in as:{" "}
              <span className="font-semibold text-gray-700">
                {user?.account?.username || "System Administrator"}
              </span>
            </span>

            {role === "hospital" ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] p-0 text-[#3b82f6] shadow-sm transition-all hover:bg-white hover:text-[#3b82f6] active:scale-95"
                >
                  <SettingsIcon className="h-5 w-5" />
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
                        onClick={handleProfileClick}
                        className="flex w-full items-center justify-start gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#64748b] transition-colors hover:bg-blue-50 hover:text-[#3b82f6]"
                      >
                        <UserIcon className="h-4.5 w-4.5" />
                        <span>Profile</span>
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={handleLogoutClick}
                        className="flex w-full items-center justify-start gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#ef4444] transition-colors hover:bg-red-50 hover:text-[#ef4444]"
                      >
                        <LogOutIcon className="h-4.5 w-4.5" />
                        <span>Logout</span>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogoutClick}
                className="text-[13px] font-medium text-gray-700"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </header>

      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={onLogoutConfirm}
        loading={isLoggingOut}
      />
    </>
  );
}
