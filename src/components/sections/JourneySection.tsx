"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import JourneyCard from "@/components/ui/JourneyCard";
import { journeyPhases } from "@/data/journey";

export default function JourneySection() {
  return (
    <SectionWrapper id="journey">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Journey</h2>
        <p className="text-muted">18년, 4단계의 성장 이야기</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {journeyPhases.map((phase, i) => (
          <JourneyCard key={phase.phase} phase={phase} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
