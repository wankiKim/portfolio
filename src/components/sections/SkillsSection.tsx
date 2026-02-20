"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBar from "@/components/ui/SkillBar";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Skills</h2>
        <p className="text-muted">기술 스택</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: ci * 0.1 }}
            className="rounded-2xl border border-card-border bg-card p-5"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              {cat.category}
            </h3>
            {cat.skills.map((skill, si) => (
              <SkillBar key={skill.name} skill={skill} index={si} />
            ))}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
