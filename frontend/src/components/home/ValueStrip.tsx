import { Clock, TrendingUp, Shield } from "lucide-react";

export function ValueStrip() {
  const values = [
    {
      icon: Clock,
      metric: "10–15 hrs/week",
      description: "saved"
    },
    {
      icon: TrendingUp,
      metric: "20–30%",
      description: "more conversions"
    },
    {
      icon: Shield,
      metric: "40–60%",
      description: "ticket deflection"
    }
  ];

  return (
    <section className="py-12 border-t border-border bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          {values.map((value, index) => (
            <div key={index} className="flex items-center space-x-4 text-center md:text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">{value.metric}</div>
                <div className="text-muted-foreground">{value.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}