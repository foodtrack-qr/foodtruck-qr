import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center text-primary-foreground md:px-20 md:py-28">
          <div className="relative">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed opacity-90">
              {t("subtitle")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-10 h-14 px-8 text-base rounded-full font-bold shadow-lg transition-all"
              asChild
            >
              <a href="">
                {t("button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
