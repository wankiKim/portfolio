"use client";

import { ArrowUpRight, Lock } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getProjects, Project } from "@/data/projects";
import { t } from "@/data/i18n";
import SectionHeader from "@/components/ui/SectionHeader";

function WindowCard({ project }: { project: Project }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col rounded-lg border border-card-border bg-card/60 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="flex items-center gap-1.5 border-b border-card-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-card-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-card-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-widest text-muted/70">
          {project.company ?? "personal"}
        </span>
        <span className="ml-auto">
          {project.url ? (
            <ArrowUpRight
              size={13}
              className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          ) : (
            <Lock size={11} className="text-muted/50" />
          )}
        </span>
      </div>

      {project.image && (
        <div className="aspect-video overflow-hidden border-b border-card-border bg-background/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-foreground transition-colors group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed">{project.description}</p>

        {project.metrics && (
          <ul className="mt-4 space-y-1 border-l border-accent/30 pl-3">
            {project.metrics.map((m) => (
              <li key={m} className="text-xs leading-relaxed">{m}</li>
            ))}
          </ul>
        )}

        <ul className="mt-4 flex flex-wrap gap-1.5 font-mono">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded bg-accent/10 px-2 py-0.5 text-[11px] text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

function CompactCard({ project }: { project: Project }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col overflow-hidden rounded-lg border border-card-border/60 bg-card/40 transition-all hover:-translate-y-0.5 hover:border-accent/30"
    >
      {project.image && (
        <div className="aspect-video overflow-hidden border-b border-card-border/60 bg-background/60">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
      <h3 className="flex items-baseline gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
        {project.name}
        {project.url ? (
          <ArrowUpRight size={12} className="shrink-0 text-muted group-hover:text-accent" />
        ) : (
          <Lock size={10} className="shrink-0 text-muted/50" />
        )}
      </h3>
      <p className="mt-2 flex-1 text-xs leading-relaxed">{project.description}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5 font-mono">
        {project.techStack.slice(0, 5).map((tech) => (
          <li key={tech} className="rounded bg-card-border/40 px-2 py-0.5 text-[10px] text-muted">
            {tech}
          </li>
        ))}
      </ul>
      </div>
    </Wrapper>
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
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHeader label={ui.projLabel} title={ui.projTitle} />

      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((p) => (
          <WindowCard key={p.name} project={p} />
        ))}
      </div>

      <div className="mt-20">
        <SectionHeader label={ui.projMoreLabel} title={ui.projMoreTitle} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {main.map((p) => (
            <CompactCard key={p.name} project={p} />
          ))}
        </div>

        <h3 className="mb-4 mt-12 font-mono text-xs uppercase tracking-[0.2em] text-muted/70">
          {ui.projSideTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {side.map((p) => (
            <CompactCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
