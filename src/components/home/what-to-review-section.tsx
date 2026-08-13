import { Globe2, PlaneTakeoff, ShieldCheck } from "lucide-react";

import { ReviewCard } from "@/components/home/review-card";
import { Container } from "@/components/layout/container";

const reviewCards = [
  {
    icon: PlaneTakeoff,
    title: "Airline rules",
    description: "Review your airline's latest baggage and restricted-item policies.",
    action: "Review airline rules",
  },
  {
    icon: ShieldCheck,
    title: "Airport & security",
    description: "Check departure airport and security screening requirements.",
    action: "Security guidance",
  },
  {
    icon: Globe2,
    title: "Country entry rules",
    description: "Review destination customs and import requirements where applicable.",
    action: "Destination rules",
  },
] as const;

export function WhatToReviewSection() {
  return (
    <section id="review-before-flying" className="border-y bg-card py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Before departure</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            What to review before flying
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviewCards.map((card) => (
            <ReviewCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
