"use client";

import { useLang } from "@/context/LanguageContext";
import { getCareers } from "@/data/career";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ExperienceSection() {
  const { locale } = useLang();
  const careers = getCareers(locale);
  const ui = t(locale);

  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeader label={ui.expLabel} title={ui.expTitle} />

      <ol>
        {careers.map((career) => (
          <li
            key={career.company + career.period}
            className="group grid gap-2 border-b border-card-border/40 py-8 first:pt-0 sm:grid-cols-8 sm:gap-6"
          >
            <div className="font-mono text-xs uppercase tracking-wide text-muted/70 sm:col-span-2 sm:pt-1">
              {career.period}
            </div>
            <div className="sm:col-span-6">
              <h3 className="font-semibold text-foreground">
                {career.role} <span className="text-muted/60">·</span>{" "}
                <span className="transition-colors group-hover:text-accent">
                  {career.company}
                </span>
              </h3>
              <ul className="mt-2.5 space-y-1">
                {career.descriptions.map((desc) => (
                  <li key={desc} className="text-sm leading-relaxed">{desc}</li>
                ))}
              </ul>
              {career.techStack && (
                <ul className="mt-3.5 flex flex-wrap gap-1.5 font-mono">
                  {career.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded bg-accent/10 px-2 py-0.5 text-[11px] text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
