"use client";

import { Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { t } from "@/data/i18n";

export default function ContactSection() {
  const { locale } = useLang();
  const profile = getProfile(locale);
  const ui = t(locale);

  return (
    <section id="contact" className="mb-16 scroll-mt-24">
      <p className="mb-4 max-w-md text-sm leading-relaxed">{ui.contactSub}</p>
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-2 rounded border border-accent/40 px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
      >
        <Mail size={15} /> {ui.contactBtn}
      </a>
      <p className="mt-10 font-mono text-xs italic text-muted/70">
        &ldquo;{ui.contactQuote}&rdquo;
      </p>
      <footer className="mt-12 text-xs text-muted/60">
        <p>{ui.footerNote}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} {ui.footerCopy}
        </p>
      </footer>
    </section>
  );
}
