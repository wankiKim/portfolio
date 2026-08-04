"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock, Star } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useLang } from "@/context/LanguageContext";
import { getProjects, Project } from "@/data/projects";
import { t } from "@/data/i18n";

function ProjectLink({ project }: { project: Project }) {
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 shrink-0 text-muted transition-colors hover:text-accent"
      >
        <ExternalLink size={14} />
      </a>
    );
  }
  if (project.visibility === "private") {
    return <Lock size={14} className="mt-1 shrink-0 text-muted" />;
  }
  return null;
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group flex flex-col rounded-2xl border border-accent/20 bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
    >
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <ProjectLink project={project} />
      </div>

      {project.company && (
        <p className="mb-2 text-xs text-accent">{project.company}</p>
      )}

      <p className="mb-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {project.metrics && (
        <ul className="mb-4 flex-1 space-y-1.5">
          {project.metrics.map((m) => (
            <li key={m} className="flex items-start gap-2 text-xs text-muted">
              <Star size={11} className="mt-0.5 shrink-0 text-accent" />
              <span>{m}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-accent/10 px-2 py-0.5 text-xs text-accent/90"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group flex flex-col rounded-2xl border border-card-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${compact ? "p-4" : "p-5"}`}
    >
      <div className="mb-1 flex items-start justify-between gap-2">
        <h3
          className={`font-semibold text-foreground transition-colors group-hover:text-accent ${compact ? "text-sm" : "text-base"}`}
        >
          {project.name}
        </h3>
        <ProjectLink project={project} />
      </div>

      {project.company && (
        <p className="mb-2 text-xs text-accent">{project.company}</p>
      )}

      <p
        className={`mb-4 flex-1 leading-relaxed text-muted ${compact ? "text-xs" : "text-sm"}`}
      >
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
  const { locale } = useLang();
  const projects = getProjects(locale);
  const ui = t(locale);

  const featured = projects.filter((p) => p.category === "featured");
  const main = projects.filter((p) => p.category === "main");
  const side = projects.filter((p) => p.category === "side");

  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Projects</h2>
        <p className="text-muted">{ui.projSub}</p>
      </div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
        {ui.projFeatured}
      </h3>
      <div className="mb-14 grid gap-5 lg:grid-cols-2">
        {featured.map((project, i) => (
          <FeaturedCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
        {ui.projMain}
      </h3>
      <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {main.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
        {ui.projSide}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {side.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} compact />
        ))}
      </div>
    </SectionWrapper>
  );
}
