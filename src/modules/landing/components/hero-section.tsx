import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusIndicator } from "@/components/ui/status-indicator";

export function HeroSection() {
  return (
    <section className="rounded-2xl border border-gray-100 bg-gradient-to-r from-sky-50 to-white p-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <StatusIndicator status="available" size="sm" />
          <span className="text-sm font-medium text-gray-600">
            Live Availability Tracking
          </span>
        </div>
        <h1 className="max-w-xl text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          Know If The Doctor Is Available{" "}
          <span className="text-teal-600">Before You Visit</span>
        </h1>
        <p className="max-w-lg text-gray-600">
          Skip the waiting room blues. Check real-time status updates from the
          comfort of your home.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[200px] flex-1">
            <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <Input
              type="search"
              placeholder="Search for a hospital or clinic..."
              className="pl-9"
            />
          </div>
          <Button size="lg">Find</Button>
        </div>
        <Button size="lg" className="w-fit bg-gray-900 hover:bg-gray-800">
          Get Started &gt;
        </Button>
      </div>
    </section>
  );
}
