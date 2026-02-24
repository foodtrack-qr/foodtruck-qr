import { useTranslations } from "next-intl";
import { ClipboardList, ScanLine, ShoppingCart, Bell } from "lucide-react";

const steps = [
  { key: "step1", icon: ClipboardList },
  { key: "step2", icon: ScanLine },
  { key: "step3", icon: ShoppingCart },
  { key: "step4", icon: Bell },
] as const;

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {steps.map(({ key, icon: Icon }, index) => (
            <div key={key} className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg">
                <Icon className="h-9 w-9 text-primary-foreground" />
              </div>
              <span className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-card border-2 border-primary text-sm font-bold text-primary shadow-sm sm:right-4 lg:right-0">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold mb-2">{t(`${key}.title`)}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {t(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
