"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useScrollSection } from "@/hooks/useScrollSection";
import { useLang } from "@/context/LanguageContext";

const NAV_ITEMS = [
  { id: "ai-workflow", label: "AI Dev" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
  { id: "capabilities", label: "Capabilities" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const { activeSection } = useScrollSection();
  const { locale, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-card-border/50 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm font-bold text-foreground transition-colors hover:text-accent"
        >
          WK.
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-all ${
                    activeSection === item.id
                      ? "bg-accent/10 text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="ml-2 flex items-center gap-1.5 rounded-lg border border-card-border px-2.5 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/50 hover:text-accent"
            title={locale === "ko" ? "Switch to English" : "한국어로 전환"}
          >
            <Languages size={14} />
            {locale === "ko" ? "EN" : "KO"}
          </button>
        </div>

        {/* Mobile: lang toggle + menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            className="flex items-center gap-1 rounded-lg border border-card-border px-2 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/50 hover:text-accent"
          >
            <Languages size={14} />
            {locale === "ko" ? "EN" : "KO"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-card-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
