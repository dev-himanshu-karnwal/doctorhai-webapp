import React from "react";

export const IdCardIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="16" rx="3" ry="3" />
    <circle cx="8" cy="10" r="2.5" />
    <line x1="13" y1="9" x2="18" y2="9" />
    <line x1="13" y1="13" x2="18" y2="13" />
    <line x1="5" y1="16" x2="18" y2="16" />
  </svg>
);
