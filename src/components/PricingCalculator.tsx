import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Clock, MapPin, Star, TrendingUp } from "lucide-react";

const jobTypes = [
  { value: "babysitting", label: "Babysitting/Nanny", baseRate: 15 },
  { value: "dogwalking", label: "Dog Walking", baseRate: 20 },
  { value: "tutoring", label: "Tutoring", baseRate: 25 },
  { value: "housecleaning", label: "House Cleaning", baseRate: 18 },
  { value: "petsitting", label: "Pet Sitting", baseRate: 22 },
  { value: "eldercare", label: "Elder Care", baseRate: 28 },
  { value: "handyman", label: "Handyman Services", baseRate: 35 },
  { value: "gardening", label: "Gardening", baseRate: 24 },
];

const experienceLevels = [
  { value: "beginner", label: "Beginner (0-1 years)", multiplier: 0.8 },
  { value: "intermediate", label: "Intermediate (1-3 years)", multiplier: 1.0 },
  { value: "experienced", label: "Experienced (3-5 years)", multiplier: 1.3 },
  { value: "expert", label: "Expert (5+ years)", multiplier: 1.6 },
];

const locationTypes = [
  { value: "rural", label: "Rural Area", multiplier: 0.8 },
  { value: "suburban", label: "Suburban", multiplier: 1.0 },
  { value: "urban", label: "Urban/City", multiplier: 1.3 },
  { value: "metro", label: "Major Metro Area", multiplier: 1.6 },
];

interface PricingResult {
  hourlyRate: number;
  dailyRate: number;
  tips: string[];
}

export function PricingCalculator() {
  const [formData, setFormData] = useState({
    jobType: "",
    experience: "",
    location: "",
    hours: ""
  });
  const [result, setResult] = useState<PricingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePricing = () => {
    if (!formData.jobType || !formData.experience || !formData.location) {
      return;
    }

    setIsCalculating(true);

    // Simulate AI calculation delay
    setTimeout(() => {
      const job = jobTypes.find(j => j.value === formData.jobType);
      const exp = experienceLevels.find(e => e.value === formData.experience);
      const loc = locationTypes.find(l => l.value === formData.location);

      if (job && exp && loc) {
        const baseRate = job.baseRate;
        const adjustedRate = Math.round(baseRate * exp.multiplier * loc.multiplier);
        const dailyRate = adjustedRate * (parseInt(formData.hours) || 8);

        const tips = generateTips(formData.jobType, formData.experience, formData.location);

        setResult({
          hourlyRate: adjustedRate,
          dailyRate: dailyRate,
          tips
        });
      }

      setIsCalculating(false);
    }, 1500);
  };

  const generateTips = (jobType: string, experience: string, location: string): string[] => {
    const baseTips = [
      "Always communicate clearly about expectations upfront",
      "Consider offering package deals for regular clients",
      "Keep detailed records for tax purposes",
    ];

    const jobSpecificTips: Record<string, string[]> = {
      babysitting: [
        "Highlight any CPR or first aid certifications",
        "Offer light housekeeping as an add-on service",
        "Ask about overnight rates if applicable",
      ],
      dogwalking: [
        "Offer additional services like feeding or basic training",
        "Consider group walks to increase hourly earnings",
        "Build relationships with local veterinarians",
      ],
      tutoring: [
        "Specialize in high-demand subjects or test prep",
        "Offer virtual sessions to expand your client base",
        "Create study materials as value-added services",
      ],
    };

    return [...baseTips, ...(jobSpecificTips[jobType] || [])];
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calculator Form */}
        <Card className="bg-gradient-card shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" />
              Pricing Calculator
            </CardTitle>
            <CardDescription>
              Tell us about your service to get personalized rate suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="jobType">Service Type</Label>
              <Select value={formData.jobType} onValueChange={(value) => setFormData({...formData, jobType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="What service do you provide?" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((job) => (
                    <SelectItem key={job.value} value={job.value}>
                      {job.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="How experienced are you?" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location Type</Label>
              <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Where do you work?" />
                </SelectTrigger>
                <SelectContent>
                  {locationTypes.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hours">Expected Hours per Day (Optional)</Label>
              <Input
                id="hours"
                type="number"
                placeholder="8"
                value={formData.hours}
                onChange={(e) => setFormData({...formData, hours: e.target.value})}
                className="bg-background"
              />
            </div>

            <Button 
              onClick={calculatePricing}
              disabled={!formData.jobType || !formData.experience || !formData.location || isCalculating}
              className="w-full"
              variant="hero"
              size="lg"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Calculating...
                </>
              ) : (
                <>
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Calculate My Rate
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <Card className="bg-success-light border-success/20 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-success">
                <Star className="h-6 w-6" />
                Your Pricing Suggestions
              </CardTitle>
              <CardDescription>
                Based on your experience and location
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-primary mr-1" />
                    <span className="text-sm font-medium text-muted-foreground">Hourly Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-success">${result.hourlyRate}</div>
                </div>
                
                {formData.hours && (
                  <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="h-5 w-5 text-primary mr-1" />
                      <span className="text-sm font-medium text-muted-foreground">Daily Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-success">${result.dailyRate}</div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">💡 Pro Tips</h4>
                <ul className="space-y-2">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-success mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-warning-light rounded-lg border border-warning/20">
                <p className="text-sm text-warning-foreground">
                  <strong>Remember:</strong> These are suggestions based on general market data. 
                  Adjust based on your unique skills, local competition, and client needs.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}