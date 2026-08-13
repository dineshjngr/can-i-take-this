import { ChevronDown, PlaneLanding, PlaneTakeoff } from "lucide-react";

import type { Airport } from "@/types";

interface AirportSelectorProps {
  id: string;
  label: string;
  value: string;
  airports: Airport[];
  direction: "from" | "to";
  onChange: (value: string) => void;
}

export function AirportSelector({
  id,
  label,
  value,
  airports,
  direction,
  onChange,
}: AirportSelectorProps) {
  const Icon = direction === "from" ? PlaneTakeoff : PlaneLanding;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="group relative">
        <Icon
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-primary"
        />
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-14 w-full appearance-none rounded-xl border bg-card py-2 pr-10 pl-12 text-base font-medium text-navy shadow-xs transition-colors hover:border-primary/50 focus:border-primary focus:ring-3 focus:ring-primary/15 focus:outline-none"
        >
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.city} — {airport.code}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary"
        />
      </div>
    </div>
  );
}
