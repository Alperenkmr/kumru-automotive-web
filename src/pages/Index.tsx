
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BlogPreview from "@/components/sections/BlogPreview";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, Award, Globe } from "lucide-react";

const Index = () => {
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24"> {/* Padding top to account for fixed header */}
        <Hero />
        <WhatWeDo />
        
        {/* Why Choose Us Section - Enhanced */}
        <section className="section-padding bg-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-10 h-full">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="border-r border-kumru-navy/10 h-full"></div>
                ))}
              </div>
              <div className="grid grid-rows-10 w-full absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="border-b border-kumru-navy/10 w-full"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <h2 className="section-title text-kumru-navy mb-16">{t('whyChooseUs.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <div className="bg-kumru-navy/10 p-4 rounded-xl inline-block mb-6">
                  <Award className="w-8 h-8 text-kumru-navy" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-kumru-navy">{t('whyChooseUs.expertise')}</h3>
                <p className="text-gray-600">
                  {t('whyChooseUs.expertiseDesc')}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">Extensive industry knowledge</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">Proven track record</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <div className="bg-kumru-yellow/20 p-4 rounded-xl inline-block mb-6">
                  <Check className="w-8 h-8 text-kumru-navy" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-kumru-navy">{t('whyChooseUs.quality')}</h3>
                <p className="text-gray-600">
                  {t('whyChooseUs.qualityDesc')}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">ISO 9001:2015 certified</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">Rigorous testing procedures</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <div className="bg-kumru-navy/10 p-4 rounded-xl inline-block mb-6">
                  <Globe className="w-8 h-8 text-kumru-navy" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-kumru-navy">{t('whyChooseUs.delivery')}</h3>
                <p className="text-gray-600">
                  {t('whyChooseUs.deliveryDesc')}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">Fast shipping worldwide</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-green-500 w-5 h-5" /> 
                      <span className="text-gray-700">Real-time tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Testimonial/Stat */}
            <div className="mt-16 bg-kumru-navy text-white p-8 rounded-2xl shadow-lg animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-kumru-yellow mb-2">500+</div>
                  <div className="text-white/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-kumru-yellow mb-2">50+</div>
                  <div className="text-white/80">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-kumru-yellow mb-2">98%</div>
                  <div className="text-white/80">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        <BlogPreview />
        
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
              src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
              alt="RSS Kumru Robot" 
              className="h-64"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
