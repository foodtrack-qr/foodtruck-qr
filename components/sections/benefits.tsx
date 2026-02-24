import { useTranslations } from "next-intl";
import Image from "next/image";
import { Check, Store, Users } from "lucide-react";

export function Benefits() {
  const t = useTranslations("benefits");

  const ownerBenefits = [
    t("owner1"),
    t("owner2"),
    t("owner3"),
    t("owner4"),
  ];

  const customerBenefits = [
    t("customer1"),
    t("customer2"),
    t("customer3"),
    t("customer4"),
  ];

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

        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-card border p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Store className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t("owners_title")}</h3>
            </div>
            <ul className="space-y-5 mb-8">
              {ownerBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-[15px] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="relative h-52 w-full overflow-hidden rounded-2xl">
              <Image
                src="/features-owners.jpg"
                alt="Food truck owner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl bg-card border p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{t("customers_title")}</h3>
            </div>
            <ul className="space-y-5 mb-8">
              {customerBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-[15px] leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="relative h-52 w-full overflow-hidden rounded-2xl">
              <Image
                src="/features-customers.jpg"
                alt="Customer ordering from food truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
