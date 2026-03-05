import { IconType } from "../../types/hospital.types";

export function HospitalIcon({
  type,
  color,
  bgColor,
}: {
  type: IconType;
  color: string;
  bgColor: string;
}) {
  const icons: Record<IconType, React.ReactNode> = {
    building: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M3 9h18M12 6v3M12 12v3M6 12h3M15 12h3" />
      </svg>
    ),
    heart: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    smile: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
      </svg>
    ),
    brain: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <path d="M12 5C8.5 5 6 7.5 6 10c0 1.5.5 2.8 1.5 3.8M12 5c3.5 0 6 2.5 6 5 0 1.5-.5 2.8-1.5 3.8M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M8 10c-1.1 0-2 .9-2 2s.9 2 2 2M16 10c1.1 0 2 .9 2 2s-.9 2-2 2M12 19v-5M8 14c0 2.8 1.8 5 4 5s4-2.2 4-5" />
      </svg>
    ),
    tooth: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <path d="M12 4C9 4 6 6 6 9c0 1.5.5 2.5 1 3.5L8 19c.3 1.1 1 2 2 2s1.7-.9 2-2l.5-3 .5 3c.3 1.1 1 2 2 2s1.7-.9 2-2l1-6.5c.5-1 1-2 1-3.5C19 6 16 4 12 4z" />
        <path d="M9 4c0-1.1.9-2 2-2M13 2c1.1 0 2 .9 2 2" />
      </svg>
    ),
    cross: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  };

  return (
    <div
      className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[32px]"
      style={{ backgroundColor: bgColor }}
    >
      {icons[type]}
    </div>
  );
}
