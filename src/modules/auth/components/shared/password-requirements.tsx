export function PasswordRequirements({ password = "" }: { password?: string }) {
  const requirements = [
    { label: "At least 8 characters long", isMet: password.length >= 8 },
    { label: "One uppercase letter", isMet: /[A-Z]/.test(password) },
    { label: "One lowercase letter", isMet: /[a-z]/.test(password) },
    { label: "One number (0-9)", isMet: /[0-9]/.test(password) },
    {
      label: "One special character (!@#$%)",
      isMet: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <ul className="mt-3 space-y-[10px] pl-1">
      {requirements.map((req, idx) => (
        <li key={idx} className="flex items-center gap-[12px]">
          {req.isMet ? (
            <svg
              className="h-[22px] w-[22px] text-[#22C55E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <div className="h-[22px] w-[22px] rounded-full border-[2px] border-[#CBD5E1]" />
          )}
          <span className="text-[15px] font-medium text-[#475569]">
            {req.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
