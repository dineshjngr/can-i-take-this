import { TriangleAlert } from "lucide-react";

import { CardActionLink } from "@/components/home/card-action-link";
import { MOCK_TRIP_WARNINGS } from "@/data/mock-trip-summary";

export function WarningSummaryCard() {
  return (
    <section
      id="trip-warnings"
      aria-labelledby="trip-warnings-title"
      className="overflow-hidden rounded-3xl border border-warning/25 bg-card shadow-[0_20px_60px_-40px_rgba(16,42,67,0.2)]"
    >
      <div className="border-b border-warning/15 bg-warning/7 px-5 py-5">
        <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-warning/15 text-amber-700">
          <TriangleAlert aria-hidden="true" className="size-5" />
        </div>
        <h2 id="trip-warnings-title" className="text-lg font-semibold tracking-tight text-navy">
          Your trip has 2 warnings
        </h2>
      </div>

      <div className="divide-y divide-warning/15 px-5">
        {MOCK_TRIP_WARNINGS.map((warning) => (
          <article key={warning.title} className="py-5">
            <h3 className="flex items-center gap-2 font-semibold text-navy">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-warning" />
              {warning.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{warning.description}</p>
          </article>
        ))}
      </div>

      <div className="border-t border-warning/15 bg-warning/5 px-5 py-4">
        <CardActionLink href="#trip-warnings" accessibleLabel="See all warnings">
          See all warnings
        </CardActionLink>
      </div>
    </section>
  );
}
