import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Calendar, ArrowRight } from "lucide-react";

export function DemoGallery() {
  const [selectedDemo, setSelectedDemo] = useState<number | null>(null);

  const demos = [
    {
      title: "Cold Email Engine",
      description: "Watch how we generate 300% more qualified leads",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-cold-email",
      impact: "+285% qualified leads",
      category: "Revenue"
    },
    {
      title: "AI Support Assistant",
      description: "See 24/7 customer support that never sleeps",
      thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-support",
      impact: "65% ticket deflection",
      category: "Support"
    },
    {
      title: "Invoice OCR + Approval Bot",
      description: "Automated invoice processing in under 30 seconds",
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-invoice",
      impact: "90% faster processing",
      category: "Finance"
    },
    {
      title: "Lead Scoring Engine",
      description: "AI that identifies your best prospects automatically",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-scoring",
      impact: "+45% conversion rate",
      category: "Revenue"
    },
    {
      title: "Meeting Scheduler",
      description: "Intelligent booking that respects time zones",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-scheduler",
      impact: "8hrs/week saved",
      category: "Operations"
    },
    {
      title: "Document Classifier",
      description: "Sort and organize files with 99% accuracy",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      loomUrl: "https://www.loom.com/share/placeholder-classifier",
      impact: "99% accuracy rate",
      category: "Operations"
    }
  ];

  return (
    <section className="py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See our <span className="text-gradient">automations</span> in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real demos from real implementations. No fluff, just results.
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {demos.map((demo, index) => (
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
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {demo.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                    {demo.impact}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{demo.title}</h3>
                <p className="text-muted-foreground text-sm">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            <Calendar className="w-5 h-5 mr-3" />
            Book Your Custom Demo
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>

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
                    Integrates with your existing CRM, email tools, and workflows.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expected impact</h4>
                  <p className="text-sm text-muted-foreground">
                    {demos[selectedDemo].impact}
                  </p>
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
    </section>
  );
}