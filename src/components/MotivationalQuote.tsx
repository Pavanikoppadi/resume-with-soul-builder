import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const quotes = [
  "Your unique experience is your superpower ✨",
  "Every skill you've gained tells a story worth sharing 📖",
  "You're building more than a resume - you're crafting your future 🚀",
  "Your journey has prepared you for amazing opportunities 🌟",
  "Confidence looks great on you - keep going! 💪",
  "Your potential is limitless, just like this resume 🎯"
];

interface MotivationalQuoteProps {
  className?: string;
}

const MotivationalQuote = ({ className = "" }: MotivationalQuoteProps) => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className={`p-4 bg-gradient-accent border-0 shadow-soft ${className}`}>
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
          <Heart className="w-4 h-4 text-accent-foreground" fill="currentColor" />
        </div>
        
        <div className="flex-1">
          <div className="text-sm font-medium text-accent-foreground/90 mb-1">
            Motivation Boost
          </div>
          <div className="text-accent-foreground font-medium leading-relaxed">
            {quotes[currentQuote]}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MotivationalQuote;