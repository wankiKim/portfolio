"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineCard from "@/components/ui/TimelineCard";
import { careers } from "@/data/career";
import { profile } from "@/data/profile";

const INITIAL_COUNT = 3;

export default function AboutSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCareers = showAll ? careers : careers.slice(0, INITIAL_COUNT);

  return (
    <SectionWrapper id="about">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">About</h2>
        <p className="text-muted">{profile.title}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        {/* Profile summary */}
        <div>
          <div className="rounded-2xl border border-card-border bg-card p-6">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent">
              {profile.name[0]}
            </div>
            <h3 className="mb-1 text-lg font-semibold text-foreground">
              {profile.name}
            </h3>
            <p className="mb-4 text-sm text-muted">{profile.title}</p>
            <div className="space-y-2 text-sm text-muted">
              <p>
                <span className="text-foreground">Email:</span>{" "}
                {profile.email}
              </p>
              <p>
                <span className="text-foreground">Location:</span>{" "}
                {profile.location}
              </p>
              <p>
                <span className="text-foreground">GitHub:</span>{" "}
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @{profile.github}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Career timeline */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            경력 타임라인
          </h3>
          <div>
            {visibleCareers.map((career, i) => (
              <TimelineCard key={career.company + career.period} career={career} index={i} />
            ))}
          </div>
          {careers.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 rounded-full border border-card-border px-5 py-2 text-sm text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              {showAll
                ? "접기"
                : `+ ${careers.length - INITIAL_COUNT}개 더보기`}
            </button>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
