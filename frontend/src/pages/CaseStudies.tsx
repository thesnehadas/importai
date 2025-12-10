import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp, Users, Calendar } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "techflow-lead-automation",
      title: "TechFlow Solutions: 3x Lead Conversion with AI",
      company: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge: "Manual lead qualification was eating up 20+ hours per week, and qualified leads were falling through the cracks.",
      solution: "Deployed AI lead scoring + automated nurture sequences",
      results: [
        { metric: "+285%", description: "qualified leads" },
        { metric: "20 hrs", description: "saved per week" },
        { metric: "+45%", description: "conversion rate" }
      ],
      timeline: "6 weeks",
      roi: "650%",
      description: "How a growing SaaS company automated their entire lead qualification process and tripled conversions.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: ["Revenue", "Lead Generation", "B2B SaaS"]
    },
    {
      id: "growthcorp-finance-automation",
      title: "GrowthCorp: 90% Faster Invoice Processing",
      company: "GrowthCorp",
      industry: "Manufacturing",
      challenge: "Invoice processing took 3-5 days, causing cash flow issues and vendor relationship strain.",
      solution: "AI-powered OCR + automated approval workflows",
      results: [
        { metric: "90%", description: "faster processing" },
        { metric: "15 hrs", description: "saved per week" },
        { metric: "99.2%", description: "accuracy rate" }
      ],
      timeline: "4 weeks",
      roi: "420%",
      description: "Transforming accounts payable from a bottleneck into a competitive advantage.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tags: ["Finance", "Automation", "Manufacturing"]
    },
    {
      id: "servicepro-support-ai",
      title: "ServicePro: 65% Ticket Deflection with AI",
      company: "ServicePro",
      industry: "Customer Service",
      challenge: "Support team was overwhelmed with 500+ tickets daily, response times were suffering.",
      solution: "AI support assistant + intelligent ticket routing",
      results: [
        { metric: "65%", description: "ticket deflection" },
        { metric: "2.5x", description: "faster response" },
        { metric: "+40%", description: "satisfaction score" }
      ],
      timeline: "5 weeks",
      roi: "380%",
      description: "How AI transformed customer support from reactive to proactive, improving satisfaction while reducing costs.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
      tags: ["Support", "AI Assistant", "Customer Service"]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Real Results</span> from Real Companies
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are saving time, reducing costs, and accelerating growth with AI automation.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center">
                          <div className="text-2xl font-bold text-gradient mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{study.timeline} timeline</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>{study.roi} ROI</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{study.industry}</span>
                      </div>
                    </div>

                    <Button variant="outline" className="group">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="text-white font-semibold">{study.company}</div>
                        <div className="text-white/80 text-sm">{study.industry}</div>
                      </div>
                    </div>
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
          <h2 className="text-3xl font-bold mb-6">Ready to write your success story?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can transform your business operations and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Calendar className="w-5 h-5 mr-3" />
              Book Your Strategy Call
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/demos">
                See Live Demos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}