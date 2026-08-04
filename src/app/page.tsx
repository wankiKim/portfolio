import Spotlight from "@/components/layout/Spotlight";
import AnimatedBackground from "@/components/layout/AnimatedBackground";
import TopNav from "@/components/layout/TopNav";
import Reveal from "@/components/ui/Reveal";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AIWorkflowSection from "@/components/sections/AIWorkflowSection";
import WritingSection from "@/components/sections/WritingSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <Spotlight />
      <TopNav />
      <main>
        <HeroSection />
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
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
  );
}
