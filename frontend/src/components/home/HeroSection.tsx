import { Button } from "@/components/ui/button";
import { Calendar, Play, ArrowRight, Zap, Target, Clock } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBookDemo = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      // Redirect to contact page via backend
      const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
      window.location.href = `${api}/go/contact`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      {/* Corporate Background Image */}
      <div className="absolute inset-0 opacity-[0.25] dark:opacity-[0.20]">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
          alt="Corporate office scene"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 whitespace-nowrap">
              Automations that{" "}
              <span className="text-gradient">buy back</span>{" "}
              your time.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              AI agents for revenue, support, and finance ops—deployed fast, measured by results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="group shadow-glow"
              onClick={handleBookDemo}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book 30-min Free Demo
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="glass"
              size="xl"
              className="group"
              onClick={() => {
                const api = import.meta.env.VITE_API_URL || "http://localhost:5000";
                window.location.href = `${api}/go/demos`;
              }}
            >
              <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              See Live Demos
            </Button>
          </div>

          {/* Floating Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">10–15 hrs</div>
              <div className="text-muted-foreground">saved per week</div>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">20–30%</div>
              <div className="text-muted-foreground">more conversions</div>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-2">40–60%</div>
              <div className="text-muted-foreground">ticket deflection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}