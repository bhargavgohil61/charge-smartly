import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Gift, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function EmailSignupSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      toast.success("Welcome to What to Charge! Check your email for your pricing guide.");
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                <Gift className="h-8 w-8 text-yellow-300" />
                Free Pricing Guide
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Get our comprehensive guide to pricing your services + weekly tips delivered to your inbox
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {!isSubscribed ? (
                <div className="space-y-6">
                  {/* Benefits */}
                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4">
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">Weekly Tips</h4>
                      <p className="text-sm text-white/80">Pricing strategies delivered weekly</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <Gift className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">Free Resources</h4>
                      <p className="text-sm text-white/80">Exclusive guides and templates</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">No Spam</h4>
                      <p className="text-sm text-white/80">Unsubscribe anytime, we respect your inbox</p>
                    </div>
                  </div>

                  {/* Signup Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Label htmlFor="email" className="text-white mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                        />
                      </div>
                      <div className="sm:flex sm:items-end">
                        <Button 
                          type="submit"
                          disabled={isLoading || !email}
                          className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                          size="lg"
                        >
                          {isLoading ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2" />
                              Subscribing...
                            </>
                          ) : (
                            <>
                              Get Free Guide
                              <Mail className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <p className="text-xs text-white/70 text-center">
                      By subscribing, you agree to receive marketing emails. You can opt out at any time.
                    </p>
                  </form>

                  {/* Social Proof */}
                  <div className="text-center pt-6 border-t border-white/20">
                    <p className="text-white/80 mb-2">Join 12,000+ gig workers already maximizing their earnings</p>
                    <div className="flex justify-center items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-300" />
                        <span className="text-white/90">Trusted by professionals</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-300" />
                        <span className="text-white/90">100% free resources</span>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-300 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">You're All Set!</h3>
                  <p className="text-white/90 mb-4">
                    Check your email for your free pricing guide and welcome message.
                  </p>
                  <p className="text-sm text-white/70">
                    Don't see it? Check your spam folder or add us to your contacts.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}