
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define supported languages
type Language = 'en' | 'tr';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Extended translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'header.contactUs': 'Contact Us',
    'hero.title': 'Precision Hydraulic Systems & Custom-Engineered Lines',
    'hero.subtitle': 'Discover our capabilities and industry expertise',
    'hero.cta': 'Explore Our Solutions',
    'aboutSubmenu.whatWeDo': 'What We Do',
    'aboutSubmenu.teamValues': 'Team & Values',
    'whatWeDo.title': 'What We Do',
    'whatWeDo.content': 'We specialize in designing and manufacturing high-quality hydraulic systems for various industrial applications. Our team of engineers works closely with clients to develop customized solutions that meet their specific requirements.',
    'teamValues.title': 'Team & Values',
    'teamValues.content': 'Our team is composed of experienced professionals who are dedicated to excellence and innovation. We value integrity, quality, and customer satisfaction above all else.',
    'featuredProducts.title': 'Featured Products',
    'featuredProducts.viewAll': 'View All Products',
    'products.backToProducts': 'Back to Products',
    'blog.latestArticles': 'Latest Articles',
    'blog.viewAll': 'View All Articles',
    'blog.backToBlog': 'Back to Blog',
    'contact.title': 'Contact Us',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Submit',
    'contact.success': 'Your message has been sent successfully!',
    'footer.followUs': 'Follow Us',
    'footer.location': 'Istanbul, Turkey',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'whyChooseUs.title': 'Why Choose Us',
    'whyChooseUs.expertise': '20+ Years\' Expertise',
    'whyChooseUs.expertiseDesc': 'With over two decades of industry experience, we\'ve developed unparalleled knowledge in hydraulic system design and manufacturing.',
    'whyChooseUs.quality': 'ISO-Certified Quality',
    'whyChooseUs.qualityDesc': 'Our manufacturing processes adhere to the strictest quality standards, ensuring consistent, reliable products for every application.',
    'whyChooseUs.delivery': 'Global Delivery',
    'whyChooseUs.deliveryDesc': 'We ship our products worldwide, with efficient logistics ensuring timely delivery to any location.',
    'cta.ready': 'Ready to Work With Us?',
    'cta.description': 'Contact our team to discuss your hydraulic system needs. We\'re here to provide custom solutions tailored to your specific requirements.',
    'cta.button': 'Get in Touch',
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'header.contactUs': 'Bize Ulaşın',
    'hero.title': 'Hassas Hidrolik Sistemler ve Özel Mühendislik Hatları',
    'hero.subtitle': 'Yeteneklerimizi ve sektör uzmanlığımızı keşfedin',
    'hero.cta': 'Çözümlerimizi Keşfedin',
    'aboutSubmenu.whatWeDo': 'Ne Yapıyoruz',
    'aboutSubmenu.teamValues': 'Ekip & Değerler',
    'whatWeDo.title': 'Ne Yapıyoruz',
    'whatWeDo.content': 'Çeşitli endüstriyel uygulamalar için yüksek kaliteli hidrolik sistemlerin tasarımı ve üretiminde uzmanlaşmış bulunmaktayız. Mühendis ekibimiz, müşterilerin özel ihtiyaçlarını karşılayan özelleştirilmiş çözümler geliştirmek için onlarla yakın çalışmaktadır.',
    'teamValues.title': 'Ekip & Değerler',
    'teamValues.content': 'Ekibimiz, mükemmelliğe ve yeniliğe adanmış deneyimli profesyonellerden oluşmaktadır. Her şeyden önce dürüstlük, kalite ve müşteri memnuniyetine değer veriyoruz.',
    'featuredProducts.title': 'Öne Çıkan Ürünler',
    'featuredProducts.viewAll': 'Tüm Ürünleri Görüntüle',
    'products.backToProducts': 'Ürünlere Geri Dön',
    'blog.latestArticles': 'En Son Makaleler',
    'blog.viewAll': 'Tüm Makaleleri Görüntüle',
    'blog.backToBlog': 'Bloga Geri Dön',
    'contact.title': 'Bize Ulaşın',
    'contact.name': 'İsim',
    'contact.email': 'E-posta',
    'contact.message': 'Mesaj',
    'contact.submit': 'Gönder',
    'contact.success': 'Mesajınız başarıyla gönderildi!',
    'footer.followUs': 'Bizi Takip Edin',
    'footer.location': 'İstanbul, Türkiye',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.cookiePolicy': 'Çerez Politikası',
    'whyChooseUs.title': 'Neden Bizi Seçmelisiniz',
    'whyChooseUs.expertise': '20+ Yıllık Uzmanlık',
    'whyChooseUs.expertiseDesc': 'Yirmi yılı aşkın sektör deneyimimizle, hidrolik sistem tasarımı ve üretiminde benzersiz bir bilgi birikimine sahibiz.',
    'whyChooseUs.quality': 'ISO Sertifikalı Kalite',
    'whyChooseUs.qualityDesc': 'Üretim süreçlerimiz en sıkı kalite standartlarına uymakta olup, her uygulama için tutarlı ve güvenilir ürünler sunmaktadır.',
    'whyChooseUs.delivery': 'Global Teslimat',
    'whyChooseUs.deliveryDesc': 'Ürünlerimizi dünya çapında gönderiyoruz, verimli lojistik sayesinde herhangi bir lokasyona zamanında teslimat yapıyoruz.',
    'cta.ready': 'Bizimle Çalışmaya Hazır mısınız?',
    'cta.description': 'Hidrolik sistem ihtiyaçlarınız için ekibimizle iletişime geçin. Özel gereksinimlerinize uygun çözümler sunmak için buradayız.',
    'cta.button': 'İletişime Geçin',
  }
};

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key as keyof typeof currentTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
