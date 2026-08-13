"use client";

import { ArrowRight, Info } from "lucide-react";
import { useState } from "react";

import { AirlineSelector } from "@/components/checker/airline-selector";
import { AirportSelector } from "@/components/checker/airport-selector";
import { ItemSelector } from "@/components/checker/item-selector";
import { Button } from "@/components/ui/button";
import { AIRLINES, AIRPORTS, INITIAL_TRIP_ITEMS, ITEM_SUGGESTIONS } from "@/data/trip-options";

export function TripCheckerForm() {
  const [fromAirport, setFromAirport] = useState("DXB");
  const [toAirport, setToAirport] = useState("LHR");
  const [airline, setAirline] = useState("emirates");
  const [items, setItems] = useState<string[]>([...INITIAL_TRIP_ITEMS]);

  function removeItem(itemToRemove: string) {
    setItems((currentItems) => currentItems.filter((item) => item !== itemToRemove));
  }

  return (
    <form
      className="rounded-3xl border border-white/80 bg-card/95 p-4 shadow-[0_24px_70px_-32px_rgba(16,42,67,0.28)] backdrop-blur sm:p-6 lg:p-8"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <AirportSelector
          id="from-airport"
          label="From"
          value={fromAirport}
          airports={AIRPORTS}
          direction="from"
          onChange={setFromAirport}
        />
        <AirportSelector
          id="to-airport"
          label="To"
          value={toAirport}
          airports={AIRPORTS}
          direction="to"
          onChange={setToAirport}
        />
        <AirlineSelector
          id="airline"
          label="Airline"
          value={airline}
          airlines={AIRLINES}
          onChange={setAirline}
        />
      </div>

      <div className="mt-5">
        <ItemSelector
          id="trip-item"
          label="Add items"
          items={items}
          suggestions={ITEM_SUGGESTIONS}
          onAdd={(item) => setItems((currentItems) => [...currentItems, item])}
          onRemove={removeItem}
        />
      </div>

      <div className="mt-6 flex flex-col gap-5 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex max-w-xl items-start gap-2 text-sm leading-6 text-muted-foreground">
          <Info aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" />
          <span>We check rules from airlines and governments for your exact trip.</span>
        </p>
        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-xl px-6 text-base shadow-sm shadow-primary/20 hover:bg-primary/90 sm:w-auto"
        >
          Check trip
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Button>
      </div>
    </form>
  );
}
