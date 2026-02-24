import { useTranslations } from "next-intl";
import {
  QrCode,
  Smartphone,
  CreditCard,
  MapPin,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ownerFeatures = [
  { key: "qr_menu", icon: QrCode },
  { key: "mobile_orders", icon: Smartphone },
  { key: "payments", icon: CreditCard },
] as const;

const customerFeatures = [
  { key: "find_trucks", icon: MapPin },
  { key: "quick_order", icon: ShoppingBag },
  { key: "order_tracking", icon: Clock },
] as const;

export function Features() {
  const t = useTranslations("features");

  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-16">
          <Badge variant="outline" className="mb-8 rounded-full px-4 py-1.5 text-sm font-medium">
            {t("for_owners")}
          </Badge>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ownerFeatures.map(({ key, icon: Icon }) => (
              <div key={key} className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Badge variant="outline" className="mb-8 rounded-full px-4 py-1.5 text-sm font-medium">
            {t("for_customers")}
          </Badge>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {customerFeatures.map(({ key, icon: Icon }) => (
              <div key={key} className="group rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {t(`${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
