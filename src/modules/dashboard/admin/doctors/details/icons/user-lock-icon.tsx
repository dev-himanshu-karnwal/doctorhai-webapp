import React from "react";

export const UserLockIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <rect x="15" y="11" width="8" height="6" rx="2" />
    <path d="M19 11V9a2 2 0 00-4 0v2" />
  </svg>
);
