import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import AudienceSection from "@/components/AudienceSection";
import SecretsSection from "@/components/SecretsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhyMothersSection from "@/components/WhyMothersSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import { initScrollAnimations } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ProblemsSection />
        <AudienceSection />
        <SecretsSection />
        <AboutSection />
        <TestimonialsSection />
        <BeforeAfterSection />
        <WhyMothersSection />
        <ResultsSection />
        <FAQSection />
        
        {/* Registration Section */}
        <section id="register" className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary scroll-reveal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RegistrationForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
