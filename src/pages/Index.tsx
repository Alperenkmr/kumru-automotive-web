
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BlogPreview from "@/components/sections/BlogPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Index = () => {
  const { t, language } = useLanguage();

  // Basit schema markup
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RSS Kumru Automotive",
    "url": "https://rsskumru.com",
    "description": "Otomotiv sektöründe lider, yüksek kaliteli hidrolik hortum ve boru sistemleri tedarikçisi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3",
      "addressLocality": "Gebze",
      "addressRegion": "Kocaeli",
      "postalCode": "41400",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+902627248824",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "RSS Kumru Automotive - Hidrolik Hortum ve Otomotiv Parçaları" : "RSS Kumru Automotive - Hydraulic Hoses and Automotive Parts"}
        description={language === 'tr' 
          ? "RSS Kumru Automotive, otomotiv sektörü için yüksek kaliteli hidrolik hortumlar ve otomotiv parçaları sunar. Gebze/Kocaeli merkezli, Türkiye ve Avrupa'ya hizmet."
          : "RSS Kumru Automotive offers high-quality hydraulic hoses and automotive parts for the automotive industry. Based in Gebze/Kocaeli, serving Turkey and Europe."
        }
        canonicalUrl="/"
        structuredData={homePageSchema}
      />
      <Header />
      <main className="pt-24">
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <FeaturedProducts />
        <BlogPreview />
        
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
        
        {/* Call to Action Section */}
        <section className="section-padding bg-kumru-navy text-white relative overflow-hidden">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
