import { BaggageClaim, Plane, Route } from "lucide-react";

import { CardActionLink } from "@/components/home/card-action-link";
import { MOCK_TRIP_INSIGHTS } from "@/data/mock-trip-summary";

const insightIcons = [Route, Plane, BaggageClaim] as const;

export function TripInsightsCard() {
  return (
    <section
      id="trip-insights"
      aria-labelledby="trip-insights-title"
      className="overflow-hidden rounded-3xl border bg-card shadow-[0_20px_60px_-40px_rgba(16,42,67,0.2)]"
    >
      <div className="px-5 pt-5">
        <h2 id="trip-insights-title" className="text-lg font-semibold tracking-tight text-navy">
          Trip insights
        </h2>
      </div>

      <dl className="divide-y px-5">
        {MOCK_TRIP_INSIGHTS.map((insight, index) => {
          const Icon = insightIcons[index];

          return (
            <div key={insight.label} className="flex gap-3 py-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                <Icon aria-hidden="true" className="size-4" />
              </span>
              <div className="min-w-0">
                <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {insight.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-navy">{insight.value}</dd>
              </div>
            </div>
          );
        })}
      </dl>

      <div className="border-t bg-muted/25 px-5 py-4">
        <CardActionLink href="#trip-insights" accessibleLabel="View baggage allowance">
          View baggage allowance
        </CardActionLink>
      </div>
    </section>
  );
}
