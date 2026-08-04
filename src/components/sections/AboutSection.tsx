"use client";

import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { getCapabilities } from "@/data/capabilities";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutSection() {
  const { locale } = useLang();
  const profile = getProfile(locale);
  const capabilities = getCapabilities(locale).slice(0, 6);
  const ui = t(locale);

  return (
    <section id="about" className="border-y border-card-border/40 bg-card/20">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHeader label={ui.aboutLabel} title={ui.aboutTitle} />

        <p className="mb-12 max-w-3xl leading-relaxed">{profile.summary}</p>

        <div className="grid gap-px overflow-hidden rounded-lg border border-card-border bg-card-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div key={cap.title} className="bg-background p-6">
              <div className="mb-3 font-mono text-xs text-accent/70">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="text-xs leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
