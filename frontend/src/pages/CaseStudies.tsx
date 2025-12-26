import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, TrendingUp, Users, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "case_studies";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Generate stars once - more prominent
  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.5,
    }));
  }, []);

  const handleBookConsultation = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      window.location.href = `${api}/go/contact`;
    }
  };

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const studies = JSON.parse(stored);
        // Sort: featured first, then by createdAt (newest first)
        const sorted = studies.sort((a: any, b: any) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return bDate - aDate; // Newest first
        });
        setCaseStudies(sorted);
      } catch (e) {
        console.error("Error loading case studies:", e);
      }
    } else {
      // Default case studies if none exist
      const defaultStudies = [
    {
      id: "jupiter-outbound",
      title: "Jupiter: Building a Multi-Channel Outbound Engine from Scratch",
      company: "Jupiter",
      industry: "YC S19",
      challenge: "Manual outbound was limiting growth to 30-40 brands per week. CEO spending 10+ hours weekly on cold emails.",
      solution: "Always-on outbound SDR coordinating email and LinkedIn without human handoffs",
      results: [
        { metric: "2,100+", description: "brands/week reached" },
        { metric: "24", description: "meetings booked" },
        { metric: "8 hrs", description: "CEO time saved/week" }
      ],
      timeline: "Aug 2025 - Present",
      roi: "Ongoing",
      description: "How Jupiter scaled brand outreach from 40/week to 2,100/week with coordinated email + LinkedIn automation.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: ["Revenue", "Outbound", "Multi-Channel"]
    },
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
      setCaseStudies(defaultStudies);
    }
  };

  // Convert detail format to listing format
  const formatForListing = (study: any) => {
    return {
      id: study.id,
      title: study.title,
      company: study.company || study.client,
      industry: study.industry || "",
      challenge: study.challenge || study.problem?.content?.substring(0, 100) + "...",
      solution: study.solutionShort || study.solution?.content?.substring(0, 100) + "...",
      results: study.resultsShort || [],
      timeline: study.timelineShort || study.timeline,
      roi: study.roi || "",
      description: study.description || study.solution?.content?.substring(0, 200) + "...",
      image: study.image || "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
      tags: study.tags || [],
      featured: study.featured || false
    };
  };

  const displayStudies = caseStudies.map(formatForListing);

  return (
    <div className="pt-24 pb-16 relative">
      {/* Galaxy Stars Animation - More Prominent */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              background: `radial-gradient(circle, rgba(255, 255, 255, ${star.opacity}) 0%, rgba(139, 92, 246, ${star.opacity * 0.3}) 40%, rgba(255, 255, 255, 0) 70%)`,
              animation: `star-twinkle ${star.duration}s ease-in-out infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 ${star.size * 4}px rgba(255, 255, 255, ${star.opacity * 0.8}), 0 0 ${star.size * 8}px rgba(139, 92, 246, ${star.opacity * 0.3})`
            }}
          />
        ))}
        {/* Additional larger stars for depth */}
        {Array.from({ length: 15 }, (_, i) => {
          const size = 3 + Math.random() * 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 3;
          return (
            <div
              key={`large-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(139, 92, 246, 0.4) 50%, transparent 80%)`,
                animation: `star-pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                boxShadow: `0 0 ${size * 5}px rgba(255, 255, 255, 0.6), 0 0 ${size * 10}px rgba(139, 92, 246, 0.4)`
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) translate(0, 0);
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.15) translate(3px, -3px);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3) translate(-2px, 2px);
          }
          75% { 
            opacity: 0.7; 
            transform: scale(1.1) translate(2px, -2px);
          }
        }
        @keyframes star-pulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
      `}</style>
      {/* Header */}
      <section className="py-16 bg-gradient-hero min-h-[280px] flex items-center">
        <div className="container mx-auto px-6 text-center w-full">
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
            {displayStudies.map((study, index) => (
              <div 
                key={study.id} 
                className="relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/10 rounded-2xl p-6 border border-border/50 backdrop-blur-md group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] overflow-hidden"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center relative z-10">
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-2 mb-4">
                      {study.featured && (
                        <Badge variant="default" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-semibold shadow-lg">
                          ⭐ Featured
                        </Badge>
                      )}
                      {study.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:text-gradient transition-all duration-300">
                      {study.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Results - Enhanced */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.slice(0, 3).map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-3 rounded-lg bg-background/40 border border-border/30 hover:border-primary/40 hover:bg-background/60 transition-all duration-300 group-hover:scale-105">
                          <div className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-muted-foreground font-medium">
                            {result.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Meta Info - Enhanced */}
                    <div className="flex flex-wrap items-center gap-4 mb-6 text-xs">
                      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-background/60 border border-border/30">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span className="text-muted-foreground font-medium">{study.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-background/60 border border-border/30">
                        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                        <span className="text-muted-foreground font-medium">{study.roi} ROI</span>
                      </div>
                      <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-background/60 border border-border/30">
                        <Users className="w-3.5 h-3.5 text-accent" />
                        <span className="text-muted-foreground font-medium">{study.industry}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="default" className="group" asChild>
                      <Link to={`/case-studies/${study.id}`}>
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image - Enhanced */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative aspect-video rounded-xl overflow-hidden group/image shadow-xl">
                      <img 
                        src={study.image} 
                        alt={study.company}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl mt-20 relative z-10">
          <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl p-10 border border-primary/30 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-48 h-48 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to write your success story?
              </h3>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how AI automation can transform your business operations and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleBookConsultation}
                  variant="gradient"
                  size="default"
                  className="px-6 py-3 shadow-md shadow-primary/30"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book Your Strategy Call
                </Button>
                <Button variant="outline" size="default" className="px-6 py-3" asChild>
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}