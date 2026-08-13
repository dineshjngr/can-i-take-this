/** Demo-only homepage data. No values here represent verified travel guidance. */
export const MOCK_TRIP_WARNINGS = [
  {
    title: "Perfume in cabin",
    description: "Liquids may be subject to container and security restrictions.",
  },
  {
    title: "Vape in cabin",
    description:
      "Electronic smoking devices can have special airline and battery restrictions.",
  },
] as const;

export const MOCK_TRIP_INSIGHTS = [
  { label: "Route", value: "DXB → LHR" },
  { label: "Airline", value: "Emirates" },
  { label: "Cabin baggage", value: "Check airline allowance" },
] as const;

export const MOCK_SOURCE_CATEGORIES = [
  "Airline baggage policy",
  "Aviation authority guidance",
  "Destination authority guidance",
] as const;
