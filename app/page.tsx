import LoaderWrapper from "@/components/Loader/LoaderWrapper";
import { AboutSection } from "@/sections/AboutSection";
import Copyright from "@/components/Copyright";
import CulturalHighlights from "@/sections/culturalHighlights";
import DebunkingMyths from "@/sections/DebunkingMyths";
import Footer from "@/sections/Footer";
import GalleryPhoto from "@/sections/GalleryPhoto";
import HeroSection from "@/sections/HeroSection";

function HomePage() {
  return (
    <main>
      <div className="block lg:hidden">
        <LoaderWrapper />
      </div>
      {/* We remove 'hidden' so mobile users who passed the troll can see it */}
      <div className="block">
        <HeroSection />
        <AboutSection />

        {/* If you want to hide specific sections on mobile but keep them on Desktop, 
            keep 'hidden lg:block' ONLY on those specific components */}
        <div className="hidden lg:block">
          <CulturalHighlights />
          <DebunkingMyths />
          <GalleryPhoto />
          <Footer />
        </div>

        <Copyright />
      </div>
    </main>
  );
}

export default HomePage;
