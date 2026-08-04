"use client";

import { useLang } from "@/context/LanguageContext";
import { getCareers } from "@/data/career";
import { t } from "@/data/i18n";

export default function ExperienceSection() {
  const { locale } = useLang();
  const careers = getCareers(locale);
  const ui = t(locale);

  return (
    <section id="experience" className="mb-24 scroll-mt-24 lg:mb-36">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:sr-only">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
          {ui.expTitle}
        </h2>
      </div>

      <ol className="group/list">
        {careers.map((career) => (
          <li key={career.company + career.period} className="mb-10">
            <div className="group relative grid gap-1 rounded-lg transition-all sm:grid-cols-8 sm:gap-6 lg:p-4 lg:-mx-4 lg:hover:bg-card/50 lg:hover:shadow-inner lg:group-hover/list:opacity-60 lg:hover:!opacity-100">
              <div className="mb-1 mt-1 text-xs font-semibold uppercase tracking-wide text-muted/80 sm:col-span-2">
                {career.period}
              </div>
              <div className="sm:col-span-6">
                <h3 className="font-medium text-foreground">
                  {career.role}{" "}
                  <span className="text-muted">·</span>{" "}
                  <span className="transition-colors group-hover:text-accent">
                    {career.company}
                  </span>
                </h3>
                <ul className="mt-2 space-y-1">
                  {career.descriptions.map((desc) => (
                    <li key={desc} className="text-sm leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
                {career.techStack && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {career.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
