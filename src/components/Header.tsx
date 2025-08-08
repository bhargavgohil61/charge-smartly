import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-foreground tracking-tight">
              What to charge
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Calculator
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Resources
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Sign In
            </Button>
            <Button size="sm" className="shadow-sm hover:shadow-md transition-shadow duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};