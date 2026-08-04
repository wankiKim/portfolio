"use client";

import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { t } from "@/data/i18n";
import { Github, Mail, BookOpen } from "lucide-react";

export default function ContactSection() {
  const { locale } = useLang();
  const profile = getProfile(locale);
  const ui = t(locale);

  return (
    <section id="contact" className="border-t border-card-border/40">
      <div className="mx-auto max-w-6xl px-6 py-28 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {ui.contactTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed">
          {ui.contactSub}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-9 inline-block rounded border border-accent/50 bg-accent/10 px-7 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-background"
        >
          {ui.contactBtn}
        </a>

        <p className="mt-14 font-mono text-xs italic text-muted/60">
          &ldquo;{ui.contactQuote}&rdquo;
        </p>

        <div className="mt-14 flex items-center justify-center gap-5">
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://wankikim.github.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="text-muted transition-colors hover:text-accent"
          >
            <BookOpen size={18} />
          </a>
        </div>

        <footer className="mt-10 font-mono text-[11px] text-muted/50">
          <p>{ui.footerNote}</p>
          <p className="mt-1">© {new Date().getFullYear()} {ui.footerCopy}</p>
        </footer>
      </div>
    </section>
  );
}
