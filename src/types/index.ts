export type BaggageType = "cabin" | "checked";

export type RuleStatus = "allowed" | "conditional" | "prohibited" | "unknown";

export interface Airport {
  code: string;
  city: string;
  country: string;
}

export interface Airline {
  id: string;
  name: string;
}

export type PackingStatus = "allowed" | "conditional" | "not-allowed";

export interface PackingItemResult {
  item: string;
  category: string;
  cabin: PackingStatus;
  checked: PackingStatus;
}

export interface TravelDetails {
  airlineCode: string;
  departureAirportCode: string;
  destinationAirportCode: string;
}

export interface TravelItem {
  id: string;
  name: string;
  category: string;
}

export interface ItemCheckRequest {
  baggageType: BaggageType;
  item: TravelItem;
  travel: TravelDetails;
}
