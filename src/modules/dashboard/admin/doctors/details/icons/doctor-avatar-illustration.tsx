import React from "react";

export const DoctorAvatarIllustration = ({
  className = "",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 80 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width: 80, height: 80 }}
  >
    {/* coat/body */}
    <path
      d="M12 82C12 60 23 52 40 50C57 52 68 60 68 82"
      fill="white"
      opacity="0.95"
    />
    {/* neck */}
    <rect x="35" y="44" width="10" height="8" rx="2" fill="#FDDCB5" />
    {/* head */}
    <ellipse cx="40" cy="31" rx="14" ry="16" fill="#FDDCB5" />
    {/* hair */}
    <path
      d="M26 30C26 14 54 14 54 30C54 21 26 21 26 30Z"
      fill="#1C1008"
      opacity="0.88"
    />
    {/* ears */}
    <ellipse cx="26" cy="32" rx="2.5" ry="3" fill="#F5C49A" />
    <ellipse cx="54" cy="32" rx="2.5" ry="3" fill="#F5C49A" />
    {/* glasses - left */}
    <rect
      x="28"
      y="29"
      width="9"
      height="6"
      rx="2.5"
      fill="none"
      stroke="#1f2937"
      strokeWidth="1.2"
    />
    {/* glasses - right */}
    <rect
      x="43"
      y="29"
      width="9"
      height="6"
      rx="2.5"
      fill="none"
      stroke="#1f2937"
      strokeWidth="1.2"
    />
    {/* glasses bridge */}
    <line x1="37" y1="32" x2="43" y2="32" stroke="#1f2937" strokeWidth="1.2" />
    {/* eyes */}
    <circle cx="32.5" cy="32" r="1.5" fill="#1f2937" />
    <circle cx="47.5" cy="32" r="1.5" fill="#1f2937" />
    {/* stethoscope hint on coat */}
    <path
      d="M34 52 Q40 56 46 52"
      stroke="#0D9488"
      strokeWidth="1.5"
      fill="none"
      opacity="0.5"
    />
  </svg>
);
