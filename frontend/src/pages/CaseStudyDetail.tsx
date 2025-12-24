import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const STORAGE_KEY = "case_studies";

export default function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState<any>(null);

  useEffect(() => {
    loadCaseStudy();
  }, [id]);

  const loadCaseStudy = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const studies = JSON.parse(stored);
        const found = studies.find((s: any) => s.id === id);
        if (found) {
          setStudy(found);
          return;
        }
      } catch (e) {
        console.error("Error loading case study:", e);
      }
    }
    
    // Fallback to default case studies
    const defaultStudies: Record<string, any> = {
    "jupiter-outbound": {
      id: "jupiter-outbound",
      title: "Jupiter: Building a Multi-Channel Outbound Engine from Scratch",
      client: "Jupiter (YC S19)",
      timeline: "Aug 2025 - Present",
      problem: {
        title: "The Problem",
        content: `Jupiter had 1000+ food creators on their platform. CPG brands needed them. But the growth team was stuck in Gmail hell.

This was brand-side outbound—selling Jupiter's creator network to CPG CMOs and Directors of Marketing. Manual one-off emails. No follow-up system. No sequencing. If someone didn't reply to the first email, they'd maybe send one manual follow-up a week later—if they remembered.

They were reaching maybe 30-40 brands per week. At that pace, it would take 6+ months just to reach their target account list. Meanwhile, competitors were closing deals.

The CEO was spending 10+ hours weekly writing cold emails instead of running the company.`
      },
      solution: {
        title: "What We Built",
        content: `An always-on outbound SDR that coordinates email and LinkedIn without human handoffs.

Based on how a prospect engages, the system automatically chooses the next best action across email and LinkedIn.`,
        howItWorks: {
          title: "How it works:",
          steps: [
            "Email goes out via Instantly.ai → System watches engagement → Routes to the right next action:",
            "If they open/reply: LinkedIn connection request with personalized note referencing Jupiter's platform",
            "If they connect: 4-message sequence (immediate meeting ask → 2-day follow-up → final touch with Calendly)",
            "If they don't connect: Engagement agent likes and comments on their recent posts to build familiarity, then retries connection after 5-7 days",
            "If no email engagement: Stays in email sequence, tries different angles",
            "One system. No manual coordination. No \"remember to follow up.\""
          ]
        }
      },
      results: {
        title: "What Changed",
        before: [
          "30-40 brands reached per week (manual Gmail limit)",
          "No LinkedIn outreach at all",
          "No systematic follow-up",
          "CEO spending 10+ hours/week on outreach"
        ],
        after: [
          "300+ brands reached per day (2,100+ per week)—equivalent to 3-4 full-time SDRs working nonstop",
          "Coordinated email + LinkedIn sequences running 24/7",
          "24 meetings booked with CMOs and Directors of Marketing from 2,500 cold emails (0.96% meeting rate—above the 0.5% industry benchmark for cold executive outreach)",
          "5.7% LinkedIn connection acceptance rate with senior executives",
          "CEO spending ~2 hours per week reviewing conversations"
        ],
        bottomLine: [
          "CEO time recovered: 8 hours/week",
          "Brand outreach scaled: 40/week → 2,100/week",
          "Meetings booked without manual follow-up"
        ]
      },
      whyItWorked: {
        title: "Why It Worked",
        content: `Context-aware routing.

The system doesn't just blast LinkedIn messages. It watches who's engaging with emails, personalizes the connection request based on that engagement, and adjusts the follow-up strategy based on whether they accept.

For non-connectors, the engagement agent builds social proof first—so when the connection request comes later, it's not completely cold.

That's why they're booking meetings at ~1% conversion despite being an unknown platform reaching senior executives.

The system thinks about each prospect's journey, not just "send message → hope for reply."`
      },
      tech: ["n8n", "Instantly.ai", "Rules-based LinkedIn outreach with safety throttles", "PhantomBuster", "Apollo"],
      tags: ["Revenue", "Outbound", "Multi-Channel"]
    }
    };
    
    if (defaultStudies[id || ""]) {
      setStudy(defaultStudies[id || ""]);
    }
  };

  if (!study) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Button onClick={() => navigate("/case-studies")} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="container mx-auto px-6 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/case-studies")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Case Studies
        </Button>

        {/* Title and Meta */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {study.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Client:</span>
              {study.client}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-foreground">Timeline:</span>
              {study.timeline}
            </div>
          </div>
        </div>

        {/* Problem Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{study.problem.title}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {study.problem.content}
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{study.solution.title}</h2>
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {study.solution.content}
            </p>
          </div>
          
          <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4">{study.solution.howItWorks.title}</h3>
            <ul className="space-y-3">
              {study.solution.howItWorks.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{study.results.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Before */}
            <div className="bg-background rounded-xl p-6 border-2 border-border">
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground">Before:</h3>
              <ul className="space-y-3">
                {study.results.before.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">×</span>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border-2 border-primary/30">
              <h3 className="text-lg font-semibold mb-4 text-primary">After:</h3>
              <ul className="space-y-3">
                {study.results.after.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1.5">✓</span>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4">Bottom line:</h3>
            <ul className="space-y-2">
              {study.results.bottomLine.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-primary font-semibold">→</span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why It Worked Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{study.whyItWorked.title}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {study.whyItWorked.content}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Tech</h2>
          <div className="flex flex-wrap gap-2">
            {study.tech.map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to build your own success story?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can automate your growth and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Strategy Call
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">
                  View More Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

