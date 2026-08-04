"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getAIWorkflow } from "@/data/ai-workflow";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

export default function AIWorkflowSection() {
  const { locale } = useLang();
  const { stats, cases } = getAIWorkflow(locale);
  const ui = t(locale);

  return (
    <section id="ai" className="border-y border-card-border/40 bg-card/20">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <SectionHeader label={ui.aiLabel} title={ui.aiTitle} />

        <p className="mb-12 max-w-2xl text-sm leading-relaxed">{ui.aiSub}</p>

        <div className="mb-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-card-border bg-card-border sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-6 text-center">
              <div className="font-mono text-3xl font-bold text-accent">{stat.value}</div>
              <div className="mt-1.5 text-xs font-medium text-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <div
              key={c.title}
              className="group flex flex-col rounded-lg border border-card-border bg-card/60 p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted/70">
                {c.scale} · {c.duration}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed">{c.description}</p>

              {c.metrics && (
                <ul className="mt-3 space-y-1 border-l border-accent/30 pl-3">
                  {c.metrics.map((m) => (
                    <li key={m} className="text-xs leading-relaxed">{m}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
                {c.liveUrl && (
                  <a
                    href={c.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    {ui.aiLive} <ArrowUpRight size={12} />
                  </a>
                )}
                {c.blogUrl && (
                  <a
                    href={c.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    <BookOpen size={12} /> {ui.aiBlog}
                  </a>
                )}
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5 font-mono">
                {c.techStack.map((tech) => (
                  <li key={tech} className="rounded bg-accent/10 px-2 py-0.5 text-[11px] text-accent">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
