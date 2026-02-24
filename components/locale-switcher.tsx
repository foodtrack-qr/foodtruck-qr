"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center rounded-full border bg-muted/50 p-0.5">
      <Button
        variant={locale === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLocale("en")}
        className="h-7 px-3 text-xs rounded-full font-semibold"
      >
        EN
      </Button>
      <Button
        variant={locale === "pl" ? "default" : "ghost"}
        size="sm"
        onClick={() => switchLocale("pl")}
        className="h-7 px-3 text-xs rounded-full font-semibold"
      >
        PL
      </Button>
    </div>
  );
}
