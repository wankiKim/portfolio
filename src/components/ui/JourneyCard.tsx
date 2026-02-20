"use client";

import { motion } from "framer-motion";
import { Code, Globe, Layers, Sparkles } from "lucide-react";
import { JourneyPhase } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Globe,
  Layers,
  Sparkles,
};

interface JourneyCardProps {
  phase: JourneyPhase;
  index: number;
}

export default function JourneyCard({ phase, index }: JourneyCardProps) {
  const Icon = iconMap[phase.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
          <Icon size={20} />
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Phase {phase.phase}
          </span>
          <p className="text-xs text-muted">{phase.period}</p>
        </div>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">
        {phase.title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-muted">
        {phase.description}
      </p>

      <ul className="space-y-1.5">
        {phase.highlights.map((hl, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {hl}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
