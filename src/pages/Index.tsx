import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoBladeSection from "@/components/MetodoBladeSection";
import AboutSection from "@/components/AboutSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import PartnersBar from "@/components/PartnersBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetodoBladeSection />
      <AboutSection />
      <SuccessStoriesSection />
      <PartnersBar />
    </div>
  );
};

export default Index;
