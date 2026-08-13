import { CircleCheck, ExternalLink, ShieldCheck } from "lucide-react";

import { CardActionLink } from "@/components/home/card-action-link";
import { MOCK_SOURCE_CATEGORIES } from "@/data/mock-trip-summary";

export function OfficialSourcesCard() {
  return (
    <section
      id="official-sources"
      aria-labelledby="official-sources-title"
      className="overflow-hidden rounded-3xl border bg-card shadow-[0_20px_60px_-40px_rgba(16,42,67,0.2)]"
    >
      <div className="px-5 pt-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-success/8 text-success">
            <ShieldCheck aria-hidden="true" className="size-5" />
          </span>
          <span className="rounded-full border bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
            Demo
          </span>
        </div>
        <h2 id="official-sources-title" className="text-lg font-semibold tracking-tight text-navy">
          Official sources checked
        </h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Placeholder source categories for this interface preview.
        </p>
      </div>

      <ul className="mt-3 divide-y px-5">
        {MOCK_SOURCE_CATEGORIES.map((source) => (
          <li key={source} className="flex items-center gap-2.5 py-3.5 text-sm font-medium text-navy">
            <CircleCheck aria-hidden="true" className="size-4 shrink-0 text-success" />
            <span className="min-w-0 flex-1">{source}</span>
            <ExternalLink aria-hidden="true" className="size-3.5 shrink-0 text-muted-foreground" />
          </li>
        ))}
      </ul>

      <div className="border-t bg-muted/25 px-5 py-4">
        <CardActionLink href="#official-sources" accessibleLabel="How we check rules">
          How we check rules
        </CardActionLink>
      </div>
    </section>
  );
}
