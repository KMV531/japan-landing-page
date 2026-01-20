import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import Footer from "@/sections/Footer";
import GaleyPhoto from "@/sections/GaleryPhoto";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CulturalHighlights />
      <DebunkingMyths />
      <GaleyPhoto />
      <Footer />
    </main>
  );
}

export default HomePage;
