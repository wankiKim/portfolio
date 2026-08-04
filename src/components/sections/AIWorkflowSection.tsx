"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getAIWorkflow } from "@/data/ai-workflow";
import { t } from "@/data/i18n";

export default function AIWorkflowSection() {
  const { locale } = useLang();
  const { stats, cases } = getAIWorkflow(locale);
  const ui = t(locale);

  return (
    <section id="ai" className="mb-24 scroll-mt-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {ui.aiTitle}
        </h2>
      </div>

      <p className="mb-8 text-sm leading-relaxed">{ui.aiSub}</p>

      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-card-border/50 p-4 text-center">
            <div className="font-mono text-2xl font-bold text-accent">{stat.value}</div>
            <div className="mt-1 text-xs font-medium text-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <ol className="group/list">
        {cases.map((c) => (
          <li key={c.title} className="mb-8">
            <div className="group relative rounded-lg transition-all lg:-mx-4 lg:p-4 lg:hover:bg-card/50 lg:hover:shadow-inner lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
              <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                {c.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted/80">
                {c.scale} · {c.duration}
              </p>
              <p className="mt-2 text-sm leading-relaxed">{c.description}</p>

              {c.metrics && (
                <ul className="mt-2 space-y-0.5 text-xs">
                  {c.metrics.map((m) => (
                    <li key={m}>— {m}</li>
                  ))}
                </ul>
              )}

              <div className="mt-3 flex flex-wrap items-center gap-4">
                {c.liveUrl && (
                  <a
                    href={c.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    {ui.aiLive} <ArrowUpRight size={12} />
                  </a>
                )}
                {c.blogUrl && (
                  <a
                    href={c.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    <BookOpen size={12} /> {ui.aiBlog}
                  </a>
                )}
              </div>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {c.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
