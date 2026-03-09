import { WaitingCard, CrowdedRoomsCard, SimpleSolutionCard } from "./ui";

export function FeatureCards() {
  return (
    <section className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
      <WaitingCard />
      <CrowdedRoomsCard />
      <SimpleSolutionCard />
    </section>
  );
}
