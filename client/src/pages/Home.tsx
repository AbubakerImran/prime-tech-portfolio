import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedBackground3D from '@/components/AnimatedBackground3D';
import ProjectsSection from '@/components/ProjectsSection';
import ReviewsSection from '@/components/ReviewsSection';
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Animated background */}
      <AnimatedBackground3D />

      {/* Content wrapper */}
      <div className="relative z-20">
        <Header />

        {/* Add padding to account for fixed header */}
        <div className="pt-16 md:pt-20">
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <CapabilitiesSection />
          <ProcessSection />
          <PartnersSection />
          <ReviewsSection />
          <ContactSection />
        </div>

        <Footer />
      </div>
    </div>
  );
}
