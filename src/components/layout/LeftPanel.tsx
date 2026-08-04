"use client";

import { useEffect, useState } from "react";
import { Github, Mail, BookOpen, ArrowUpRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { t } from "@/data/i18n";

const SECTION_IDS = ["about", "experience", "projects", "ai", "writing"];

export default function LeftPanel() {
  const { locale, toggle } = useLang();
  const profile = getProfile(locale);
  const ui = t(locale);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: ui.navAbout },
    { id: "experience", label: ui.navExperience },
    { id: "projects", label: ui.navProjects },
    { id: "ai", label: ui.navAI },
    { id: "writing", label: ui.navWriting },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed">{profile.headline}</p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center py-3"
                >
                  <span
                    className={`mr-4 h-px transition-all ${
                      active === item.id
                        ? "w-16 bg-foreground"
                        : "w-8 bg-card-border group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      active === item.id
                        ? "text-foreground"
                        : "text-muted group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8 flex items-center gap-5 lg:mt-0">
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-accent"
        >
          <Github size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-muted transition-colors hover:text-accent"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://wankikim.github.io"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Blog"
          className="text-muted transition-colors hover:text-accent"
        >
          <BookOpen size={20} />
        </a>
        <a
          href="https://exchange.agentmichael.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          Live Demo <ArrowUpRight size={12} />
        </a>
        <button
          onClick={toggle}
          className="rounded border border-card-border px-2 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-accent"
          aria-label="Toggle language"
        >
          {locale === "ko" ? "EN" : "KO"}
        </button>
      </div>
    </header>
  );
}
