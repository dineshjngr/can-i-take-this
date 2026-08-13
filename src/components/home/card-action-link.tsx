import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface CardActionLinkProps {
  children: ReactNode;
  href: `#${string}`;
  accessibleLabel: string;
}

export function CardActionLink({ children, href, accessibleLabel }: CardActionLinkProps) {
  return (
    <Link
      href={href}
      aria-label={`${accessibleLabel} (coming soon)`}
      className="inline-flex items-center gap-1.5 rounded-md text-sm font-semibold text-primary transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </Link>
  );
}
