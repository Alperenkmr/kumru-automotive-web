
import React, { useState } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language, t } = useLanguage();

  // Basit schema markup
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": language === 'tr' ? "İletişim - RSS Kumru Automotive" : "Contact - RSS Kumru Automotive",
    "description": language === 'tr' 
      ? "RSS Kumru Automotive ile iletişime geçin."
      : "Contact RSS Kumru Automotive.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RSS Kumru Automotive",
      "telephone": "+902627248824",
      "email": "info@rsskumru.com"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "İletişim - RSS Kumru Automotive" : "Contact Us - RSS Kumru Automotive"}
        description={language === 'tr' 
          ? "RSS Kumru Automotive ile iletişime geçin. Hidrolik hortum ve otomotiv parçaları için uzman desteği."
          : "Contact RSS Kumru Automotive for expert support on hydraulic hoses and automotive parts."
        }
        canonicalUrl="/contact"
        structuredData={contactPageSchema}
      />
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy text-center">
              {language === 'tr' ? 'En Doğru Çözümler İçin Bizimle İletişime Geçin' : 'Contact Us For The Most Accurate Solutions'}
            </h1>
            
            {/* Success Banner */}
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                <strong className="font-bold">{language === 'tr' ? 'Başarılı!' : 'Success!'}</strong>
                <span className="block sm:inline"> {t('contact.success')}</span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm onSubmitSuccess={() => setIsSubmitted(true)} />
              </div>
              
              {/* Map and Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{language === 'tr' ? 'Neredeyiz?' : 'Where are we?'}</h2>
                <ContactMap />
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
