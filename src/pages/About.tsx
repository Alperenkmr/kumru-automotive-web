
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollapsibleSection from "@/components/sections/CollapsibleSection";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">{t('about.title')}</h1>
            
            {/* What We Do - Collapsible Section */}
            <CollapsibleSection title={t('about.whatWeDo')} defaultOpen={true}>
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
            
            {/* Values - Collapsible Section */}
            <CollapsibleSection title={t('about.values')}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-xl shadow-sm relative">
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                  <h3 className="text-xl font-bold mb-4 text-kumru-navy">{t('about.ourValues')}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.excellence')}</h4>
                      <p>{t('about.excellenceDesc')}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.innovation')}</h4>
                      <p>{t('about.innovationDesc')}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.integrity')}</h4>
                      <p>{t('about.integrityDesc')}</p>
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
