import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech and creative roles",
    preview: "bg-gradient-to-br from-primary/10 to-primary/5",
    popular: true
  },
  {
    id: 2,
    name: "Executive Classic",
    description: "Traditional layout ideal for senior positions and corporate roles",
    preview: "bg-gradient-to-br from-secondary/20 to-secondary/10",
    popular: false
  },
  {
    id: 3,
    name: "Creative Showcase",
    description: "Vibrant design that highlights creativity and personality",
    preview: "bg-gradient-to-br from-accent/20 to-accent/10",
    popular: true
  }
];

const TemplatePreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Perfect Template
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional templates designed to make you stand out. Each one is fully customizable
            to match your unique style and industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {templates.map((template) => (
            <Card 
              key={template.id} 
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Template Preview */}
              <div className={`h-48 ${template.preview} relative`}>
                {template.popular && (
                  <Badge className="absolute top-3 right-3 bg-gradient-accent text-accent-foreground border-0">
                    Popular
                  </Badge>
                )}
                
                {/* Mock resume content */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-soft p-4 overflow-hidden">
                  <div className="h-3 bg-primary/20 rounded mb-2 w-3/4"></div>
                  <div className="h-2 bg-muted rounded mb-1 w-1/2"></div>
                  <div className="h-2 bg-muted rounded mb-3 w-2/3"></div>
                  
                  <div className="h-2 bg-primary/10 rounded mb-1 w-full"></div>
                  <div className="h-2 bg-primary/10 rounded mb-1 w-5/6"></div>
                  <div className="h-2 bg-primary/10 rounded mb-3 w-4/5"></div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-2 bg-accent/20 rounded"></div>
                    <div className="h-2 bg-accent/20 rounded"></div>
                  </div>
                </div>
              </div>
              
              {/* Template Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:border-primary group-hover:text-primary"
                >
                  Use This Template
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TemplatePreview;