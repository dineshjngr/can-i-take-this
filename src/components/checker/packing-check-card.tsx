import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";

import { PackingItemRow } from "@/components/checker/packing-item-row";
import { MOCK_PACKING_CHECK_RESULTS } from "@/data/mock-packing-check";

export function PackingCheckCard() {
  return (
    <section
      id="packing-check"
      aria-labelledby="packing-check-title"
      className="overflow-hidden rounded-3xl border bg-card shadow-[0_20px_60px_-40px_rgba(16,42,67,0.24)]"
    >
      <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6 sm:py-6">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-primary uppercase">
            <FlaskConical aria-hidden="true" className="size-3.5" />
            Demo preview
          </div>
          <h2 id="packing-check-title" className="text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            Your packing check
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Example results for interface demonstration only—not verified travel guidance.
          </p>
        </div>

        <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground">
          <span aria-hidden="true" className="size-2 rounded-full bg-success" />
          Checked just now
        </p>
      </div>

      <div className="hidden grid-cols-[minmax(0,1.5fr)_minmax(8.5rem,0.75fr)_minmax(8.5rem,0.75fr)] border-t bg-muted/45 px-6 py-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:grid">
        <span>Item</span>
        <span>Cabin</span>
        <span>Checked</span>
      </div>

      <div>
        {MOCK_PACKING_CHECK_RESULTS.map((result) => (
          <PackingItemRow key={result.item} result={result} />
        ))}
      </div>

      <div className="border-t bg-muted/25 px-4 py-4 sm:px-6">
        <Link
          href="#packing-check"
          aria-label="View full details and restrictions (coming soon)"
          className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          View full details and restrictions
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </section>
  );
}
