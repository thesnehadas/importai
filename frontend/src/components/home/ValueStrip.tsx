import { Bot, Users, Plug } from "lucide-react";

export function ValueStrip() {
  const features = [
    {
      icon: Bot,
      title: "Replace Manual Work",
      description: "AI agents handle repetitive tasks end-to-end"
    },
    {
      icon: Users,
      title: "Scale Without Hiring",
      description: "Automate execution without growing headcount"
    },
    {
      icon: Plug,
      title: "Integrate With Your Stack",
      description: "Works with your CRM, databases, and internal tools"
    }
  ];

  return (
    <section className="py-12 border-t border-border bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
              <div className="relative glass-card p-4 pr-6 group-hover:scale-[1.02] transition-all duration-500 border border-white/10 hover:border-primary/40 rounded-full backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-white/5 dark:to-white/[0.02] shadow-2xl hover:shadow-primary/20 flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/30 via-primary/20 to-accent/25 rounded-full group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary drop-shadow-lg" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground mb-1 tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}