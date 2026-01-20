import { AboutSection } from "@/sections/AboutSection";
import CulturalHighlights from "@/sections/culturalHighlights";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CulturalHighlights />
    </main>
  );
}

export default HomePage;
