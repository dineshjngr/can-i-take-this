import { Luggage } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { FOOTER_NAVIGATION, SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <Container className="flex flex-col gap-8 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/"
          className="flex w-fit items-center gap-2 rounded-lg text-sm font-semibold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`${SITE_CONFIG.name} home`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Luggage aria-hidden="true" className="size-4" />
          </span>
          {SITE_CONFIG.name}
        </Link>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-6"
          aria-label="Footer navigation"
        >
          {FOOTER_NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded text-sm text-muted-foreground transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
