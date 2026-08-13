export const SITE_CONFIG = {
  name: "Can I Take This?",
  title: "Can I Take This? | Flight Item & Baggage Rules Checker",
  description:
    "Check whether an item is allowed in cabin or checked baggage based on your airline, airport and destination.",
} as const;

export const MAIN_NAVIGATION = [
  { label: "Trip Checker", href: "/trip-checker" },
  { label: "Items", href: "/items" },
  { label: "Airlines", href: "/airlines" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_NAVIGATION = [
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export const BRAND_COLORS = {
  background: "#F8FAFC",
  card: "#FFFFFF",
  navy: "#102A43",
  blue: "#2563EB",
  success: "#16A34A",
  warning: "#F59E0B",
  error: "#DC2626",
} as const;
