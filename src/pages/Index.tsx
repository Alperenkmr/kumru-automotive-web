
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Careers from "@/components/sections/Careers";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BlogPreview from "@/components/sections/BlogPreview";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Trigger once on load
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-kumru-white">
      <Header />
      <main className="pt-24"> {/* Padding top to account for fixed header */}
        <Hero />
        <WhatWeDo />
        <Careers />
        <FeaturedProducts />
        <BlogPreview />
        <div className="container mx-auto py-16">
          <AdPlaceholder width={728} height={90} className="mx-auto" />
        </div>
      </main>
      <Footer />

      {/* Google Analytics & Yandex.Metrica */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics 4 code would go here
            console.log("Google Analytics 4 initialized");
            
            // Yandex.Metrica code would go here
            console.log("Yandex.Metrica initialized");
          `,
        }}
      />
    </div>
  );
};

export default Index;
