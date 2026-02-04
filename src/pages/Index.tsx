import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoBladeSection from "@/components/MetodoBladeSection";
import AboutSection from "@/components/AboutSection";
import YellowBanner from "@/components/YellowBanner";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FeedbackSection from "@/components/FeedbackSection";
import PartnersBar from "@/components/PartnersBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetodoBladeSection />
      <AboutSection />
      <YellowBanner />
      <SuccessStoriesSection />
      <FeedbackSection />
      <PartnersBar />
    </div>
  );
};

export default Index;
