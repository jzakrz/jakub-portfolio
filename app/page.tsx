import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ProjectGrid from "@/components/ProjectGrid";
import QuoteSection from "@/components/QuoteSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-24 text-black">
      <Header />
      <div className="mx-auto max-w-6xl">
        <div id="home">
          <HomeHero />
        </div>

        <div id="projects">
          <ProjectGrid />
        </div>

        <QuoteSection />

        <div id="resume">
          <ExperienceSection />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}