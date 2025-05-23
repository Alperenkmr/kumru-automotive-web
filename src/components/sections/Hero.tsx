
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useLanguage();
  
  return (
    <section
      className={cn(
        "min-h-[90vh] relative flex items-center bg-white py-20",
        className
      )}
    >
      {/* Enhanced background with dynamic pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base layer */}
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(120deg, transparent 40%, rgba(10, 31, 68, 0.05) 70%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        
        {/* Decorative circles */}
        <div className="absolute w-64 h-64 rounded-full bg-kumru-navy/5 -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-kumru-navy/5 -bottom-40 -left-20"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute w-40 h-40 bg-kumru-navy/3 rotate-45 right-[10%] top-[20%]"></div>
        <div className="absolute w-20 h-20 bg-kumru-yellow/5 rounded-full left-[15%] top-[30%] animate-pulse"></div>
        <div className="absolute w-32 h-32 border-2 border-kumru-navy/10 rounded-full right-[30%] bottom-[25%]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="lg:col-span-5 animate-fade-in">
            <div className="bg-kumru-navy/5 inline-block px-4 py-2 rounded-full mb-6">
              <span className="text-kumru-navy font-semibold">RSS Kumru Automotive</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold mb-6 text-kumru-navy leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-600 max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-kumru-yellow hover:bg-kumru-yellow/90 text-kumru-black py-6 px-8 rounded-xl text-lg group"
                asChild
              >
                <Link to="/products" className="flex items-center gap-2">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-kumru-navy/30 text-kumru-navy py-6 px-8 rounded-xl text-lg hover:bg-kumru-navy/5"
                asChild
              >
                <Link to="/about">
                  {t('nav.about')}
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right column - Vimeo Video - Fixed and Rounded */}
          <div className="relative hidden lg:block lg:col-span-7">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full h-[600px] bg-black">
              <iframe 
                src="https://player.vimeo.com/video/1087026754?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;background=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                className="absolute inset-0 w-full h-full object-cover" 
                title="RSS Kumru Video"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
            
            {/* Decorative elements around the video */}
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-kumru-yellow/20 rounded-full z-0"></div>
            <div className="absolute -right-5 -top-5 w-24 h-24 bg-kumru-navy/10 rounded-lg z-0"></div>
          </div>
        </div>
      </div>

      {/* Robot Illustration - Semi-transparent behind the content */}
      <div className="absolute right-0 bottom-0 z-0 opacity-5 hidden lg:block">
        <img 
          src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
          alt="RSS Kumru Robot" 
          className="h-[80vh] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
