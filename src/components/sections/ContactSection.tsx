"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLang } from "@/context/LanguageContext";
import { getProfile } from "@/data/profile";
import { t } from "@/data/i18n";

export default function ContactSection() {
  const { locale } = useLang();
  const profile = getProfile(locale);
  const ui = t(locale);

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/-/g, "")}`,
    },
    {
      icon: Github,
      label: "GitHub",
      value: `@${profile.github}`,
      href: `https://github.com/${profile.github}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: profile.location,
      href: null,
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Contact</h2>
        <p className="mb-12 text-muted">
          {ui.contactSub}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            const Wrapper = c.href ? "a" : "div";
            const linkProps = c.href
              ? {
                  href: c.href,
                  target: c.href.startsWith("http") ? "_blank" : undefined,
                  rel: c.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {};

            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Wrapper
                  {...linkProps}
                  className="flex items-center gap-4 rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {c.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-muted"
        >
          &ldquo;{ui.contactQuote}&rdquo;
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
