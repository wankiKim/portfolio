"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import JourneyCard from "@/components/ui/JourneyCard";
import { useLang } from "@/context/LanguageContext";
import { getJourney } from "@/data/journey";
import { t } from "@/data/i18n";

export default function JourneySection() {
  const { locale } = useLang();
  const journeyPhases = getJourney(locale);
  const ui = t(locale);

  return (
    <SectionWrapper id="journey">
      <div className="mb-12">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Journey</h2>
        <p className="text-muted">{ui.journeySub}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {journeyPhases.map((phase, i) => (
          <JourneyCard key={phase.phase} phase={phase} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
