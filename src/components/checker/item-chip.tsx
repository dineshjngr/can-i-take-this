import { X } from "lucide-react";

interface ItemChipProps {
  item: string;
  onRemove: (item: string) => void;
}

export function ItemChip({ item, onRemove }: ItemChipProps) {
  return (
    <span className="inline-flex min-h-9 items-center gap-1 rounded-full border border-primary/15 bg-primary/7 py-1 pr-1.5 pl-3 text-sm font-medium text-navy">
      {item}
      <button
        type="button"
        onClick={() => onRemove(item)}
        className="flex size-6 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={`Remove ${item}`}
      >
        <X aria-hidden="true" className="size-3.5" />
      </button>
    </span>
  );
}
