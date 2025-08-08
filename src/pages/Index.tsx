import { Header } from "@/components/Header";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto pt-16 pb-24">
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-display text-foreground leading-tight">
              What to charge
            </h1>
            <p className="text-body text-muted-foreground max-w-lg mx-auto">
              Calculate your hourly rate based on your skills and experience level
            </p>
          </div>
          
          <PricingCalculator />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
