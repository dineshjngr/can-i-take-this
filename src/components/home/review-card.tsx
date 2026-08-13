import type { LucideIcon } from "lucide-react";

import { CardActionLink } from "@/components/home/card-action-link";

interface ReviewCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
}

export function ReviewCard({ icon: Icon, title, description, action }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[0_18px_50px_-38px_rgba(16,42,67,0.24)]">
      <span className="flex size-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
      <div className="mt-5">
        <CardActionLink href="#review-before-flying" accessibleLabel={action}>
          {action}
        </CardActionLink>
      </div>
    </article>
  );
}
