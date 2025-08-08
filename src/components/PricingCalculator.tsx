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
    <Card className="max-w-2xl mx-auto shadow-xl border-border/50 bg-card/95 backdrop-blur">
      <CardContent className="p-8 lg:p-10">
        <div className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="jobType" className="text-sm font-semibold text-foreground">
              What service do you provide?
            </Label>
            <Select value={formData.jobType} onValueChange={(value) => setFormData({...formData, jobType: value})}>
              <SelectTrigger className="h-14 text-base border-2 hover:border-primary/50 transition-colors duration-200">
                <SelectValue placeholder="Select your service type" />
              </SelectTrigger>
              <SelectContent>
                {jobTypes.map((job) => (
                  <SelectItem key={job.value} value={job.value} className="text-base">
                    {job.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="experience" className="text-sm font-semibold text-foreground">
              Experience Level
            </Label>
            <Select value={formData.experience} onValueChange={(value) => setFormData({...formData, experience: value})}>
              <SelectTrigger className="h-14 text-base border-2 hover:border-primary/50 transition-colors duration-200">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value} className="text-base">
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="text-sm font-semibold text-foreground">
              Location Type
            </Label>
            <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
              <SelectTrigger className="h-14 text-base border-2 hover:border-primary/50 transition-colors duration-200">
                <SelectValue placeholder="Select your location type" />
              </SelectTrigger>
              <SelectContent>
                {locationTypes.map((location) => (
                  <SelectItem key={location.value} value={location.value} className="text-base">
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="hours" className="text-sm font-semibold text-foreground">
              Hours per day you want to work
            </Label>
            <Input
              id="hours"
              type="number"
              min="1"
              max="24"
              value={formData.hours}
              onChange={(e) => setFormData({...formData, hours: e.target.value})}
              placeholder="8"
              className="h-14 text-base border-2 hover:border-primary/50 focus:border-primary transition-colors duration-200"
            />
          </div>

          <Button 
            onClick={calculatePricing} 
            className="w-full h-14 text-base font-semibold shadow-elegant hover:shadow-xl transition-all duration-300" 
            disabled={!formData.jobType || !formData.experience || !formData.location || isCalculating}
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Calculating your rate...
              </>
            ) : (
              "Calculate My Rate"
            )}
          </Button>

          {result && (
            <div className="mt-10 p-8 bg-gradient-card rounded-xl border-2 border-border/50 shadow-lg">
              <h3 className="text-subheading text-foreground mb-6">Your Recommended Rates</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-1">${result.hourlyRate}</div>
                  <div className="text-caption">per hour</div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="text-3xl font-bold text-primary mb-1">${result.dailyRate}</div>
                  <div className="text-caption">per day</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Professional Pricing Tips</h4>
                <ul className="space-y-3">
                  {result.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start leading-relaxed">
                      <span className="text-primary mr-3 mt-1 font-bold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}