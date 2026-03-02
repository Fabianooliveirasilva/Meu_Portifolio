import { FixedCta } from "@/components/fixed-cta";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { InteractiveSection } from "@/sections/interactive-section";
import { ProjectsSection } from "@/sections/projects-section";
import { QaCaseSection } from "@/sections/qa-case-section";
import { SkillsSection } from "@/sections/skills-section";

export default function Home() {
  return (
    <main>
      <FixedCta />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <QaCaseSection />
      <InteractiveSection />
      <ContactSection />
    </main>
  );
}
