import { HeroSection } from "@/components/HeroSection";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ResourcesSection } from "@/components/ResourcesSection";
import { EmailSignupSection } from "@/components/EmailSignupSection";
import { Footer } from "@/components/Footer";
import { AdBanner } from "@/components/AdBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header Ad Banner */}
      <div className="sticky top-0 z-50 bg-background border-b shadow-sm">
        <AdBanner size="leaderboard" className="py-2" />
      </div>

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

      {/* Side Ad - Desktop Only */}
      <div className="hidden xl:block fixed right-4 top-1/2 transform -translate-y-1/2 z-10">
        <AdBanner size="rectangle" />
      </div>

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
