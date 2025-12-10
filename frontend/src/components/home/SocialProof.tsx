import { Star, Quote } from "lucide-react";

export function SocialProof() {
  const testimonials = [
    {
      quote: "Import AI saved us 15 hours per week on lead qualification. Our conversion rate jumped 28% in the first month.",
      author: "Sarah Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The invoice processing automation is incredible. What used to take days now happens in minutes with 99% accuracy.",
      author: "Marcus Rodriguez",
      role: "Finance Director",
      company: "GrowthCorp",
      rating: 5
    },
    {
      quote: "Their AI support assistant handles 60% of our tickets automatically. Our team can finally focus on complex issues.",
      author: "Emily Watson",
      role: "Customer Success Manager",
      company: "ServicePro",
      rating: 5
    }
  ];

  const logos = [
    "Microsoft", "Salesforce", "HubSpot", "Stripe", "Zapier", "Slack"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">forward-thinking</span> teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 group hover:scale-105 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                <p className="text-muted-foreground leading-relaxed pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Integrates with your favorite tools</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}