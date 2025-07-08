import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import TemplatePreview from "@/components/TemplatePreview";
import MotivationalQuote from "@/components/MotivationalQuote";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <FeatureCards />
        <TemplatePreview />
        
        {/* Motivational Quote - Fixed position for ongoing encouragement */}
        <div className="fixed bottom-6 right-6 z-40 max-w-sm hidden lg:block">
          <MotivationalQuote />
        </div>
      </main>
    </div>
  );
};

export default Index;
