import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1] sm:text-6xl md:text-7xl">
              {t("headline")}
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
              {t("subtitle")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                <a href="https://admin-restaurant-wheat.vercel.app/">
                  {t("cta_primary")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full" asChild>
                <Link href="contact">
                  {t("cta_secondary")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-3xl md:h-[420px]">
              <Image
                src="/hero-main.jpg"
                alt="FoodTruck QR ordering"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
