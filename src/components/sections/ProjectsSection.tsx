"use client";

import { ArrowUpRight, Lock, Star } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { getProjects, Project } from "@/data/projects";
import { t } from "@/data/i18n";

function ProjectRow({ project, showMetrics }: { project: Project; showMetrics?: boolean }) {
  const Wrapper = project.url ? "a" : "div";
  const wrapperProps = project.url
    ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <li className="mb-8">
      <Wrapper
        {...wrapperProps}
        className="group relative block rounded-lg transition-all lg:-mx-4 lg:p-4 lg:hover:bg-card/50 lg:hover:shadow-inner lg:group-hover/list:opacity-60 lg:hover:!opacity-100"
      >
        <h3 className="flex items-baseline gap-1.5 font-medium text-foreground">
          <span className="transition-colors group-hover:text-accent">
            {project.name}
          </span>
          {project.url ? (
            <ArrowUpRight
              size={14}
              className="shrink-0 translate-y-0.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          ) : (
            <Lock size={12} className="shrink-0 text-muted/60" />
          )}
        </h3>
        {project.company && (
          <p className="mt-0.5 text-xs text-accent/80">{project.company}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed">{project.description}</p>

        {showMetrics && project.metrics && (
          <ul className="mt-3 space-y-1">
            {project.metrics.map((m) => (
              <li key={m} className="flex items-start gap-2 text-xs">
                <Star size={10} className="mt-1 shrink-0 text-accent" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Wrapper>
    </li>
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
    <section id="projects" className="mb-24 scroll-mt-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {ui.projTitle}
        </h2>
      </div>

      <p className="mb-8 text-sm">{ui.projSub}</p>

      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
        {ui.projFeatured}
      </h3>
      <ol className="group/list mb-12">
        {featured.map((p) => (
          <ProjectRow key={p.name} project={p} showMetrics />
        ))}
      </ol>

      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
        {ui.projMain}
      </h3>
      <ol className="group/list mb-12">
        {main.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </ol>

      <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground">
        {ui.projSide}
      </h3>
      <ol className="group/list">
        {side.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </ol>
    </section>
  );
}
