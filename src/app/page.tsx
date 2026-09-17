import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import Themes from "@/components/Themes";
import Timeline from "@/components/Timeline";
import RewardsAndTakeaways from "@/components/RewardsAndTakeaways";
import FAQ from "@/components/FAQ";
import InteractiveBackground from "@/components/InteractiveBackground";
import Floating3DBackground from "@/components/Floating3DBackground";
import Globe from "@/components/Globe";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden overflow-x-hidden w-full max-w-[100vw] selection:bg-blue-500/30">
      <InteractiveBackground />
      <Floating3DBackground />
      <Globe />
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <Themes />
      <Timeline />
      <RewardsAndTakeaways />
      <FAQ />
    </main>
  );
}
