"use client";

import { motion } from "framer-motion";
import { Career } from "@/types";

interface TimelineCardProps {
  career: Career;
  index: number;
}

export default function TimelineCard({ career, index }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative border-l-2 border-card-border pl-8 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-accent bg-background" />

      <div className="mb-1 flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          {career.company}
        </h3>
        <span className="rounded-full bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
          {career.duration}
        </span>
      </div>

      <p className="mb-2 text-sm text-muted">
        {career.role} · {career.period}
      </p>

      <ul className="mb-3 space-y-1">
        {career.descriptions.map((desc, i) => (
          <li key={i} className="text-sm text-muted">
            <span className="mr-2 text-accent">▸</span>
            {desc}
          </li>
        ))}
      </ul>

      {career.techStack && (
        <div className="flex flex-wrap gap-1.5">
          {career.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-card px-2 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
