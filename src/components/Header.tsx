import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              ResumeHeart
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#templates" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Templates
            </a>
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#examples" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Examples
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="encouraging" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;