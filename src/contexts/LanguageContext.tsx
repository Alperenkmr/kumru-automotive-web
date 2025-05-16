
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
      
      // Hero section
      "hero.title": "Leading Manufacturer of Hydraulic Solutions",
      "hero.subtitle": "High-quality hydraulic hoses, fittings, and systems for various industrial applications.",
      "hero.cta": "Explore Products",
      
      // What We Do section
      "whatWeDo.title": "What We Do",
      "whatWeDo.content": "At RSS Kumru Automotive, we specialize in designing and manufacturing high-quality hydraulic and fluid transfer solutions. Our extensive product range is designed to meet the demanding requirements of various industries including automotive, agriculture, construction, and industrial manufacturing.",
      "whatWeDo.services": "Our Core Services",
      
      // Why Choose Us section
      "whyChooseUs.title": "Why Choose Us",
      "whyChooseUs.expertise": "Industry Expertise",
      "whyChooseUs.expertiseDesc": "Over 25 years of specialized experience in hydraulic systems and components.",
      "whyChooseUs.quality": "Premium Quality",
      "whyChooseUs.qualityDesc": "ISO-certified manufacturing processes and rigorous quality control standards.",
      "whyChooseUs.delivery": "Fast Delivery",
      "whyChooseUs.deliveryDesc": "Global logistics network ensuring quick delivery to customers worldwide.",
      
      // Blog section
      "blog.latestArticles": "Latest Articles",
      "blog.viewAll": "View All Articles",
      
      // Call to Action section
      "cta.ready": "Ready to Get Started?",
      "cta.description": "Contact our team for custom hydraulic solutions tailored to your specific requirements.",
      "cta.button": "Contact Us Today",
      
      // Products section
      "products.ourProducts": "Our Products",
      "products.cabinLiftingHose": "CABIN LIFTING HOSE",
      "products.hydraulicHose": "HYDRAULIC HOSE", 
      "products.hydraulicSystem": "HYDRAULIC SYSTEM",
      "products.injectionLines": "INJECTION LINES",
      "products.leakOfFuelPipe": "LEAK OF FUEL PIPE",
      "products.ptfeTeflonHose": "PTFE TEFLON HOSE",
      "products.steeringHose": "STEERING HOSE",
      "products.transferPump": "TRANSFER PUMP",
      "products.turboPipeHose": "TURBO PIPE HOSE",
      "products.turboTimingPipes": "TURBO TIMING PIPES AND HOSES",
      "products.valveNozzle": "VALVE NOZZLE",
      "products.valveRecord": "VALVE RECORD",
      "products.valueTiming": "VALVE TIMING",
      "products.vesselLines": "VESSEL LINES",
      "products.viewAll": "View All Products",
      
      // About page
      "about.title": "About RSS Kumru",
      "about.whatWeDo": "What We Do",
      "about.values": "Team & Values",
      "about.ourValues": "Our Values",
      "about.excellence": "Excellence",
      "about.excellenceDesc": "We are committed to excellence in every aspect of our business, from product design and manufacturing to customer service and support.",
      "about.innovation": "Innovation",
      "about.innovationDesc": "We continuously invest in research and development to create innovative solutions that address the evolving needs of our clients.",
      "about.integrity": "Integrity",
      "about.integrityDesc": "We conduct our business with the highest standards of integrity, maintaining transparent relationships with our clients, partners, and employees.",
      
      // Contact page
      "contact.title": "Contact Us",
      "contact.sendMessage": "Send us a message",
      "contact.name": "Your Name",
      "contact.email": "Email Address",
      "contact.message": "Message",
      "contact.uploadSpecs": "Upload Specifications (optional)",
      "contact.submit": "Send Message",
      "contact.findUs": "Find Us",
      "contact.address": "Address",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.hours": "Business Hours",
      
      // Footer
      "footer.description": "Precision-engineered hydraulic systems customized to your needs. ISO-certified quality with global expertise.",
      "footer.navigation": "Navigation",
      "footer.location": "Location",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.cookies": "Cookie Policy",
      "footer.rights": "All rights reserved.",
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
      
      // Hero section
      "hero.title": "Hidrolik Çözümlerde Lider Üretici",
      "hero.subtitle": "Çeşitli endüstriyel uygulamalar için yüksek kaliteli hidrolik hortumlar, bağlantı parçaları ve sistemler.",
      "hero.cta": "Ürünleri Keşfedin",
      
      // What We Do section
      "whatWeDo.title": "Ne Yapıyoruz",
      "whatWeDo.content": "RSS Kumru Automotive olarak, yüksek kaliteli hidrolik ve sıvı transfer çözümleri tasarlamak ve üretmek konusunda uzmanız. Geniş ürün yelpazemiz, otomotiv, tarım, inşaat ve endüstriyel üretim dahil olmak üzere çeşitli sektörlerin zorlu gereksinimlerini karşılayacak şekilde tasarlanmıştır.",
      "whatWeDo.services": "Temel Hizmetlerimiz",
      
      // Why Choose Us section
      "whyChooseUs.title": "Neden Bizi Seçmelisiniz",
      "whyChooseUs.expertise": "Sektör Uzmanlığı",
      "whyChooseUs.expertiseDesc": "Hidrolik sistemler ve bileşenlerinde 25 yılı aşkın özel deneyim.",
      "whyChooseUs.quality": "Üstün Kalite",
      "whyChooseUs.qualityDesc": "ISO sertifikalı üretim süreçleri ve titiz kalite kontrol standartları.",
      "whyChooseUs.delivery": "Hızlı Teslimat",
      "whyChooseUs.deliveryDesc": "Dünya çapındaki müşterilere hızlı teslimat sağlayan global lojistik ağı.",
      
      // Blog section
      "blog.latestArticles": "Son Makaleler",
      "blog.viewAll": "Tüm Makaleleri Görüntüle",
      
      // Call to Action section
      "cta.ready": "Başlamaya Hazır mısınız?",
      "cta.description": "Özel gereksinimlerinize göre özel hidrolik çözümler için ekibimizle iletişime geçin.",
      "cta.button": "Bugün İletişime Geçin",
      
      // Products section
      "products.ourProducts": "Ürünlerimiz",
      "products.cabinLiftingHose": "KABİN KALDIRMA HORTUMU",
      "products.hydraulicHose": "HİDROLİK HORTUM",
      "products.hydraulicSystem": "HİDROLİK SİSTEM",
      "products.injectionLines": "ENJEKSİYON HATLARI",
      "products.leakOfFuelPipe": "YAKIT SIZINTI BORUSU",
      "products.ptfeTeflonHose": "PTFE TEFLON HORTUM",
      "products.steeringHose": "DİREKSİYON HORTUMU",
      "products.transferPump": "TRANSFER POMPASI",
      "products.turboPipeHose": "TURBO BORU HORTUMU",
      "products.turboTimingPipes": "TURBO ZAMANLAMA BORULARI VE HORTUMLARI",
      "products.valveNozzle": "VALF NOZULU",
      "products.valveRecord": "VALF KAYDI",
      "products.valueTiming": "VALF ZAMANLAMASI",
      "products.vesselLines": "KARGO HATLARI",
      "products.viewAll": "Tüm Ürünleri Görüntüle",
      
      // About page
      "about.title": "RSS Kumru Hakkında",
      "about.whatWeDo": "Ne Yapıyoruz",
      "about.values": "Ekip & Değerler",
      "about.ourValues": "Değerlerimiz",
      "about.excellence": "Mükemmeliyet",
      "about.excellenceDesc": "Ürün tasarımı ve üretiminden müşteri hizmetleri ve desteğine kadar işimizin her yönünde mükemmelliğe bağlıyız.",
      "about.innovation": "İnovasyon",
      "about.innovationDesc": "Müşterilerimizin değişen ihtiyaçlarını karşılayan yenilikçi çözümler yaratmak için sürekli olarak araştırma ve geliştirmeye yatırım yapıyoruz.",
      "about.integrity": "Dürüstlük",
      "about.integrityDesc": "İşimizi en yüksek dürüstlük standartlarıyla yürütüyor, müşterilerimiz, ortaklarımız ve çalışanlarımızla şeffaf ilişkiler kuruyoruz.",
      
      // Contact page
      "contact.title": "İletişim",
      "contact.sendMessage": "Bize mesaj gönderin",
      "contact.name": "Adınız",
      "contact.email": "E-posta Adresi",
      "contact.message": "Mesaj",
      "contact.uploadSpecs": "Teknik Özellikler Yükleyin (isteğe bağlı)",
      "contact.submit": "Mesaj Gönder",
      "contact.findUs": "Bizi Bulun",
      "contact.address": "Adres",
      "contact.phone": "Telefon",
      "contact.email": "E-posta",
      "contact.hours": "Çalışma Saatleri",
      
      // Footer
      "footer.description": "İhtiyaçlarınıza göre özelleştirilmiş hassas mühendislikle üretilmiş hidrolik sistemler. ISO sertifikalı kalite ve global uzmanlık.",
      "footer.navigation": "Navigasyon",
      "footer.location": "Konum",
      "footer.legal": "Yasal",
      "footer.privacy": "Gizlilik Politikası",
      "footer.cookies": "Çerez Politikası",
      "footer.rights": "Tüm hakları saklıdır.",
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
