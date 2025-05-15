
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
    'whatWeDo.content': 'At RSS Kumru, we specialize in producing high-performance hydraulic systems, lines, and fittings tailored to the demands of automotive and agricultural machinery industries. Our advanced manufacturing capabilities, deep technical know-how, and customer-centric approach set us apart. We don't just deliver parts – we deliver trust, durability, and performance.',
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
    'footer.location': 'Aksaray, Turkey',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.cookiePolicy': 'Cookie Policy',
    'whyChooseUs.title': 'Why Choose Us',
    'whyChooseUs.expertise': '20+ Years\' Expertise',
    'whyChooseUs.expertiseDesc': 'Since 2001, we\'ve been building durable, precision-engineered hydraulic systems trusted by industry leaders.',
    'whyChooseUs.quality': 'ISO-Certified Quality',
    'whyChooseUs.qualityDesc': 'Every component we produce meets global ISO standards for quality and reliability.',
    'whyChooseUs.delivery': 'Global Delivery',
    'whyChooseUs.deliveryDesc': 'We ship internationally with guaranteed delivery times and full logistics support.',
    'cta.ready': 'Ready to Work With Us?',
    'cta.description': 'Let\'s discuss your project and build your ideal hydraulic solution.',
    'cta.button': 'Get in Touch',
    'about.paragraph1': 'We are a Turkish-based company with over two decades of experience in hydraulic systems manufacturing.',
    'about.paragraph2': 'From turbo oil lines to custom fuel and injection systems, our catalog is built for precision and endurance.',
    'about.paragraph3': 'We proudly serve clients in automotive, agricultural, and industrial markets across the globe.',
    'about.values.excellence': 'Excellence – We strive to deliver best-in-class performance in every product.',
    'about.values.innovation': 'Innovation – Constantly upgrading our technology and processes.',
    'about.values.integrity': 'Integrity – Transparent, honest partnerships with our clients.',
    'contact.address': '2. Organize Sanayi Bölgesi, 68100, Aksaray, Türkiye',
    'contact.phone': '+90 382 266 57 90',
    'contact.email': 'info@rsskumru.com',
    'contact.hours': 'Hafta içi 08:30 - 18:00'
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
    'whatWeDo.content': 'RSS Kumru\'da, otomotiv ve tarım makineleri endüstrilerinin taleplerine uygun yüksek performanslı hidrolik sistemler, hatlar ve bağlantı parçaları üretiminde uzmanlaşmış bulunuyoruz. Gelişmiş üretim yeteneklerimiz, derin teknik bilgimiz ve müşteri odaklı yaklaşımımız bizi farklı kılıyor. Sadece parça değil, güven, dayanıklılık ve performans sunuyoruz.',
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
    'footer.location': 'Aksaray, Türkiye',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.cookiePolicy': 'Çerez Politikası',
    'whyChooseUs.title': 'Neden Bizi Seçmelisiniz',
    'whyChooseUs.expertise': '20+ Yıllık Uzmanlık',
    'whyChooseUs.expertiseDesc': '2001\'den beri, sektör liderleri tarafından güvenilen dayanıklı, hassas mühendislikle tasarlanmış hidrolik sistemler üretiyoruz.',
    'whyChooseUs.quality': 'ISO Sertifikalı Kalite',
    'whyChooseUs.qualityDesc': 'Ürettiğimiz her bileşen, kalite ve güvenilirlik için global ISO standartlarını karşılamaktadır.',
    'whyChooseUs.delivery': 'Global Teslimat',
    'whyChooseUs.deliveryDesc': 'Garantili teslimat süreleri ve tam lojistik desteğiyle uluslararası sevkiyat yapıyoruz.',
    'cta.ready': 'Bizimle Çalışmaya Hazır mısınız?',
    'cta.description': 'Projenizi tartışalım ve ideal hidrolik çözümünüzü birlikte oluşturalım.',
    'cta.button': 'İletişime Geçin',
    'about.paragraph1': 'Hidrolik sistem üretiminde yirmi yılı aşkın deneyime sahip Türkiye merkezli bir şirketiz.',
    'about.paragraph2': 'Turbo yağ hatlarından özel yakıt ve enjeksiyon sistemlerine kadar ürün kataloğumuz hassasiyet ve dayanıklılık için tasarlanmıştır.',
    'about.paragraph3': 'Otomotiv, tarım ve endüstriyel pazarlarda dünya genelindeki müşterilerimize hizmet vermekten gurur duyuyoruz.',
    'about.values.excellence': 'Mükemmellik - Her üründe en iyi performansı sunmak için çalışıyoruz.',
    'about.values.innovation': 'İnovasyon - Teknolojimizi ve süreçlerimizi sürekli geliştiriyoruz.',
    'about.values.integrity': 'Dürüstlük - Müşterilerimizle şeffaf ve dürüst ortaklıklar kuruyoruz.',
    'contact.address': '2. Organize Sanayi Bölgesi, 68100, Aksaray, Türkiye',
    'contact.phone': '+90 382 266 57 90',
    'contact.email': 'info@rsskumru.com',
    'contact.hours': 'Hafta içi 08:30 - 18:00'
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
