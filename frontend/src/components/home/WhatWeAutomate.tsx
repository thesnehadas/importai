import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  DollarSign, 
  FileText, 
  ArrowRight,
  Bot,
  Workflow,
  Calculator
} from "lucide-react";

export function WhatWeAutomate() {
  const automations = [
    {
      icon: DollarSign,
      title: "Revenue Automation",
      description: "Cold email sequences, lead scoring, and follow-up workflows that convert prospects into paying customers.",
      features: ["Cold outreach sequences", "Lead qualification", "CRM integration", "Performance tracking"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: MessageSquare,
      title: "AI Support Assistant",
      description: "Intelligent customer support that handles common queries, routes complex issues, and learns from interactions.",
      features: ["24/7 chat support", "Ticket routing", "Knowledge base integration", "Escalation rules"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: FileText,
      title: "Finance Ops Automation",
      description: "Invoice processing, expense management, and financial reporting automated with AI precision.",
      features: ["Invoice OCR", "Expense categorization", "Approval workflows", "Financial reporting"],
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What we <span className="text-gradient">automate</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI solutions that integrate with your existing tools and scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {automations.map((automation, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${automation.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <automation.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{automation.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {automation.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {automation.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group/btn w-full justify-between">
                  See Demo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}