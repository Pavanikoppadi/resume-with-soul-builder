import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { User, FileText, Briefcase, GraduationCap, Star, Award, Eye } from "lucide-react";

const sections = [
  { id: 'personal', name: 'Personal Info', icon: User, completed: false },
  { id: 'summary', name: 'Summary', icon: FileText, completed: false },
  { id: 'experience', name: 'Experience', icon: Briefcase, completed: false },
  { id: 'education', name: 'Education', icon: GraduationCap, completed: false },
  { id: 'skills', name: 'Skills', icon: Star, completed: false },
  { id: 'projects', name: 'Projects', icon: Award, completed: false },
];

const Builder = () => {
  const completedSections = sections.filter(s => s.completed).length;
  const progressPercentage = (completedSections / sections.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Build Your Resume</h1>
                <p className="text-muted-foreground">Complete each section to create your perfect resume</p>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <Progress value={progressPercentage} className="flex-1" />
              <Badge variant="secondary">
                {completedSections}/{sections.length} Complete
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <h2 className="text-lg font-semibold mb-4">Resume Sections</h2>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                          section.completed 
                            ? 'bg-primary/10 text-primary border border-primary/20' 
                            : 'hover:bg-muted'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{section.name}</span>
                        {section.completed && (
                          <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div>
                  <Card className="p-8">
                    <div className="text-center py-16">
                      <User className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="text-xl font-semibold mb-2">Select a Section</h3>
                      <p className="text-muted-foreground">
                        Choose a section from the sidebar to start building your resume
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Template Preview */}
                <div>
                  <Card className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-semibold mb-2">Live Preview</h3>
                      <p className="text-sm text-muted-foreground">See your changes in real-time</p>
                    </div>
                    
                    {/* Mock Resume Preview */}
                    <div className="bg-white border rounded-lg p-6 shadow-soft min-h-[500px]">
                      <div className="space-y-4">
                        <div className="h-6 bg-primary/20 rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                        
                        <div className="pt-6 space-y-3">
                          <div className="h-4 bg-primary/10 rounded w-full"></div>
                          <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                          <div className="h-4 bg-primary/10 rounded w-4/5"></div>
                        </div>
                        
                        <div className="pt-6 grid grid-cols-2 gap-4">
                          <div className="h-4 bg-accent/20 rounded"></div>
                          <div className="h-4 bg-accent/20 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;