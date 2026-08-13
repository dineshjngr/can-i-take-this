import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <article className="rounded-2xl border bg-background p-6">
      <span className="flex size-10 items-center justify-center rounded-xl border bg-card text-primary shadow-xs">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}
