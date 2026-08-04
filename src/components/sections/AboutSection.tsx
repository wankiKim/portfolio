"use client";

import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { getCapabilities } from "@/data/capabilities";
import { t } from "@/data/i18n";

export default function AboutSection() {
  const { locale } = useLang();
  const profile = getProfile(locale);
  const capabilities = getCapabilities(locale).slice(0, 4);
  const ui = t(locale);

  return (
    <section id="about" className="mb-24 scroll-mt-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {ui.aboutTitle}
        </h2>
      </div>

      <p className="mb-4 leading-relaxed">{profile.summary}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {capabilities.map((cap) => (
          <div key={cap.title} className="rounded-lg border border-card-border/50 p-4">
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">
              {cap.title}
            </h3>
            <p className="text-xs leading-relaxed">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
