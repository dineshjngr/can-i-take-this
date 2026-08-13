import { CircleCheck, CircleX, TriangleAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import type { PackingStatus } from "@/types";

interface StatusBadgeProps {
  status: PackingStatus;
}

const statusConfig = {
  allowed: {
    label: "Allowed",
    icon: CircleCheck,
    className: "border-success/15 bg-success/8 text-success",
  },
  conditional: {
    label: "Conditional",
    icon: TriangleAlert,
    className: "border-warning/20 bg-warning/10 text-amber-700",
  },
  "not-allowed": {
    label: "Not allowed",
    icon: CircleX,
    className: "border-error/15 bg-error/8 text-error",
  },
} as const;

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex min-h-8 w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold whitespace-nowrap sm:text-sm",
        config.className,
      )}
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      {config.label}
    </span>
  );
}
