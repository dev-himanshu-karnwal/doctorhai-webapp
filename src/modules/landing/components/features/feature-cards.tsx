import { WaitingCard } from "./waiting-card";
import { CrowdedRoomsCard } from "./crowded-rooms-card";
import { SimpleSolutionCard } from "./simple-solution-card";

export function FeatureCards() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      <WaitingCard />
      <CrowdedRoomsCard />
      <SimpleSolutionCard />
    </section>
  );
}
