import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Video, FileText, Users, TrendingUp } from "lucide-react";

const resources = [
  {
    category: "Getting Started",
    icon: BookOpen,
    items: [
      {
        title: "Freelancer's Tax Guide",
        description: "Essential tax tips for independent contractors",
        url: "#",
        type: "Article"
      },
      {
        title: "Setting Your First Rates",
        description: "A beginner's guide to pricing your services",
        url: "#",
        type: "Guide"
      },
      {
        title: "Building Client Trust",
        description: "How to establish credibility as a new gig worker",
        url: "#",
        type: "Article"
      }
    ]
  },
  {
    category: "Marketing & Growth",
    icon: TrendingUp,
    items: [
      {
        title: "Social Media for Gig Workers",
        description: "Grow your client base through strategic posting",
        url: "#",
        type: "Video Course"
      },
      {
        title: "Client Retention Strategies",
        description: "Keep your best clients coming back",
        url: "#",
        type: "Webinar"
      },
      {
        title: "Referral Program Templates",
        description: "Ready-to-use templates for word-of-mouth growth",
        url: "#",
        type: "Templates"
      }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Users,
    items: [
      {
        title: "TaskRabbit",
        description: "Find local handyman and household tasks",
        url: "https://taskrabbit.com",
        type: "Platform",
        affiliate: true
      },
      {
        title: "Care.com",
        description: "Connect with families needing childcare and eldercare",
        url: "https://care.com",
        type: "Platform",
        affiliate: true
      },
      {
        title: "Rover",
        description: "Pet sitting and dog walking opportunities",
        url: "https://rover.com",
        type: "Platform",
        affiliate: true
      }
    ]
  },
  {
    category: "Legal & Business",
    icon: FileText,
    items: [
      {
        title: "Service Agreement Templates",
        description: "Protect yourself with proper contracts",
        url: "#",
        type: "Templates"
      },
      {
        title: "Liability Insurance Guide",
        description: "Understanding insurance options for gig workers",
        url: "#",
        type: "Guide"
      },
      {
        title: "Business License Requirements",
        description: "Know when you need permits and licenses",
        url: "#",
        type: "Article"
      }
    ]
  }
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Helpful Resources</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed as a gig worker, from pricing strategies to business tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-gradient-card shadow-soft hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.category}
                </CardTitle>
                <CardDescription>
                  Essential resources for your journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <a 
                      href={item.url}
                      className="block p-3 rounded-lg bg-background hover:bg-accent/50 transition-colors duration-200"
                      target={item.url.startsWith('http') ? '_blank' : '_self'}
                      rel={item.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-1">
                          {item.affiliate && (
                            <span className="text-xs bg-warning/20 text-warning px-1.5 py-0.5 rounded">
                              Partner
                            </span>
                          )}
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                      <span className="text-xs font-medium text-primary">{item.type}</span>
                    </a>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block bg-primary text-primary-foreground p-8 shadow-glow">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Need Personalized Advice?</h3>
              <p className="text-primary-foreground/90">
                Join our community of successful gig workers and get expert guidance
              </p>
              <Button variant="secondary" size="lg">
                Join Our Community
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}