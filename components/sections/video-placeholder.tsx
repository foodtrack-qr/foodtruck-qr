import { useTranslations } from "next-intl";

export function VideoPlaceholder() {
  const t = useTranslations("video");

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/demo-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
