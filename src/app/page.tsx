import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Timeline from "@/components/Timeline";
import Prizes from "@/components/Prizes";
import Evaluation from "@/components/Evaluation";
import FAQ from "@/components/FAQ";
import InteractiveBackground from "@/components/InteractiveBackground";
import Globe from "@/components/Globe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden overflow-x-hidden w-full max-w-[100vw] selection:bg-blue-500/30">
      <InteractiveBackground />
      <Globe />
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <FeaturesGrid />
      <Timeline />
      <Prizes />
      <Evaluation />
      <FAQ />
    </main>
  );
}
