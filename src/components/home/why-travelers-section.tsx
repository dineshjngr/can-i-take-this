import { BadgeCheck, ListFilter, Timer } from "lucide-react";

import { BenefitCard } from "@/components/home/benefit-card";
import { Container } from "@/components/layout/container";

const benefits = [
  {
    icon: Timer,
    title: "Faster than searching multiple sites",
    description: "Find the relevant rules in one place.",
  },
  {
    icon: ListFilter,
    title: "Trip-specific results",
    description: "Check your airline, route and selected items.",
  },
  {
    icon: BadgeCheck,
    title: "Updated from official sources",
    description: "Rules are linked to airline, regulator and government sources.",
  },
] as const;

export function WhyTravelersSection() {
  return (
    <section className="bg-card py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">Built for clarity</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Why travelers use this
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
