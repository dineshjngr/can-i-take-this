import { StatusBadge } from "@/components/checker/status-badge";
import type { PackingItemResult } from "@/types";

interface PackingItemRowProps {
  result: PackingItemResult;
}

export function PackingItemRow({ result }: PackingItemRowProps) {
  return (
    <div className="grid gap-4 border-t px-4 py-5 sm:grid-cols-[minmax(0,1.5fr)_minmax(8.5rem,0.75fr)_minmax(8.5rem,0.75fr)] sm:items-center sm:px-6">
      <div className="min-w-0">
        <h3 className="font-semibold text-navy">{result.item}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{result.category}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:contents">
        <div className="min-w-0">
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:hidden">
            Cabin
          </p>
          <StatusBadge status={result.cabin} />
        </div>
        <div className="min-w-0">
          <p className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:hidden">
            Checked
          </p>
          <StatusBadge status={result.checked} />
        </div>
      </div>
    </div>
  );
}
