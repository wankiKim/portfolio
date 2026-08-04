"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/data/i18n";
import TerminalBoot from "@/components/layout/TerminalBoot";

export default function HeroSection() {
  const { locale } = useLang();
  const ui = t(locale);

  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-16 pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {ui.heroPill}
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {ui.heroLine1}
            <br />
            {ui.heroLine2}
            <br />
            <span className="text-accent">{ui.heroLine3accent}</span>
            {ui.heroLine3rest}
          </h1>

          <p className="mt-7 max-w-xl leading-relaxed">{ui.heroPara}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded bg-accent px-5 py-2.5 font-mono text-sm font-medium text-background transition-colors hover:bg-accent-dim"
            >
              {ui.heroCta1}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://wankikim.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              {ui.heroCta2}
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <TerminalBoot />
        </motion.div>
      </div>
    </section>
  );
}
