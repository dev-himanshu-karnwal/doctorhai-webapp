import {
  DUMMY_DEPARTMENTS,
  DUMMY_FEATURE_CARDS,
  DUMMY_LIVE_DOCTORS,
  DUMMY_TOP_DOCTORS,
  DUMMY_TOP_HOSPITALS,
  DUMMY_WORKFLOW_STEPS,
} from "../data/landing-dummy-data";
import { BottomSection } from "./bottom-section";
import { FeatureCards } from "./feature-cards";
import { HeroSection } from "./hero-section";
import { HowItWorks } from "./how-it-works";
import { LiveDoctorAvailability } from "./live-doctor-availability";
import { QuickHospitalLookup } from "./quick-hospital-lookup";

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

      <FeatureCards cards={DUMMY_FEATURE_CARDS} />

      <LiveDoctorAvailability doctors={DUMMY_LIVE_DOCTORS} />

      <HowItWorks steps={DUMMY_WORKFLOW_STEPS} />

      <BottomSection />
    </div>
  );
}
