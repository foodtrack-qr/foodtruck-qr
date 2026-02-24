import { getTranslations } from "next-intl/server";
import { Rocket, Gift, Mail } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("contact_title"),
    description: t("contact_description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {/* Launch announcement */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t("launch_title")}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {t("launch_description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Early access */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t("early_access")}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {t("early_access_description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{t("email_label")}</h2>
                  <a
                    href={`mailto:${t("email")}`}
                    className="mt-2 inline-block text-lg font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {t("email")}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
