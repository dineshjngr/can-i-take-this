import { Bookmark, Globe2, Luggage, Menu } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MAIN_NAVIGATION, SITE_CONFIG } from "@/lib/constants";

const navigationLinkClassName =
  "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label={`${SITE_CONFIG.name} home`}
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Luggage aria-hidden="true" className="size-5" />
          </span>
          <span className="truncate text-base font-semibold tracking-tight text-navy sm:text-lg">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
          {MAIN_NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href} className={navigationLinkClassName}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
          <Button
            render={<Link href="/language" />}
            variant="ghost"
            size="lg"
            aria-label="Language settings"
          >
            <Globe2 aria-hidden="true" data-icon="inline-start" />
            <span>EN</span>
          </Button>
          <Button render={<Link href="/saved-trips" />} variant="outline" size="lg">
            <Bookmark aria-hidden="true" data-icon="inline-start" />
            <span>Saved trips</span>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon-lg" aria-label="Open navigation menu" />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent className="w-[min(22rem,calc(100vw-2rem))] bg-card">
              <SheetHeader className="border-b px-5 py-5 pr-14 text-left">
                <SheetTitle className="text-lg text-navy">{SITE_CONFIG.name}</SheetTitle>
                <SheetDescription>Travel rules, clearly explained.</SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-3 py-2" aria-label="Mobile navigation">
                {MAIN_NAVIGATION.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className="rounded-xl px-3 py-3 text-base font-medium text-navy transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto grid gap-2 border-t p-4">
                <SheetClose
                  render={
                    <Button
                      render={<Link href="/language" />}
                      variant="ghost"
                      size="lg"
                      className="w-full justify-start"
                    />
                  }
                >
                  <Globe2 aria-hidden="true" data-icon="inline-start" />
                  Language
                </SheetClose>
                <SheetClose
                  render={
                    <Button
                      render={<Link href="/saved-trips" />}
                      variant="outline"
                      size="lg"
                      className="w-full justify-start"
                    />
                  }
                >
                  <Bookmark aria-hidden="true" data-icon="inline-start" />
                  Saved trips
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
