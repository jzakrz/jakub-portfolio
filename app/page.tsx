import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <HomeHero />
      <ProjectGrid />
    </main>
  );
}