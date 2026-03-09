"use client";

export function AdminHeader() {
  return (
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
              System Administrator
            </span>
          </span>
          <button className="cursor-pointer rounded-lg border border-gray-300 px-4 py-1.5 text-[13px] font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
