
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollapsibleSection from "@/components/sections/CollapsibleSection";

const About = () => {
  const location = useLocation();
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to the corresponding section
    if (location.hash) {
      setTimeout(() => {
        const hash = location.hash.substring(1);
        if (hash === 'values' && valuesRef.current) {
          valuesRef.current.scrollIntoView({ behavior: 'smooth' });
          // Open the values section
          const valuesCollapsible = document.getElementById('values-collapsible');
          if (valuesCollapsible) {
            // This is a hacky way to click the button, but it works
            const button = valuesCollapsible.querySelector('button');
            if (button) button.click();
          }
        } else if (whatWeDoRef.current) {
          whatWeDoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">About RSS Kumru</h1>
            
            {/* What We Do - Collapsible Section */}
            <div ref={whatWeDoRef}>
              <CollapsibleSection title="What We Do" defaultOpen={true}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm relative">
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                    <p className="text-lg mb-4">
                      Founded over two decades ago, RSS Kumru Automotive has established itself as a leader in precision hydraulic systems and custom-engineered lines for the automotive and industrial sectors.
                    </p>
                    <p className="text-lg mb-4">
                      Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner for manufacturers around the globe. We specialize in designing and producing high-performance hydraulic hoses, fittings, and complete line assemblies tailored to our clients' exact specifications.
                    </p>
                    <p className="text-lg">
                      With ISO-certified manufacturing processes and a team of dedicated engineers, we deliver solutions that meet the highest standards of durability, reliability, and performance.
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
                      alt="RSS Kumru Robot Mascot" 
                      className="max-h-96 opacity-80"
                    />
                  </div>
                </div>
              </CollapsibleSection>
            </div>
            
            {/* Values - Collapsible Section */}
            <div ref={valuesRef} id="values-collapsible">
              <CollapsibleSection title="Team & Values">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm relative">
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                    <h3 className="text-xl font-bold mb-4 text-kumru-navy">Our Values</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">Excellence</h4>
                        <p>We are committed to excellence in every aspect of our business, from product design and manufacturing to customer service and support.</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">Innovation</h4>
                        <p>We continuously invest in research and development to create innovative solutions that address the evolving needs of our clients.</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">Integrity</h4>
                        <p>We conduct our business with the highest standards of integrity, maintaining transparent relationships with our clients, partners, and employees.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
                      alt="RSS Kumru Robot Mascot" 
                      className="max-h-96 opacity-80"
                    />
                  </div>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
