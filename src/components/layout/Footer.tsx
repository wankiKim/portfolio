"use client";

import { Github, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/data/i18n";

export default function Footer() {
  const { locale } = useLang();
  const ui = t(locale);

  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {ui.footerCopy}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wankiKim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:jerry10247@gmail.com"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
