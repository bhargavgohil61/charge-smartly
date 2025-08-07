import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Facebook, Instagram, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Ad Space */}
        <div className="mb-12">
          <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
            <p className="text-muted-foreground text-sm mb-2">Advertisement</p>
            <div className="h-24 flex items-center justify-center">
              <p className="text-muted-foreground">Ad Space - 728x90</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">What to Charge</h3>
            <p className="text-secondary-foreground/80 text-sm">
              Empowering gig workers with smart pricing guidance. 
              Stop undervaluing your work and start earning what you deserve.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:hello@whattocharge.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Popular Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Babysitting Rates</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Dog Walking Prices</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Tutoring Rates</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">House Cleaning</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Pet Sitting</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Handyman Services</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#resources" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Helpful Guides</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Tax Tips</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Business Templates</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Insurance Guide</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Marketing Tips</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Platform Reviews</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">Partner With Us</a></li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/80">
          <div className="flex items-center gap-1">
            <span>© {currentYear} What to Charge. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for gig workers everywhere.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span>Affiliate Disclosure: We may earn commissions from purchases made through our links.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}