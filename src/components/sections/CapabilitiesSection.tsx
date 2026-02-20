"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Wallet,
  Globe,
  Code,
  Sparkles,
  Database,
  Server,
} from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { capabilities } from "@/data/capabilities";

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard,
  Users,
  Wallet,
  Globe,
  Code,
  Sparkles,
  Database,
  Server,
};

export default function CapabilitiesSection() {
  return (
    <SectionWrapper id="capabilities">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">
          Capabilities
        </h2>
        <p className="text-muted">핵심 역량</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap, i) => {
          const Icon = iconMap[cap.icon] || Code;
          return (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <Icon size={20} />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {cap.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted">
                {cap.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
