
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  const { t } = useLanguage();
  
  // Arkaplan fotoğrafları array'i
  const backgroundImages = useMemo(() => [
    {
      src: "/lovable-uploads/3d086b23-ba40-4aa7-b07a-82f7c4e57e4c.png",
      alt: "RSS Kumru Automotive - Hidrolik Sistem 1"
    },
    {
      src: "/lovable-uploads/f1cf3879-6f74-4643-9b6c-dbb6771ab4de.png", 
      alt: "RSS Kumru Automotive - Hidrolik Sistem 2"
    },
    {
      src: "/lovable-uploads/320e43c7-3bd0-489e-b34e-0b60fa29a380.png", 
      alt: "RSS Kumru Automotive - Hidrolik Sistem 3"
    },
    {
      src: "/lovable-uploads/446c552f-ce2b-49a8-abf4-d82a271af886.png",
      alt: "RSS Kumru Automotive - Hidrolik Sistem 4"
    },
    {
      src: "/lovable-uploads/3ea5f5c8-b4f1-4be6-abe9-f4b269fcf2ec.png",
      alt: "RSS Kumru Automotive - Hidrolik Sistem 5"
    }
  ], []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(backgroundImages.length).fill(false));

  // İlk resmi preload et
  useEffect(() => {
    const preloadFirstImage = () => {
      const firstImage = backgroundImages[0];
      const img = new Image();
      
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[0] = true;
          return newState;
        });
        setIsLoaded(true);
      };
      
      img.src = firstImage.src;
    };

    preloadFirstImage();
  }, [backgroundImages]);

  // Diğer resimleri lazy load et
  useEffect(() => {
    const loadRemainingImages = () => {
      backgroundImages.slice(1).forEach((image, index) => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index + 1] = true;
            return newState;
          });
        };
        img.src = image.src;
      });
    };

    if (isLoaded) {
      const timeoutId = setTimeout(loadRemainingImages, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoaded, backgroundImages]);

  // Fotoğraf değişim efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <section
      className={cn(
        "min-h-[90vh] relative flex items-center bg-white py-20 overflow-hidden",
        className
      )}
    >
      {/* Background images with proper loading */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentImageIndex && imagesLoaded[index] ? "opacity-60" : "opacity-0"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
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
          
          {/* Right column - Video iframe */}
          <div className="relative hidden lg:block lg:col-span-7">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full h-[600px]">
              <iframe
                src="https://player.vimeo.com/video/1087026754?h=3d2a0b8a8f&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="RSS Kumru Automotive Video"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Robot Illustration */}
      <div className="absolute right-0 bottom-0 z-5 opacity-5 hidden lg:block">
        <img 
          src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
          alt="RSS Kumru Robot" 
          className="h-[80vh] object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
