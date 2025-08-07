import { HeroSection } from "@/components/HeroSection";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ResourcesSection } from "@/components/ResourcesSection";
import { EmailSignupSection } from "@/components/EmailSignupSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Pricing Calculator Section */}
      <section id="pricing-calculator" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Calculate Your Perfect Rate</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get personalized pricing suggestions based on your experience, location, and service type
            </p>
          </div>
          <PricingCalculator />
        </div>
      </section>

      {/* Resources Section */}
      <ResourcesSection />

      {/* Email Signup Section */}
      <EmailSignupSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
