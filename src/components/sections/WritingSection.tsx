"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getWriting } from "@/data/writing";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

export default function WritingSection() {
  const { locale } = useLang();
  const posts = getWriting(locale);
  const ui = t(locale);

  return (
    <section id="writing" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeader
        label={ui.writingLabel}
        title={ui.writingTitle}
        action={
          <a
            href="https://wankikim.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            {ui.writingAll}
            <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        }
      />

      <ol>
        {posts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-1 border-b border-card-border/40 py-5 transition-colors first:pt-0 sm:grid-cols-8 sm:gap-6"
            >
              <div className="font-mono text-xs text-muted/70 sm:col-span-1 sm:pt-0.5">
                {post.date}
              </div>
              <div className="sm:col-span-7">
                <h3 className="flex items-baseline gap-1.5 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                  {post.title}
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 translate-y-0.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </h3>
                <p className="mt-1 font-mono text-[11px] text-accent/70">{post.tag}</p>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
