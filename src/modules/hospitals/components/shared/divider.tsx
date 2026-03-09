import { cn } from "@/lib/cn";

export function Divider({ className }: { className?: string }) {
  return <div className={cn("h-[1px] w-full bg-[#F1F5F9]", className)} />;
}
