import type { Airline, Airport } from "@/types";

export const AIRPORTS: Airport[] = [
  { code: "DXB", city: "Dubai", country: "United Arab Emirates" },
  { code: "LHR", city: "London", country: "United Kingdom" },
  { code: "AUH", city: "Abu Dhabi", country: "United Arab Emirates" },
  { code: "JFK", city: "New York", country: "United States" },
  { code: "SIN", city: "Singapore", country: "Singapore" },
];

export const AIRLINES: Airline[] = [
  { id: "emirates", name: "Emirates" },
  { id: "british-airways", name: "British Airways" },
  { id: "etihad", name: "Etihad Airways" },
  { id: "singapore-airlines", name: "Singapore Airlines" },
];

export const INITIAL_TRIP_ITEMS = [
  "Power bank",
  "Perfume",
  "Medicine",
  "Hair straightener",
] as const;

export const ITEM_SUGGESTIONS = [
  ...INITIAL_TRIP_ITEMS,
  "Laptop",
  "Camera",
  "Electric shaver",
  "Travel adapter",
] as const;
