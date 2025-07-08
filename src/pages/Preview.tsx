import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Edit, Share2, ArrowLeft } from "lucide-react";

const Preview = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Header Actions */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Builder
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Resume Preview</h1>
                <p className="text-muted-foreground">Your resume is ready to download and share</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit Resume
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="hero" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Resume Preview */}
            <div className="lg:col-span-3">
              <Card className="p-8">
                {/* A4 Paper Simulation */}
                <div className="bg-white border rounded-lg shadow-soft max-w-2xl mx-auto" style={{ aspectRatio: '210/297' }}>
                  <div className="p-12 space-y-6">
                    {/* Header */}
                    <div className="text-center border-b pb-6">
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                      <p className="text-lg text-gray-600 mb-1">Senior Software Engineer</p>
                      <p className="text-sm text-gray-500">john.doe@email.com | (555) 123-4567 | LinkedIn | Portfolio</p>
                    </div>

                    {/* Summary */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-500 pl-3">
                        Professional Summary
                      </h2>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Experienced software engineer with 5+ years developing scalable web applications. 
                        Passionate about creating efficient solutions and mentoring junior developers.
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-500 pl-3">
                        Experience
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-semibold text-gray-900">Senior Software Engineer</h3>
                            <span className="text-xs text-gray-500">2021 - Present</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">Tech Company Inc.</p>
                          <ul className="text-xs text-gray-700 space-y-1 ml-4">
                            <li>• Led development of microservices architecture serving 1M+ users</li>
                            <li>• Mentored 3 junior developers and improved team productivity by 40%</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-500 pl-3">
                        Skills
                      </h2>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Download Options */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Download Options</h3>
                
                <div className="space-y-4">
                  <Button variant="hero" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-3" />
                    Download as PDF
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-3" />
                    Download as Word
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Resume Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Completion</span>
                      <Badge variant="secondary">100%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ATS Score</span>
                      <Badge className="bg-green-500/10 text-green-700">Excellent</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Template</span>
                      <span className="text-sm">Modern Professional</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Edit className="w-4 h-4 mr-3" />
                      Edit Content
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-3" />
                      Change Template
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Preview;