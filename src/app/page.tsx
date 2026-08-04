import Spotlight from "@/components/layout/Spotlight";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import LeftPanel from "@/components/layout/LeftPanel";
import Reveal from "@/components/ui/Reveal";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AIWorkflowSection from "@/components/sections/AIWorkflowSection";
import WritingSection from "@/components/sections/WritingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
        <LeftPanel />
        <main className="pt-12 lg:w-[52%] lg:py-24">
          <Reveal>
            <AboutSection />
          </Reveal>
          <Reveal>
            <ExperienceSection />
          </Reveal>
          <Reveal>
            <ProjectsSection />
          </Reveal>
          <Reveal>
            <AIWorkflowSection />
          </Reveal>
          <Reveal>
            <WritingSection />
          </Reveal>
          <Reveal>
            <ContactSection />
          </Reveal>
        </main>
      </div>
    </div>
  );
}
