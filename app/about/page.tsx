import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import QuoteSection from "@/components/QuoteSection";

export const metadata: Metadata = {
  title: "About — Jakub Zakrzewski",
  description:
    "About Jakub Zakrzewski, a Warsaw-based product designer working across strategy, systems and interface design.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <div className="mx-auto max-w-6xl">
        <HomeHero />
      </div>
      <QuoteSection />
      <div className="mx-auto max-w-6xl">
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  );
}
