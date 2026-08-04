import Spotlight from "@/components/layout/Spotlight";
import LeftPanel from "@/components/layout/LeftPanel";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AIWorkflowSection from "@/components/sections/AIWorkflowSection";
import WritingSection from "@/components/sections/WritingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:flex lg:justify-between lg:gap-4 lg:py-0">
        <LeftPanel />
        <main className="pt-12 lg:w-[52%] lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <AIWorkflowSection />
          <WritingSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
