"use client";

import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getWriting } from "@/data/writing";
import { t } from "@/data/i18n";

export default function WritingSection() {
  const { locale } = useLang();
  const posts = getWriting(locale);
  const ui = t(locale);

  return (
    <section id="writing" className="mb-24 scroll-mt-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {ui.writingTitle}
        </h2>
      </div>

      <p className="mb-8 text-sm">{ui.writingSub}</p>

      <ol className="group/list">
        {posts.map((post) => (
          <li key={post.url} className="mb-6">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid gap-1 rounded-lg transition-all sm:grid-cols-8 sm:gap-6 lg:-mx-4 lg:p-4 lg:hover:bg-card/50 lg:hover:shadow-inner lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
            >
              <div className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-muted/80 sm:col-span-2">
                {post.date}
              </div>
              <div className="sm:col-span-6">
                <h3 className="flex items-baseline gap-1.5 text-sm font-medium leading-snug text-foreground">
                  <span className="transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 translate-y-0.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </h3>
                <p className="mt-1 text-xs text-accent/80">{post.tag}</p>
              </div>
            </a>
          </li>
        ))}
      </ol>

      <a
        href="https://wankikim.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent"
      >
        {ui.writingAll}
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </section>
  );
}
