
import React, { useState, useEffect } from "react";
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
  
  // Arkaplan fotoğrafları array'i
  const backgroundImages = [
    "/lovable-uploads/3d086b23-ba40-4aa7-b07a-82f7c4e57e4c.png",
    "/lovable-uploads/f1cf3879-6f74-4643-9b6c-dbb6771ab4de.png",
    "/lovable-uploads/320e43c7-3bd0-489e-b34e-0b60fa29a380.png",
    "/lovable-uploads/446c552f-ce2b-49a8-abf4-d82a271af886.png",
    "/lovable-uploads/3ea5f5c8-b4f1-4be6-abe9-f4b269fcf2ec.png"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fotoğraf değişim efekti
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000); // 7 saniyede bir değişim

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <section
      className={cn(
        "min-h-[90vh] relative flex items-center bg-white py-20 overflow-hidden",
        className
      )}
    >
      {/* Kayar arkaplan fotoğrafları */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
              index === currentImageIndex ? "opacity-60" : "opacity-0"
            )}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
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
          </div>
        </div>
      </div>

      {/* Robot Illustration - Semi-transparent behind the content */}
      <div className="absolute right-0 bottom-0 z-5 opacity-5 hidden lg:block">
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
