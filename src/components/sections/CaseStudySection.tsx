"use client";

import { useState } from "react";
import { ArrowUpRight, BookOpen, Maximize2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getCaseStudy } from "@/data/case-study";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CaseStudySection() {
  const { locale } = useLang();
  const study = getCaseStudy(locale);
  const ui = t(locale);
  const [active, setActive] = useState(study.diagrams[0].id);

  const current = study.diagrams.find((d) => d.id === active) ?? study.diagrams[0];

  return (
    <section id="case-study" className="border-y border-card-border/40 bg-card/20">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHeader label={ui.caseLabel} title={ui.caseTitle} />

        <div className="mb-10 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-2xl font-bold text-accent">{study.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wide text-muted/70">
            {study.tagline}
          </p>
        </div>

        <p className="mb-10 max-w-3xl text-sm leading-relaxed">{study.summary}</p>

        <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-card-border bg-card-border sm:grid-cols-4">
          {study.stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">{s.value}</div>
              <div className="mt-1.5 text-xs font-medium text-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 구조도 */}
        <div className="mb-12">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {study.diagrams.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className={`rounded border px-3 py-1.5 font-mono text-xs transition-colors ${
                  d.id === active
                    ? "border-accent/60 bg-accent/10 text-accent"
                    : "border-card-border text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {d.label}
              </button>
            ))}
            <a
              href={current.src}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1 font-mono text-xs text-accent hover:underline"
            >
              <Maximize2 size={12} /> {ui.caseFullscreen}
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-card-border bg-background">
            <iframe
              key={current.id}
              src={current.src}
              title={`${study.name} — ${current.label}`}
              loading="lazy"
              className="h-[420px] w-full border-0 sm:h-[560px]"
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">{current.caption}</p>
        </div>

        {/* 무엇을 배웠나 */}
        <div className="grid gap-5 md:grid-cols-2">
          {study.findings.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-card-border bg-card/60 p-6"
            >
              <h4 className="font-semibold text-foreground">{f.title}</h4>
              <p className="mt-2.5 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 flex flex-wrap gap-1.5 font-mono">
          {study.techStack.map((tech) => (
            <li key={tech} className="rounded bg-accent/10 px-2 py-0.5 text-[11px] text-accent">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-5 font-mono text-xs">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:underline"
          >
            {ui.aiLive} <ArrowUpRight size={12} />
          </a>
          <a
            href={study.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent hover:underline"
          >
            <BookOpen size={12} /> {ui.aiBlog}
          </a>
        </div>
      </div>
    </section>
  );
}
