
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CollapsibleSection from "@/components/sections/CollapsibleSection";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const location = useLocation();
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

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
        } else if (hash === 'certificates' && certificatesRef.current) {
          certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
          // Open the certificates section
          const certificatesCollapsible = document.getElementById('certificates-collapsible');
          if (certificatesCollapsible) {
            const button = certificatesCollapsible.querySelector('button');
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
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">{t('about.title')}</h1>
            
            {/* What We Do - Collapsible Section */}
            <div ref={whatWeDoRef}>
              <CollapsibleSection title={t('whatWeDo.title')} defaultOpen={true}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm relative">
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                    <p className="text-lg mb-4">
                      {t('about.paragraph1')}
                    </p>
                    <p className="text-lg mb-4">
                      {t('about.paragraph2')}
                    </p>
                    <p className="text-lg">
                      {t('about.paragraph3')}
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
              <CollapsibleSection title={t('teamValues.title')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm relative">
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                    <h3 className="text-xl font-bold mb-4 text-kumru-navy">{t('about.ourValues')}</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.values.excellence')}</h4>
                        <p>{t('about.values.excellenceDesc')}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.values.innovation')}</h4>
                        <p>{t('about.values.innovationDesc')}</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-kumru-navy">{t('about.values.integrity')}</h4>
                        <p>{t('about.values.integrityDesc')}</p>
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
            
            {/* Certificates - New Collapsible Section */}
            <div ref={certificatesRef} id="certificates-collapsible">
              <CollapsibleSection title={t('aboutSubmenu.certificates')}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm relative">
                    <div className="absolute -left-2 top-8 w-4 h-4 bg-white transform rotate-45"></div>
                    <h3 className="text-xl font-bold mb-4 text-kumru-navy">{t('about.certificates.title')}</h3>
                    <p className="text-lg mb-4">
                      {t('about.certificates.paragraph1')}
                    </p>
                    <p className="text-lg mb-4">
                      {t('about.certificates.paragraph2')}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
                      <li>{t('about.certificates.item1')}</li>
                      <li>{t('about.certificates.item2')}</li>
                      <li>{t('about.certificates.item3')}</li>
                    </ul>
                    <p className="text-lg mt-4">
                      {t('about.certificates.paragraph3')}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Card className="w-full max-w-md overflow-hidden border-2 border-kumru-navy/20">
                      <CardContent className="p-1">
                        <AspectRatio ratio={3/4} className="bg-muted">
                          <img 
                            src="/lovable-uploads/64ad2975-7b2b-414d-b67d-56dc0bcc8fab.png" 
                            alt="RSS Kumru ISO 9001:2015 Certificate" 
                            className="object-contain h-full w-full"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
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
