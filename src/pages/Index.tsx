import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrustSection from "@/components/TrustSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EmergencyBanner />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TrustSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
