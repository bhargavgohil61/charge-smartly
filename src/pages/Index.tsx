import { Header } from "@/components/Header";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              What to charge
            </h1>
            <p className="text-muted-foreground text-lg">
              Calculate your hourly rate based on your skills and experience
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
