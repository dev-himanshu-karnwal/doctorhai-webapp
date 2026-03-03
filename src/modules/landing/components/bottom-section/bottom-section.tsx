import { BottomSectionFeatures } from "./bottom-section-features";
import { BottomSectionMockup } from "./bottom-section-mockup";

export function BottomSection() {
  return (
    <section className="grid gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2">
      <BottomSectionFeatures />
      <BottomSectionMockup />
    </section>
  );
}
