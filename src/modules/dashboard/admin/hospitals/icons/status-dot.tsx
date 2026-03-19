export const StatusDot = ({ active }: { active: boolean }) => (
  <svg
    className="h-[6px] w-[6px] shrink-0 fill-current"
    style={{ color: active ? "#10b981" : "#f59e0b" }}
    viewBox="0 0 8 8"
  >
    <circle cx="4" cy="4" r="4" />
  </svg>
);
