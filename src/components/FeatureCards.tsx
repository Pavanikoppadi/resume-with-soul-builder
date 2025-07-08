import { Card } from "@/components/ui/card";
import { Sparkles, Edit, Heart, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get personalized recommendations that highlight your unique strengths and personality.",
    color: "text-primary"
  },
  {
    icon: Edit,
    title: "Guided Section Builder",
    description: "Step-by-step prompts for each resume section to reduce overwhelm and boost confidence.",
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "Motivational Support",
    description: "Encouraging micro-quotes and positive reinforcement throughout your resume building journey.",
    color: "text-success"
  },
  {
    icon: CheckCircle,
    title: "Drag & Drop Templates",
    description: "Easily customize professional templates with our intuitive drag-and-drop interface.",
    color: "text-primary"
  }
];

const FeatureCards = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Resume Builder?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe resume building should be an empowering experience, not a stressful task.
            Here's how we make it happen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;