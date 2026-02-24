"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Menu, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LocaleSwitcher } from "@/components/locale-switcher";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 font-bold text-xl tracking-tight"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <QrCode className="h-5 w-5 text-primary-foreground" />
          </div>
          FoodTruck QR
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />

          {/* Mobile nav */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-8">
              <SheetTitle className="flex items-center gap-2.5 text-xl font-bold">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                  <QrCode className="h-5 w-5 text-primary-foreground" />
                </div>
                FoodTruck QR
              </SheetTitle>
              <nav className="flex flex-col gap-2 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex items-center gap-3 pt-8 border-t">
                <LocaleSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
