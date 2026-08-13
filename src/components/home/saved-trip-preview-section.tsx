import { Bookmark, BriefcaseBusiness, Plane } from "lucide-react";

import { CardActionLink } from "@/components/home/card-action-link";
import { Container } from "@/components/layout/container";

const savedItems = ["Power bank", "Perfume", "Medicine", "+1"] as const;

export function SavedTripPreviewSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div
          id="saved-trip-preview"
          className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-5 py-8 shadow-[0_28px_80px_-40px_rgba(16,42,67,0.55)] sm:px-8 sm:py-10 lg:px-12"
        >
          <div aria-hidden="true" className="absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-primary/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-24 -z-10 size-80 rounded-full bg-sky-300/10 blur-3xl" />

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-200 uppercase">Saved trip preview</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Keep your packing check ready for later.
              </h2>

              <article className="mt-8 max-w-xl rounded-2xl border border-white/70 bg-white p-5 shadow-lg shadow-black/10 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">Saved trip</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy">
                      Dubai → London
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">Emirates</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                    <Bookmark aria-hidden="true" className="size-5" />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2" aria-label="Items in saved trip preview">
                  {savedItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border bg-muted/70 px-3 py-1.5 text-xs font-medium text-navy"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t pt-4">
                  <CardActionLink href="#saved-trip-preview" accessibleLabel="View saved trips">
                    View saved trips
                  </CardActionLink>
                </div>
              </article>
            </div>

            <div aria-hidden="true" className="mx-auto hidden w-64 rounded-[2.25rem] border-8 border-white/15 bg-background p-3 shadow-2xl sm:block lg:w-72">
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-navy/15" />
              <div className="rounded-2xl bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                    <Plane className="size-4" />
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-wide text-muted-foreground uppercase">
                    My trip
                  </span>
                </div>
                <p className="mt-5 text-lg font-semibold text-navy">DXB → LHR</p>
                <p className="mt-1 text-xs text-muted-foreground">Emirates</p>
                <div className="mt-5 space-y-2">
                  {savedItems.slice(0, 3).map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl bg-muted/70 px-3 py-2.5">
                      <BriefcaseBusiness className="size-3.5 text-primary" />
                      <span className="text-xs font-medium text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
