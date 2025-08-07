import { Button } from "@/components/ui/button";
import { ArrowDown, DollarSign, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  const scrollToCalculator = () => {
    document.getElementById('pricing-calculator')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <DollarSign className="h-8 w-8 text-white/20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Users className="h-6 w-6 text-white/20" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <TrendingUp className="h-10 w-10 text-white/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                What to
                <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                  {" "}Charge
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Smart Pricing Guidance for Gig Workers and Freelancers
              </p>
              <p className="text-lg text-white/80 max-w-lg">
                Stop undervaluing your work. Get instant, AI-powered pricing suggestions 
                tailored to your experience, location, and service type.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Gig Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-white/80">Service Types</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-sm text-white/80">Earned by Users</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToCalculator}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Calculate My Rate
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Diverse gig workers including nanny, dog walker, tutor, and house cleaner"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Price Cards */}
            <div className="absolute -top-4 -left-4 bg-white text-primary p-3 rounded-lg shadow-lg animate-float">
              <div className="text-sm font-medium">Nanny</div>
              <div className="text-lg font-bold">$18/hr</div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-success text-white p-3 rounded-lg shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="text-sm font-medium">Tutor</div>
              <div className="text-lg font-bold">$35/hr</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
}