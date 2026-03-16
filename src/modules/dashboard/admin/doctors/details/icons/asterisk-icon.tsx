import React from "react";

export const AsteriskIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v16M8 8l8 8M16 8l-8 8M4 12h16" />
  </svg>
);
