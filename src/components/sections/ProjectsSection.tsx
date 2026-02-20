"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { projects, Project } from "@/data/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPrivate = project.visibility === "private";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="mb-1 flex items-start justify-between">
        <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        {isPrivate ? (
          <Lock size={14} className="mt-1 shrink-0 text-muted" />
        ) : project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 shrink-0 text-muted transition-colors hover:text-accent"
          >
            <ExternalLink size={14} />
          </a>
        ) : null}
      </div>

      {project.company && (
        <p className="mb-2 text-xs text-accent">{project.company}</p>
      )}

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-card-border/50 px-2 py-0.5 text-xs text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Projects</h2>
        <p className="text-muted">주요 프로젝트</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
