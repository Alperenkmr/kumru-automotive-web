
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

  // İletişim sayfası için schema.org yapılandırılmış veri
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": language === 'tr' ? "İletişim | RSS Kumru Automotive" : "Contact Us | RSS Kumru Automotive",
    "description": language === 'tr' 
      ? "RSS Kumru Automotive ile iletişime geçin. İletişim bilgilerimiz, adres ve telefon numaralarımıza buradan ulaşabilirsiniz."
      : "Contact RSS Kumru Automotive. Find our contact information, address and phone numbers here.",
    "mainEntity": {
      "@type": "Organization",
      "name": "RSS Kumru Automotive",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Org. San. Böl. Aksaray",
        "addressLocality": "Aksaray",
        "addressRegion": "Aksaray",
        "postalCode": "68100",
        "addressCountry": "Turkey"
      },
      "telephone": "+905494262949",
      "email": "info@rsskumru.com",
      "logo": "https://rsskumru.com/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={language === 'tr' ? "İletişim" : "Contact Us"}
        description={language === 'tr' 
          ? "RSS Kumru Automotive ile iletişime geçin. İletişim formu, adres bilgileri ve telefon numaralarımız için sayfamızı ziyaret edin."
          : "Contact RSS Kumru Automotive. Visit our page for contact form, address information, and phone numbers."
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
                <strong className="font-bold">Başarılı!</strong>
                <span className="block sm:inline"> Mesajınız gönderildi. En kısa sürede size geri dönüş yapacağız.</span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <ContactForm />
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
