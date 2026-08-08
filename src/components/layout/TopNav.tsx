"use client";

import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { t } from "@/data/i18n";

export default function TopNav() {
  const { locale, toggle } = useLang();
  const profile = getProfile(locale);
  const ui = t(locale);

  const items = [
    { id: "projects", num: "01", label: ui.navProjects },
    { id: "case-study", num: "02", label: ui.navCase },
    { id: "experience", num: "03", label: ui.navExperience },
    { id: "writing", num: "04", label: ui.navWriting },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-card-border/40 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm text-foreground">
          michael<span className="text-accent">.</span>kim
        </a>

        <div className="hidden items-center gap-7 font-mono text-xs md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group text-muted transition-colors hover:text-foreground"
            >
              <span className="mr-1 text-accent/70">#{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="rounded border border-card-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
            aria-label="Toggle language"
          >
            {locale === "ko" ? "EN" : "KO"}
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="rounded border border-accent/50 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-background"
          >
            {ui.navContact}
          </a>
        </div>
      </div>
    </nav>
  );
}
