import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PressSection from "@/components/PressSection";
import SleepPhilosophy from "@/components/SleepPhilosophy";
import CollectionsGrid from "@/components/CollectionsGrid";
import FeaturedReviews from "@/components/FeaturedReviews";
import FounderNote from "@/components/FounderNote";
import TwelveMoonsClub from "@/components/TwelveMoonsClub";
import MaterialsSection from "@/components/MaterialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#f9f9f7]">
      <Navigation />
        <HeroSection />
        <FeaturedReviews />
        <PressSection />
          <SleepPhilosophy />
            
          <MaterialsSection />
              <CollectionsGrid />
            <FounderNote />
      <TwelveMoonsClub />
      <Footer />
    </div>
  );
}
