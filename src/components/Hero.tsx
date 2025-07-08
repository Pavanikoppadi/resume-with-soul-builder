import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-70" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-accent px-4 py-2 rounded-full text-sm font-medium text-accent-foreground mb-6 shadow-soft">
              <Sparkles className="w-4 h-4" />
              AI-Powered Resume Builder
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your
              <span className="bg-gradient-hero bg-clip-text text-transparent"> Dream Resume </span>
              with Confidence
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Create stunning, professional resumes that showcase your unique personality and strengths. 
              Get AI-powered suggestions and motivational guidance every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                Start Building Your Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                View Templates
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No design skills needed
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                AI-powered suggestions
              </div>
            </div>
          </div>
          
          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Professional resume building experience" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-medium border">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-accent p-4 rounded-xl shadow-medium text-accent-foreground">
              <div className="text-2xl font-bold">2M+</div>
              <div className="text-sm opacity-90">Resumes Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;