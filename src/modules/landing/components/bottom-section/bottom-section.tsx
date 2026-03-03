import { BottomSectionFeatures, BottomSectionMockup } from "./ui";

export function BottomSection() {
  return (
    <section className="grid gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2">
      <BottomSectionFeatures />
      <BottomSectionMockup />
    </section>
  );
}
