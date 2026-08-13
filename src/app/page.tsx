import { Plane } from "lucide-react";

import { PackingCheckCard } from "@/components/checker/packing-check-card";
import { TripCheckerForm } from "@/components/checker/trip-checker-form";
import { OfficialSourcesCard } from "@/components/home/official-sources-card";
import { SavedTripPreviewSection } from "@/components/home/saved-trip-preview-section";
import { TripInsightsCard } from "@/components/home/trip-insights-card";
import { WarningSummaryCard } from "@/components/home/warning-summary-card";
import { WhatToReviewSection } from "@/components/home/what-to-review-section";
import { WhyTravelersSection } from "@/components/home/why-travelers-section";
import { Container } from "@/components/layout/container";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative isolate flex flex-1 items-center overflow-hidden py-14 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 h-96 w-[56rem] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute top-24 -left-32 size-80 rounded-full bg-sky-200/35 blur-3xl" />
          <div className="absolute -right-28 bottom-0 size-96 rounded-full bg-blue-100/45 blur-3xl" />

          <div className="absolute top-28 right-[8%] left-[8%] hidden items-center sm:flex">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-primary/35" />
            <span className="mx-3 flex size-9 -rotate-6 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary shadow-sm">
              <Plane className="size-4" />
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/35 via-primary/20 to-transparent" />
          </div>

          <div className="absolute bottom-0 left-[3%] hidden h-40 w-52 items-end gap-1 opacity-25 md:flex">
            <span className="h-14 w-12 rounded-t bg-primary/25" />
            <span className="h-24 w-9 rounded-t-sm bg-primary/25" />
            <span className="h-32 w-2 bg-primary/30 [clip-path:polygon(42%_0,58%_0,100%_100%,0_100%)]" />
            <span className="h-20 w-12 rounded-t bg-primary/25" />
            <span className="h-10 w-16 rounded-t bg-primary/20" />
          </div>

          <div className="absolute right-[3%] bottom-0 hidden h-36 w-56 items-end justify-end gap-2 opacity-25 md:flex">
            <span className="mb-5 size-20 rounded-full border-[7px] border-primary/25" />
            <span className="h-20 w-9 rounded-t-full bg-primary/25" />
            <span className="h-28 w-14 rounded-t bg-primary/25" />
            <span className="h-16 w-12 rounded-t-sm bg-primary/20" />
          </div>
        </div>

        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-primary uppercase">
              Pack with confidence
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl lg:text-6xl">
              Check your trip
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Add your route and the items you plan to pack.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
            <TripCheckerForm />
          </div>

          <div className="mx-auto mt-8 max-w-7xl sm:mt-10">
            <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.7fr)_minmax(17rem,0.85fr)_minmax(17rem,0.85fr)]">
              <PackingCheckCard />
              <WarningSummaryCard />
              <div className="grid gap-5">
                <TripInsightsCard />
                <OfficialSourcesCard />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <WhatToReviewSection />
      <SavedTripPreviewSection />
      <WhyTravelersSection />
    </main>
  );
}
