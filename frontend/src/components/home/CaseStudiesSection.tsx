import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

const STORAGE_KEY = "case_studies";
const MAX_DISPLAY = 4;

export function CaseStudiesSection() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    loadCaseStudies();
  }, []);

  const loadCaseStudies = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let studies: any[] = [];
    
    if (stored) {
      try {
        studies = JSON.parse(stored);
      } catch (e) {
        console.error("Error loading case studies:", e);
      }
    }
    
    // If no studies in storage, use defaults
    if (studies.length === 0) {
      studies = [
        {
          id: "jupiter-outbound",
          title: "Jupiter: Building a Multi-Channel Outbound Engine from Scratch",
          company: "Jupiter",
          industry: "YC S19",
          challenge: "Manual outbound was limiting growth to 30-40 brands per week. CEO spending 10+ hours weekly on cold emails.",
          solutionShort: "Always-on outbound SDR coordinating email and LinkedIn without human handoffs",
          description: "How Jupiter scaled brand outreach from 40/week to 2,100/week with coordinated email + LinkedIn automation.",
          image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
          timelineShort: "Aug 2025 - Present",
          timeline: "Aug 2025 - Present",
          roi: "Ongoing",
          resultsShort: [
            { metric: "2,100+", description: "brands/week reached" },
            { metric: "24", description: "meetings booked" },
            { metric: "8 hrs", description: "CEO time saved/week" }
          ],
          tags: ["Revenue", "Outbound", "Multi-Channel"],
          featured: false,
          createdAt: new Date("2025-08-01").toISOString()
        },
        {
          id: "techflow-lead-automation",
          title: "TechFlow Solutions: 3x Lead Conversion with AI",
          company: "TechFlow Solutions",
          industry: "B2B SaaS",
          challenge: "Manual lead qualification was eating up 20+ hours per week, and qualified leads were falling through the cracks.",
          solutionShort: "Deployed AI lead scoring + automated nurture sequences",
          description: "How a growing SaaS company automated their entire lead qualification process and tripled conversions.",
          image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
          timelineShort: "6 weeks",
          timeline: "6 weeks",
          roi: "650%",
          resultsShort: [
            { metric: "+285%", description: "qualified leads" },
            { metric: "20 hrs", description: "saved per week" },
            { metric: "+45%", description: "conversion rate" }
          ],
          tags: ["Revenue", "Lead Generation", "B2B SaaS"],
          featured: false,
          createdAt: new Date("2025-07-15").toISOString()
        },
        {
          id: "growthcorp-finance-automation",
          title: "GrowthCorp: 90% Faster Invoice Processing",
          company: "GrowthCorp",
          industry: "Manufacturing",
          challenge: "Invoice processing took 3-5 days, causing cash flow issues and vendor relationship strain.",
          solutionShort: "AI-powered OCR + automated approval workflows",
          description: "Transforming accounts payable from a bottleneck into a competitive advantage.",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
          timelineShort: "4 weeks",
          timeline: "4 weeks",
          roi: "420%",
          resultsShort: [
            { metric: "90%", description: "faster processing" },
            { metric: "15 hrs", description: "saved per week" },
            { metric: "99.2%", description: "accuracy rate" }
          ],
          tags: ["Finance", "Automation", "Manufacturing"],
          featured: false,
          createdAt: new Date("2025-07-01").toISOString()
        },
        {
          id: "servicepro-support-ai",
          title: "ServicePro: 65% Ticket Deflection with AI",
          company: "ServicePro",
          industry: "Customer Service",
          challenge: "Support team was overwhelmed with 500+ tickets daily, response times were suffering.",
          solutionShort: "AI support assistant + intelligent ticket routing",
          description: "How AI transformed customer support from reactive to proactive, improving satisfaction while reducing costs.",
          image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
          timelineShort: "5 weeks",
          timeline: "5 weeks",
          roi: "380%",
          resultsShort: [
            { metric: "65%", description: "ticket deflection" },
            { metric: "2.5x", description: "faster response" },
            { metric: "+40%", description: "satisfaction score" }
          ],
          tags: ["Support", "AI Assistant", "Customer Service"],
          featured: false,
          createdAt: new Date("2025-06-15").toISOString()
        }
      ];
    }
    
    // Sort: featured first, then by createdAt (newest first)
    const sorted = studies.sort((a: any, b: any) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      const aDate = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const bDate = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return bDate - aDate; // Newest first
    });
    
    setCaseStudies(sorted.slice(0, MAX_DISPLAY));
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

  useEffect(() => {
    if (displayStudies.length === 0) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Get section's position in document
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height;
      
      // Calculate when section enters viewport (when top reaches viewport top)
      const animationStart = sectionTop - windowHeight;
      const animationEnd = sectionTop + sectionHeight - windowHeight;
      
      // Current scroll position
      const currentScroll = window.scrollY;
      
      // Check if we're before, during, or after the section
      if (currentScroll < animationStart) {
        // Before section - show first card
        if (visibleIndex !== 0) {
          setVisibleIndex(0);
        }
        return;
      }
      
      if (currentScroll >= animationEnd) {
        // After section - show last card
        if (visibleIndex !== displayStudies.length - 1) {
          setVisibleIndex(displayStudies.length - 1);
        }
        return;
      }
      
      // We're scrolling through the section
      // Calculate progress (0 to 1)
      const totalScrollDistance = animationEnd - animationStart;
      const scrollProgress = (currentScroll - animationStart) / totalScrollDistance;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Divide into equal segments for each card
      const segmentSize = 1 / displayStudies.length;
      let newIndex = Math.floor(clampedProgress / segmentSize);
      
      // Ensure we show the last card when we reach the end
      if (clampedProgress >= 1 - (segmentSize / 3)) {
        newIndex = displayStudies.length - 1;
      }
      
      // Clamp to valid range
      newIndex = Math.max(0, Math.min(newIndex, displayStudies.length - 1));
      
      // Only update if changed
      if (newIndex !== visibleIndex) {
        setVisibleIndex(newIndex);
      }
    };

    // Use requestAnimationFrame for smooth updates
    let rafId: number | null = null;
    const throttledScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          handleScroll();
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [displayStudies.length, visibleIndex]);

  // Always show the section, even if no case studies (will show loading state)
  if (displayStudies.length === 0 && caseStudies.length === 0) {
    return (
      <section className="py-32 bg-background relative overflow-hidden min-h-screen flex items-center">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Real <span className="text-gradient">Results</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses are saving time, reducing costs, and accelerating growth with AI automation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef} 
      className="bg-background relative overflow-hidden -mt-8"
      style={{ 
        height: `${displayStudies.length * 30}vh`, // Minimal height - just enough for scroll animation
        position: 'relative'
      }}
    >
      {/* Sticky container that stays in view while scrolling */}
      <div 
        className="sticky"
        style={{
          top: '100px', // Account for navbar
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem'
        }}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
          {/* Section Header */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Real <span className="text-gradient">Results</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              See how businesses are saving time, reducing costs, and accelerating growth with AI automation.
            </p>
          </div>

          {/* Case Study Cards Container - Fixed visual height, cards swap on scroll */}
          <div className="relative" style={{ minHeight: '380px', maxHeight: '420px' }}>
          {displayStudies.map((study, index) => {
            const isVisible = index === visibleIndex;
            
            return (
              <div
                key={study.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100 z-10"
                    : "opacity-0 translate-y-8 scale-95 z-0 pointer-events-none"
                }`}
              >
                <div className="bg-muted/20 rounded-xl p-4 border border-border/50 backdrop-blur-sm group hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:shadow-primary/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        {study.featured && (
                          <Badge variant="default" className="bg-yellow-500 text-black text-xs">
                            Featured
                          </Badge>
                        )}
                        {study.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-snug">
                        {study.description}
                      </p>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {study.results.slice(0, 3).map((result: any, resultIndex: number) => (
                          <div key={resultIndex} className="text-center">
                            <div className="text-lg font-bold text-gradient mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-3 h-3" />
                          <span>{study.timeline}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <TrendingUp className="w-3 h-3" />
                          <span>{study.roi} ROI</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Users className="w-3 h-3" />
                          <span>{study.industry}</span>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" className="group text-xs" asChild>
                        <Link to={`/case-studies/${study.id}`}>
                          Read Full Case Study
                          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>

                    {/* Image */}
                    <div>
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.company}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <div className="text-white font-semibold text-sm">{study.company}</div>
                          <div className="text-white/80 text-xs">{study.industry}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {displayStudies.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === visibleIndex
                    ? "w-6 bg-primary"
                    : index < visibleIndex
                    ? "w-1.5 bg-primary/50"
                    : "w-1.5 bg-muted"
                }`}
              />
            ))}
          </div>

          {/* CTA after last case study */}
          {visibleIndex === displayStudies.length - 1 && (
            <div className="mt-4 text-center animate-fade-in">
              <h3 className="text-base font-bold mb-1">Explore More Case Studies</h3>
              <p className="text-xs text-muted-foreground mb-3 max-w-2xl mx-auto">
                Discover more success stories and see how AI automation can transform your business.
              </p>
              <Button variant="gradient" size="sm" className="px-4 py-2 text-sm" asChild>
                <Link to="/case-studies">
                  View All Case Studies
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

