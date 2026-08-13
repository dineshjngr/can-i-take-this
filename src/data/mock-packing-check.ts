import type { PackingItemResult } from "@/types";

/** Demo-only presentation data. These values are not verified travel guidance. */
export const MOCK_PACKING_CHECK_RESULTS: PackingItemResult[] = [
  {
    item: "Power bank",
    category: "Lithium battery",
    cabin: "allowed",
    checked: "not-allowed",
  },
  {
    item: "Perfume",
    category: "Liquid",
    cabin: "conditional",
    checked: "allowed",
  },
  {
    item: "Hair dryer",
    category: "Electrical",
    cabin: "allowed",
    checked: "allowed",
  },
  {
    item: "Vape",
    category: "E-cigarette",
    cabin: "conditional",
    checked: "not-allowed",
  },
];
