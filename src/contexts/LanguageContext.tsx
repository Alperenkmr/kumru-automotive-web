
import React, { createContext, useState, useContext } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translations: any;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.products": "Products",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "header.contactUs": "Contact Us",
      "aboutSubmenu.whatWeDo": "What We Do",
      "aboutSubmenu.teamValues": "Team & Values",
      "hero.title": "Leading Manufacturer of Hydraulic Solutions",
      "hero.subtitle": "High-quality hydraulic hoses, fittings, and systems for various industrial applications.",
      "hero.cta": "Explore Products",
      "whatWeDo.title": "What We Do",
      "whatWeDo.content": "At RSS Kumru Automotive, we specialize in designing and manufacturing high-quality hydraulic and fluid transfer solutions. Our extensive product range is designed to meet the demanding requirements of various industries including automotive, agriculture, construction, and industrial manufacturing.",
      "whyChooseUs.title": "Why Choose Us",
      "whyChooseUs.expertise": "Industry Expertise",
      "whyChooseUs.expertiseDesc": "Over 25 years of specialized experience in hydraulic systems and components.",
      "whyChooseUs.quality": "Premium Quality",
      "whyChooseUs.qualityDesc": "ISO-certified manufacturing processes and rigorous quality control standards.",
      "whyChooseUs.delivery": "Fast Delivery",
      "whyChooseUs.deliveryDesc": "Global logistics network ensuring quick delivery to customers worldwide.",
      "blog.latestArticles": "Latest Articles",
      "blog.viewAll": "View All Articles",
      "cta.ready": "Ready to Get Started?",
      "cta.description": "Contact our team for custom hydraulic solutions tailored to your specific requirements.",
      "cta.button": "Contact Us Today",
      "products.ourProducts": "Our Products",
      "products.cabinLiftingHose": "CABIN LIFTING HOSE",
      "products.hydraulicHose": "HYDRAULIC HOSE",
      "products.viewAll": "View All Products",
    },
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.about": "Hakkımızda",
      "nav.products": "Ürünler",
      "nav.blog": "Blog",
      "nav.contact": "İletişim",
      "header.contactUs": "İletişime Geçin",
      "aboutSubmenu.whatWeDo": "Ne Yapıyoruz",
      "aboutSubmenu.teamValues": "Ekip & Değerler",
      "hero.title": "Hidrolik Çözümlerde Lider Üretici",
      "hero.subtitle": "Çeşitli endüstriyel uygulamalar için yüksek kaliteli hidrolik hortumlar, bağlantı parçaları ve sistemler.",
      "hero.cta": "Ürünleri Keşfedin",
      "whatWeDo.title": "Ne Yapıyoruz",
      "whatWeDo.content": "RSS Kumru Automotive olarak, yüksek kaliteli hidrolik ve sıvı transfer çözümleri tasarlamak ve üretmek konusunda uzmanız. Geniş ürün yelpazemiz, otomotiv, tarım, inşaat ve endüstriyel üretim dahil olmak üzere çeşitli sektörlerin zorlu gereksinimlerini karşılayacak şekilde tasarlanmıştır.",
      "whyChooseUs.title": "Neden Bizi Seçmelisiniz",
      "whyChooseUs.expertise": "Sektör Uzmanlığı",
      "whyChooseUs.expertiseDesc": "Hidrolik sistemler ve bileşenlerinde 25 yılı aşkın özel deneyim.",
      "whyChooseUs.quality": "Üstün Kalite",
      "whyChooseUs.qualityDesc": "ISO sertifikalı üretim süreçleri ve titiz kalite kontrol standartları.",
      "whyChooseUs.delivery": "Hızlı Teslimat",
      "whyChooseUs.deliveryDesc": "Dünya çapındaki müşterilere hızlı teslimat sağlayan global lojistik ağı.",
      "blog.latestArticles": "Son Makaleler",
      "blog.viewAll": "Tüm Makaleleri Görüntüle",
      "cta.ready": "Başlamaya Hazır mısınız?",
      "cta.description": "Özel gereksinimlerinize göre özel hidrolik çözümler için ekibimizle iletişime geçin.",
      "cta.button": "Bugün İletişime Geçin",
      "products.ourProducts": "Ürünlerimiz",
      "products.cabinLiftingHose": "KABİN KALDIRMA HORTUMU",
      "products.hydraulicHose": "HİDROLİK HORTUM",
      "products.viewAll": "Tüm Ürünleri Görüntüle",
    },
  };

  // Add the translation function to return translated strings
  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      if (result && result[k]) {
        result = result[k];
      } else {
        // Return key if translation not found
        return key;
      }
    }
    
    return result as string;
  };

  const value: LanguageContextProps = {
    language,
    setLanguage,
    translations,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export { LanguageProvider, useLanguage };
