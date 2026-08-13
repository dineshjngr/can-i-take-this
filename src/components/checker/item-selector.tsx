"use client";

import { Plus, Search } from "lucide-react";
import { useState } from "react";

import { ItemChip } from "@/components/checker/item-chip";
import { Button } from "@/components/ui/button";

interface ItemSelectorProps {
  id: string;
  label: string;
  items: string[];
  suggestions: readonly string[];
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
}

export function ItemSelector({
  id,
  label,
  items,
  suggestions,
  onAdd,
  onRemove,
}: ItemSelectorProps) {
  const [draftItem, setDraftItem] = useState("");

  function addItem() {
    const item = draftItem.trim();

    if (!item || items.some((existingItem) => existingItem.toLowerCase() === item.toLowerCase())) {
      return;
    }

    onAdd(item);
    setDraftItem("");
  }

  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm font-semibold text-navy">{label}</legend>

      <div className="rounded-2xl border bg-card p-3 shadow-xs transition-colors focus-within:border-primary focus-within:ring-3 focus-within:ring-primary/10">
        {items.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2" aria-label="Items added to this trip">
            {items.map((item) => (
              <ItemChip key={item} item={item} onRemove={onRemove} />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <div className="relative min-w-0 flex-1">
            <label htmlFor={id} className="sr-only">
              Add another item
            </label>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id={id}
              type="text"
              list={`${id}-suggestions`}
              value={draftItem}
              onChange={(event) => setDraftItem(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addItem();
                }
              }}
              placeholder="Search or type an item"
              className="h-10 w-full rounded-lg bg-muted/70 pr-3 pl-9 text-sm text-navy placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
            />
            <datalist id={`${id}-suggestions`}>
              {suggestions.map((suggestion) => (
                <option key={suggestion} value={suggestion} />
              ))}
            </datalist>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={addItem}
            className="h-10 justify-center text-primary hover:bg-primary/8 hover:text-primary sm:justify-start"
          >
            <Plus aria-hidden="true" data-icon="inline-start" />
            Add more
          </Button>
        </div>
      </div>
    </fieldset>
  );
}
