
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BlogPreview from "@/components/sections/BlogPreview";

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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24"> {/* Padding top to account for fixed header */}
        <Hero />
        <WhatWeDo />
        
        {/* Why Choose Us Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <h2 className="section-title text-kumru-navy">Why Choose Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">20+ Years' Expertise</h3>
                <p className="text-gray-600">
                  With over two decades of industry experience, we've developed unparalleled knowledge in hydraulic system design and manufacturing.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">ISO-Certified Quality</h3>
                <p className="text-gray-600">
                  Our manufacturing processes adhere to the strictest quality standards, ensuring consistent, reliable products for every application.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm animate-on-scroll">
                <h3 className="text-xl font-bold mb-3 text-kumru-navy">Global Delivery</h3>
                <p className="text-gray-600">
                  We ship our products worldwide, with efficient logistics ensuring timely delivery to any location.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedProducts />
        <BlogPreview />
        
        {/* Call to Action Section */}
        <section className="section-padding bg-kumru-navy text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Contact our team to discuss your hydraulic system needs. We're here to provide custom solutions tailored to your specific requirements.
            </p>
            <Link to="/contact">
              <button className="bg-kumru-yellow text-kumru-black py-3 px-8 rounded-lg text-lg font-medium hover:bg-kumru-yellow/90 transition-colors duration-150">
                Get in Touch
              </button>
            </Link>
          </div>
          
          {/* Robot Illustration */}
          <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
            <img 
              src="public/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
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
