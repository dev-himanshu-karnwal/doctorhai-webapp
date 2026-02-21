import type { FeatureCard as FeatureCardType } from "../types/landing.types";

type FeatureCardsProps = {
  cards: FeatureCardType[];
};

export function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.id}
          className={`rounded-2xl border border-gray-100 p-6 ${
            card.highlight ? "bg-amber-50/80" : "bg-white"
          }`}
        >
          {card.highlight && (
            <p className="mb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
              {card.highlight}
            </p>
          )}
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600">{card.description}</p>
        </article>
      ))}
    </section>
  );
}
