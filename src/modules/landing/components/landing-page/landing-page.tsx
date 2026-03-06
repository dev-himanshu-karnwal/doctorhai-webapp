import {
  DUMMY_DEPARTMENTS,
  DUMMY_TOP_DOCTORS,
  DUMMY_TOP_HOSPITALS,
  DUMMY_WORKFLOW_STEPS,
} from "../../data";
import { BottomSection } from "../bottom-section";
import { FeatureCards } from "../features";
import { HeroSection } from "../hero";
import { HowItWorks } from "../how-it-works";
import { LiveDoctorAvailability } from "../availability";
import { QuickHospitalLookup } from "../hospital-lookup";

export function LandingPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-9">
        <HeroSection />
        <QuickHospitalLookup
          departments={DUMMY_DEPARTMENTS}
          topHospitals={DUMMY_TOP_HOSPITALS}
          topDoctors={DUMMY_TOP_DOCTORS}
        />
      </div>
      <FeatureCards />
      <LiveDoctorAvailability />
      <HowItWorks steps={DUMMY_WORKFLOW_STEPS} />
      <BottomSection />
    </div>
  );
}
