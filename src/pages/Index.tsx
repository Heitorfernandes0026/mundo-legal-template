import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoBladeSection from "@/components/MetodoBladeSection";
import AboutSection from "@/components/AboutSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FeedbackSection from "@/components/FeedbackSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PartnersBar from "@/components/PartnersBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetodoBladeSection />
      <AboutSection />
      <SuccessStoriesSection />
      <FeedbackSection />
      <MarqueeBanner />
      <PlansSection />
      <FAQSection />
      <ContactSection />
      <PartnersBar />
    </div>
  );
};

export default Index;
