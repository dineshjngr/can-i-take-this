import { ChevronDown, Plane } from "lucide-react";

import type { Airline } from "@/types";

interface AirlineSelectorProps {
  id: string;
  label: string;
  value: string;
  airlines: Airline[];
  onChange: (value: string) => void;
}

export function AirlineSelector({
  id,
  label,
  value,
  airlines,
  onChange,
}: AirlineSelectorProps) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy">
        {label}
      </label>
      <div className="group relative">
        <Plane
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-primary"
        />
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-14 w-full appearance-none rounded-xl border bg-card py-2 pr-10 pl-12 text-base font-medium text-navy shadow-xs transition-colors hover:border-primary/50 focus:border-primary focus:ring-3 focus:ring-primary/15 focus:outline-none"
        >
          {airlines.map((airline) => (
            <option key={airline.id} value={airline.id}>
              {airline.name}
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
