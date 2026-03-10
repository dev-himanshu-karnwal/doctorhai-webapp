import { ExternalLinkIcon } from "@/components/icons";
import Link from "next/link";

export const DoctorFooter = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t border-[#f1f5f9] bg-white px-5 py-4 active:backdrop-blur-xl sm:px-10 lg:px-16">
      <div className="flex items-center gap-2 text-[#10b981] sm:gap-2.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:h-2 sm:w-2" />
        <span className="text-[9.5px] font-[900] tracking-widest uppercase sm:text-[11px]">
          System Online
        </span>
      </div>

      <Link
        href="/doctors"
        className="flex h-auto items-center gap-1.5 p-0 text-[#94a3b8] transition-all hover:bg-transparent hover:text-[#0f172a] sm:gap-2"
      >
        <span className="text-[9.5px] font-[900] tracking-widest uppercase sm:text-[11px]">
          View Public Page
        </span>
        <ExternalLinkIcon className="h-3 w-3 sm:h-[14px] sm:w-[14px]" />
      </Link>
    </footer>
  );
};

export default DoctorFooter;
