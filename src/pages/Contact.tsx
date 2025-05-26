
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
  const { language } = useLanguage();

  // Contact sayfası için özel schema markup
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": language === 'tr' ? "İletişim - RSS Kumru Automotive" : "Contact - RSS Kumru Automotive",
    "description": language === 'tr' 
      ? "RSS Kumru Automotive ile iletişime geçin. Hidrolik hortum, teflon hortum ve otomotiv parçaları için iletişim bilgileri, adres ve harita."
      : "Contact RSS Kumru Automotive. Contact information, address and map for hydraulic hoses, teflon hoses and automotive parts.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RSS Kumru Automotive",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3",
        "addressLocality": "Gebze",
        "addressRegion": "Kocaeli",
        "postalCode": "41400",
        "addressCountry": "TR"
      },
      "telephone": "+902627248824",
      "email": "info@rsskumru.com",
      "url": "https://rsskumru.com",
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+902627248824",
          "contactType": "customer service",
          "availableLanguage": ["Turkish", "English"],
          "areaServed": ["TR", "EU", "US"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+905494262949",
          "contactType": "sales",
          "availableLanguage": ["Turkish", "English"],
          "areaServed": ["TR", "EU"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "İletişim - En Doğru Çözümler İçin Bizimle İletişime Geçin" : "Contact Us - Get In Touch For The Most Accurate Solutions"}
        description={language === 'tr' 
          ? "RSS Kumru Automotive ile iletişime geçin. Hidrolik hortum, PTFE teflon hortum, turbo hortum ve otomotiv parçaları için uzman desteği. Gebze/Kocaeli merkezli, Türkiye ve Avrupa'ya hizmet. Tel: +90 262 724 88 24"
          : "Contact RSS Kumru Automotive for expert support on hydraulic hoses, PTFE teflon hoses, turbo hoses and automotive parts. Based in Gebze/Kocaeli, serving Turkey and Europe. Tel: +90 262 724 88 24"
        }
        canonicalUrl="/contact"
        keywords={[
          "RSS Kumru iletişim",
          "RSS Kumru contact", 
          "hidrolik hortum iletişim",
          "otomotiv parçaları iletişim",
          "Gebze otomotiv",
          "Kocaeli hidrolik",
          "RSS Kumru telefon",
          "RSS Kumru adres",
          "RSS Kumru email",
          "otomotiv tedarikçi iletişim",
          "hydraulic hose supplier contact",
          "automotive parts Turkey",
          "PTFE hose contact",
          "turbo hose supplier"
        ]}
        language={language === 'tr' ? 'tr-TR' : 'en-US'}
        structuredData={contactPageSchema}
        ogType="website"
        ogImage="/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png"
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
                <strong className="font-bold">Başarılı!</strong>
                <span className="block sm:inline"> Mesajınız gönderildi. En kısa sürede size geri dönüş yapacağız.</span>
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
