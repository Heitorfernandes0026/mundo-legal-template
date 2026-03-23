import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetodoBladeSection from "@/components/MetodoBladeSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import FeedbackSection from "@/components/FeedbackSection";
import TransformationsGallery from "@/components/TransformationsGallery";
import MarqueeBanner from "@/components/MarqueeBanner";
import PlansSection from "@/components/PlansSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import PartnersBar from "@/components/PartnersBar";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MetodoBladeSection />
      <SuccessStoriesSection />
      <FeedbackSection />
      <MarqueeBanner />
      <PlansSection />
      <AboutSection />
      <ContactSection />
      <PartnersBar />
      <FAQSection />
    </div>
  );
};

export default Index;
