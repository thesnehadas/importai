import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, MapPin, Zap, Target, Users, CheckCircle } from "lucide-react";

export default function About() {
  const stack = [
    "LangGraph", "GPT-4", "Zapier", "Make", "HubSpot", "Twilio", 
    "Segment", "dbt", "Retool", "Python", "TypeScript", "React"
  ];

  const geoFocus = [
    { region: "US", flag: "🇺🇸" },
    { region: "UK", flag: "🇬🇧" },
    { region: "CA", flag: "🇨🇦" },
    { region: "ANZ", flag: "🇦🇺" },
    { region: "SEA", flag: "🇸🇬" },
    { region: "India", flag: "🇮🇳" }
  ];

  const process = [
    {
      step: "01",
      title: "Intake",
      description: "We analyze your current workflows, pain points, and automation opportunities through detailed discovery sessions."
    },
    {
      step: "02", 
      title: "Build",
      description: "Our team develops custom AI agents using proven frameworks, integrating seamlessly with your existing tools."
    },
    {
      step: "03",
      title: "Test",
      description: "Rigorous testing in sandbox environments ensures reliability before any production deployment."
    },
    {
      step: "04",
      title: "Deploy",
      description: "Careful rollout with monitoring, training, and support to ensure smooth adoption across your team."
    },
    {
      step: "05",
      title: "Iterate",
      description: "Continuous optimization based on performance data and evolving business needs."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We build AI that <span className="text-gradient">actually works</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No fluff, no hype. Just practical AI automation that saves time, reduces costs, and drives real business results.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Every business is drowning in repetitive tasks. While everyone talks about AI's potential, 
                  most companies struggle to turn that potential into actual productivity gains.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We bridge that gap. Import AI builds practical automation that integrates with your 
                  existing processes, requires minimal training, and delivers measurable ROI from day one.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-medium">Results-focused</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="font-medium">Fast deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-medium">Human-friendly</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gradient mb-2">2024</div>
                  <div className="text-muted-foreground">Founded with a simple belief:</div>
                </div>
                <blockquote className="text-lg font-medium text-center italic">
                  "AI should make work more human, not replace humans entirely."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How we work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven 5-step process ensures every automation delivers real value from the start.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border transform -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use the best tools in the industry to build reliable, scalable automation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {stack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-16 bg-background-alt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Where we work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting English-speaking businesses across major markets worldwide.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {geoFocus.map((geo, index) => (
              <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{geo.flag}</div>
                <div className="font-semibold">{geo.region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to automate your workflow?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your specific challenges and show you exactly how AI can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-3" />
                Book Strategy Call
              </Button>
              <Button variant="outline" size="lg">
                View Case Studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}