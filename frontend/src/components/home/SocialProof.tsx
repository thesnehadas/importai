import { useMemo } from "react";
import { Star, Quote } from "lucide-react";

export function SocialProof() {
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
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
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
      <div className="container mx-auto px-6 relative z-10">
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted by <span className="text-gradient">forward-thinking</span> teams
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-muted/30 via-muted/20 to-muted/10 rounded-xl p-6 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-5">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground leading-relaxed pl-5">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <div className="text-sm font-semibold mb-1">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
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