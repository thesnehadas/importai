import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Filter } from "lucide-react";

export default function Demos() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const demos = [
    {
      title: "Cold Email Engine",
      description: "AI-powered cold outreach that generates 300% more qualified leads through personalized sequences and smart follow-ups.",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-cold-email",
      category: "Revenue",
      impact: "+285% qualified leads",
      features: ["Personalized templates", "Smart timing", "A/B testing", "CRM integration"]
    },
    {
      title: "AI Support Assistant",
      description: "24/7 intelligent customer support that handles common queries, escalates complex issues, and learns from every interaction.",
      thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-support",
      category: "Support",
      impact: "65% ticket deflection",
      features: ["Natural language processing", "Knowledge base integration", "Smart routing", "Performance analytics"]
    },
    {
      title: "Invoice OCR + Approval Bot",
      description: "Automated invoice processing that extracts data, validates against purchase orders, and routes for approval.",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-invoice",
      category: "Finance",
      impact: "90% faster processing",
      features: ["OCR technology", "Validation rules", "Approval workflows", "Audit trails"]
    },
    {
      title: "Lead Scoring Engine",
      description: "AI that analyzes visitor behavior, engagement patterns, and demographic data to identify your best prospects.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-scoring",
      category: "Revenue",
      impact: "+45% conversion rate",
      features: ["Behavioral tracking", "Predictive scoring", "Real-time updates", "Sales integration"]
    },
    {
      title: "Meeting Scheduler",
      description: "Intelligent booking system that respects time zones, preferences, and availability to eliminate scheduling back-and-forth.",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-scheduler",
      category: "Operations",
      impact: "8hrs/week saved",
      features: ["Time zone handling", "Calendar integration", "Buffer management", "Automated reminders"]
    },
    {
      title: "Document Classifier",
      description: "AI system that automatically sorts, tags, and organizes documents based on content with 99% accuracy.",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-classifier",
      category: "Operations",
      impact: "99% accuracy rate",
      features: ["Content analysis", "Auto-tagging", "Smart filing", "Compliance tracking"]
    }
  ];

  const categories = ["all", "Revenue", "Support", "Finance", "Operations"];
  const filteredDemos = filter === "all" ? demos : demos.filter(demo => demo.category === filter);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Live <span className="text-gradient">Demo Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See real automations in action. Each demo shows actual implementations with measurable results.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDemos.map((demo, index) => (
              <div 
                key={index}
                className="glass-card group cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedDemo(index)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <img 
                    src={demo.thumbnail} 
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{demo.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white">{demo.impact}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{demo.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {demo.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {demo.features.slice(0, 2).map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {demo.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{demo.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to build your custom automation?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your specific use case and show you exactly how these solutions would work for your business.
          </p>
          <Button variant="hero" size="lg">
            <Calendar className="w-5 h-5 mr-3" />
            Book Your Custom Demo
          </Button>
        </div>
      </section>

      {/* Demo Modal */}
      <Dialog open={selectedDemo !== null} onOpenChange={() => setSelectedDemo(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedDemo !== null ? demos[selectedDemo].title : ""}
            </DialogTitle>
          </DialogHeader>
          
          {selectedDemo !== null && (
            <div className="space-y-6">
              {/* Video Placeholder */}
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Loom video: {demos[selectedDemo].loomUrl}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Replace with actual Loom embed
                  </p>
                </div>
              </div>

              {/* Demo Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">What it does</h4>
                  <p className="text-sm text-muted-foreground">
                    {demos[selectedDemo].description}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Where it plugs in</h4>
                  <p className="text-sm text-muted-foreground">
                    Integrates seamlessly with your existing tools and workflows. No disruption to current processes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expected impact</h4>
                  <p className="text-sm text-muted-foreground">
                    {demos[selectedDemo].impact}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-2">
                  {demos[selectedDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4">
                <Button variant="hero" size="lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Demo for This Solution
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}