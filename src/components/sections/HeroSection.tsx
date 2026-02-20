"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-mono text-sm tracking-wider text-accent"
        >
          {profile.name} · {profile.nameEn}
        </motion.p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.headline}
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {profile.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-muted"
            >
              {kw}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#about"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dim"
          >
            더 알아보기
          </a>
          <a
            href="#contact"
            className="rounded-full border border-card-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            연락하기
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
