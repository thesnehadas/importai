import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-10 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to automate?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Time is money.{" "}
              <span className="text-gradient">We save you both.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See exactly how AI can transform your workflows in a 30-minute demo tailored to your business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group shadow-glow animate-glow">
              <Calendar className="w-5 h-5 mr-3" />
              Book Your Free Demo
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="glass" size="xl">
              Or email us directly
            </Button>
          </div>

          {/* Embedded Calendly Placeholder */}
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Calendly Booking Widget</h3>
                <p className="text-muted-foreground">
                  Embed your Calendly widget here using your NEXT_PUBLIC_CALENDLY_URL
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Configure this in your environment variables
                </p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-sm text-muted-foreground mt-8">
            No sales pitch. Just a genuine conversation about your automation needs.
          </p>
        </div>
      </div>
    </section>
  );
}