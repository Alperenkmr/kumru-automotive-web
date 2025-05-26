
import React, { useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Lazy load components that are below the fold
const FeaturedProducts = lazy(() => import("@/components/sections/FeaturedProducts"));
const BlogPreview = lazy(() => import("@/components/sections/BlogPreview"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));

// Loading component for sections
const SectionLoader = () => (
  <div className="section-padding bg-gray-50 flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kumru-navy"></div>
  </div>
);

const Index = () => {
  const { t, language } = useLanguage();

  // Ana sayfa için schema.org yapılandırılmış veri
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "RSS Kumru Automotive - Hidrolik Sistemler ve Özel Mühendislik Hatları",
    "description": "RSS Kumru Automotive, otomotiv sektörü için yüksek kaliteli hidrolik hortumlar, boru sistemleri ve özel mühendislik hatları sunar.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "RSS Kumru Automotive",
      "url": "https://rsskumru.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hidrolik Hortumlar",
          "url": "https://rsskumru.com/products/hydraulic-hose"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "PTFE Teflon Hortumlar",
          "url": "https://rsskumru.com/products/ptfe-teflon-hose"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Turbo Boru Hortumlar",
          "url": "https://rsskumru.com/products/turbo-pipe-hose"
        }
      ]
    }
  };

  // Scroll efektini optimize ediyoruz - artık element gözükecek
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
    
    // Sayfa yüklendiğinde hemen tetikleme
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "Akışkan Sistem Yönetimi ve Özel Mühendislik Hatları" : "Fluid System Management and Custom Engineering Lines"}
        description={language === 'tr' 
          ? "RSS Kumru Automotive, otomotiv sektörü için yüksek kaliteli hidrolik hortumlar, özel mühendislik hatları ve akışkan sistem yönetimi çözümleri sunar."
          : "RSS Kumru Automotive offers high-quality hydraulic hoses, custom engineering lines, and fluid system management solutions for the automotive industry."
        }
        canonicalUrl="/"
      />
      <Header />
      <main className="pt-24">
        <Hero />
        <WhatWeDo />
        
        {/* Lazy loaded sections with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <FeaturedProducts />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BlogPreview />
        </Suspense>
        
        {/* Catalog Download Button */}
        <section className="section-padding bg-white text-center">
          <div className="container mx-auto">
            <a href="https://drive.google.com/file/d/1TcZasw69ZIQan0tQrSk9v0F6S_EcR2Hl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-kumru-navy text-kumru-navy hover:bg-kumru-navy hover:text-white">
                <FileText className="mr-2 h-4 w-4" />
                {language === 'tr' ? '2025 Kataloğumuz' : 'Our 2025 Catalog'}
              </Button>
            </a>
          </div>
        </section>
        
        {/* Call to Action Section - Enhanced */}
        <section className="section-padding bg-kumru-navy text-white relative overflow-hidden">
          {/* Background geometric patterns */}
          <div className="absolute inset-0">
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-kumru-yellow/10"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-kumru-yellow/5"></div>
            <div className="absolute right-1/4 bottom-0 w-24 h-24 bg-kumru-yellow/10 rounded-lg rotate-45"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('cta.ready')}</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-white/80">
              {t('cta.description')}
            </p>
            <Link to="/contact">
              <button className="bg-kumru-yellow text-kumru-black py-4 px-10 rounded-xl text-lg font-medium hover:bg-kumru-yellow/90 transition-colors duration-150 shadow-lg">
                {t('cta.button')}
              </button>
            </Link>
          </div>
          
          {/* Robot Illustration - Subtle background */}
          <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
            <img 
              src="./lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
              alt="RSS Kumru Robot" 
              className="h-64"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
