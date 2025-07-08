import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { ArrowRight, Star } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Clean and contemporary design perfect for tech and creative roles",
    preview: "bg-gradient-to-br from-primary/10 to-primary/5",
    popular: true,
    category: "Professional"
  },
  {
    id: 2,
    name: "Executive Classic",
    description: "Traditional layout ideal for senior positions and corporate roles",
    preview: "bg-gradient-to-br from-secondary/20 to-secondary/10",
    popular: false,
    category: "Executive"
  },
  {
    id: 3,
    name: "Creative Showcase",
    description: "Vibrant design that highlights creativity and personality",
    preview: "bg-gradient-to-br from-accent/20 to-accent/10",
    popular: true,
    category: "Creative"
  },
  {
    id: 4,
    name: "Minimalist Clean",
    description: "Simple and elegant design focusing on content clarity",
    preview: "bg-gradient-to-br from-muted/30 to-muted/10",
    popular: false,
    category: "Minimalist"
  },
  {
    id: 5,
    name: "Academic Scholar",
    description: "Professional layout designed for academic and research positions",
    preview: "bg-gradient-to-br from-primary/15 to-accent/10",
    popular: false,
    category: "Academic"
  },
  {
    id: 6,
    name: "Startup Dynamic",
    description: "Modern and energetic design for startup and tech environments",
    preview: "bg-gradient-to-br from-accent/15 to-primary/10",
    popular: true,
    category: "Startup"
  }
];

const Templates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Choose Your Perfect Template
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional resume templates designed to make you stand out. Each template is fully customizable 
              and comes with sample content to guide you through the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                6 Premium Templates
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                100% Customizable
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                PDF Export Ready
              </Badge>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {templates.map((template) => (
                <Card 
                  key={template.id} 
                  className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  {/* Template Preview */}
                  <div className={`h-64 ${template.preview} relative`}>
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <Badge variant="outline" className="bg-background/90">
                        {template.category}
                      </Badge>
                      {template.popular && (
                        <Badge className="bg-gradient-accent text-accent-foreground border-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                    
                    {/* Mock resume content */}
                    <div className="absolute inset-6 bg-white rounded-lg shadow-soft p-6 overflow-hidden">
                      <div className="h-4 bg-primary/20 rounded mb-3 w-3/4"></div>
                      <div className="h-3 bg-muted rounded mb-1 w-1/2"></div>
                      <div className="h-3 bg-muted rounded mb-4 w-2/3"></div>
                      
                      <div className="h-3 bg-primary/10 rounded mb-2 w-full"></div>
                      <div className="h-3 bg-primary/10 rounded mb-2 w-5/6"></div>
                      <div className="h-3 bg-primary/10 rounded mb-4 w-4/5"></div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-3 bg-accent/20 rounded"></div>
                        <div className="h-3 bg-accent/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Template Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      {template.description}
                    </p>
                    
                    <Button 
                      variant="hero" 
                      className="w-full group-hover:shadow-soft transition-all"
                    >
                      Use This Template
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Templates;