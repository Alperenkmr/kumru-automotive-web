
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
      "url": "https://rsskumru.com",
      "logo": "https://rsskumru.com/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3",
        "addressLocality": "Gebze",
        "addressRegion": "Kocaeli",
        "postalCode": "41400",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.8156",
        "longitude": "29.4398"
      },
      "telephone": "+902627248824",
      "faxNumber": "+902627248829",
      "email": "info@rsskumru.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+902627248824",
          "contactType": "customer service",
          "areaServed": ["TR", "EU", "US"],
          "availableLanguage": ["Turkish", "English"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+905494262949",
          "contactType": "sales",
          "areaServed": ["TR", "EU"],
          "availableLanguage": ["Turkish", "English"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/alperen-kumru-519596307/",
        "https://www.instagram.com/rss_kumru_automotive/",
        "https://www.facebook.com/rsskumru"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:30",
          "closes": "17:30"
        }
      ]
    }
  };

  // Breadcrumbs yapısı oluştur
  const breadcrumbs = [
    { name: language === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
    { name: language === 'tr' ? 'İletişim' : 'Contact', url: '/contact' }
  ];

  // Alternatif dil URL'leri
  const alternateLanguages = [
    { locale: 'tr-TR', url: '/contact' },
    { locale: 'en-US', url: '/en/contact' }
  ];

  // Coğrafi konum bilgisi - RSS Kumru merkez ofis
  const geolocation = {
    latitude: "40.8156",
    longitude: "29.4398",
    placeName: "Gebze, Kocaeli, Turkey"
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
        breadcrumbs={breadcrumbs}
        alternateLanguages={alternateLanguages}
        keywords={["iletişim", "contact", "RSS Kumru", "adres", "telefon", "email", "form"]}
        language={language === 'tr' ? 'tr-TR' : 'en-US'}
        geolocation={geolocation}
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
