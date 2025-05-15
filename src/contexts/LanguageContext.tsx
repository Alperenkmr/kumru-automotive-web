import React, { createContext, useState, useContext } from 'react';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      "Index.Welcome": "Welcome",
      "Index.AboutUs": "About Us",
      "Index.Products": "Products",
      "Index.Contact": "Contact",
      "Index.HeroTitle": "Leading Manufacturer of Hydraulic Solutions",
      "Index.HeroSubtitle": "High-quality hydraulic hoses, fittings, and systems for various industrial applications.",
      "Index.LearnMore": "Learn More",
      "Index.WhyChooseUs": "Why Choose Us?",
      "Index.Expertise": "Expertise",
      "Index.ExpertiseDescription": "Decades of experience in hydraulic engineering and manufacturing.",
      "Index.Quality": "Quality",
      "Index.QualityDescription": "Premium materials and rigorous testing ensure top-notch product performance.",
      "Index.Innovation": "Innovation",
      "Index.InnovationDescription": "Continuous research and development to provide cutting-edge solutions.",
      "Index.FeaturedProducts": "Our Products",
      "Index.HydraulicHoses": "Hydraulic Hoses",
      "Index.HydraulicHosesDescription": "Durable hoses for a wide range of applications.",
      "Index.HydraulicFittings": "Hydraulic Fittings",
      "Index.HydraulicFittingsDescription": "Precision fittings for leak-free connections.",
      "Index.HydraulicSystems": "Hydraulic Systems",
      "Index.HydraulicSystemsDescription": "Custom-engineered systems for optimal performance.",
      "About.Title": "About Us",
      "About.Subtitle": "Learn more about our company and our mission.",
      "About.OurStory": "Our Story",
      "About.OurStoryDescription": "Founded in 1985, we have been committed to providing high-quality hydraulic solutions to our customers. With decades of experience, we have grown to become a leading manufacturer in the industry.",
      "About.OurMission": "Our Mission",
      "About.OurMissionDescription": "To deliver innovative and reliable hydraulic products that meet the evolving needs of our customers. We strive for excellence in every aspect of our business, from product design to customer service.",
      "About.OurValues": "Our Values",
      "About.Value1": "Quality",
      "About.Value1Description": "We are committed to maintaining the highest standards of quality in our products and services.",
      "About.Value2": "Innovation",
      "About.Value2Description": "We continuously invest in research and development to provide cutting-edge solutions.",
      "About.Value3": "Customer Satisfaction",
      "About.Value3Description": "We prioritize our customers and strive to exceed their expectations.",
      "Products.Title": "Our Products",
      "Products.Subtitle": "Explore our wide range of hydraulic solutions.",
      "Contact.Title": "Contact Us",
      "Contact.Subtitle": "Get in touch with us for inquiries and support.",
      "Contact.FormTitle": "Send us a message",
      "Contact.Name": "Name",
      "Contact.Email": "Email",
      "Contact.Message": "Message",
      "Contact.Submit": "Submit",
      "Contact.Address": "Address",
      "Contact.Phone": "Phone",
      "Contact.EmailAddress": "Email",
      "Footer.Copyright": "Copyright © 2024. All rights reserved.",
      "Footer.Links": "Links",
      "Footer.Contact": "Contact",
      "Products.CabinLiftingHose": "Cabin Lifting Hose",
      "Products.HydraulicHose": "Hydraulic Hose",
      "Products.PTFELinedHoseAssembly": "PTFE Lined Hose Assembly",
      "Products.TurboPipeHose": "Turbo Pipe Hose",
      "Products.InjectionLines": "Injection Lines",
      "Products.HydraulicSystem": "Hydraulic System",
    },
    tr: {
      "Index.Welcome": "Hoş Geldiniz",
      "Index.AboutUs": "Hakkımızda",
      "Index.Products": "Ürünler",
      "Index.Contact": "İletişim",
      "Index.HeroTitle": "Önde Gelen Hidrolik Çözümler Üreticisi",
      "Index.HeroSubtitle": "Çeşitli endüstriyel uygulamalar için yüksek kaliteli hidrolik hortumlar, bağlantı parçaları ve sistemler.",
      "Index.LearnMore": "Daha Fazla Bilgi",
      "Index.WhyChooseUs": "Neden Bizi Seçmelisiniz?",
      "Index.Expertise": "Uzmanlık",
      "Index.ExpertiseDescription": "Hidrolik mühendisliği ve üretiminde onlarca yıllık deneyim.",
      "Index.Quality": "Kalite",
      "Index.QualityDescription": "Üstün malzemeler ve titiz testler, birinci sınıf ürün performansı sağlar.",
      "Index.Innovation": "Yenilik",
      "Index.InnovationDescription": "En son çözümleri sunmak için sürekli araştırma ve geliştirme.",
      "Index.FeaturedProducts": "Öne Çıkan Ürünlerimiz",
      "Index.HydraulicHoses": "Hidrolik Hortumlar",
      "Index.HydraulicHosesDescription": "Geniş uygulama yelpazesi için dayanıklı hortumlar.",
      "Index.HydraulicFittings": "Hidrolik Bağlantı Parçaları",
      "Index.HydraulicFittingsDescription": "Sızıntısız bağlantılar için hassas bağlantı parçaları.",
      "Index.HydraulicSystems": "Hidrolik Sistemler",
      "Index.HydraulicSystemsDescription": "Optimum performans için özel olarak tasarlanmış sistemler.",
      "About.Title": "Hakkımızda",
      "About.Subtitle": "Şirketimiz ve misyonumuz hakkında daha fazla bilgi edinin.",
      "About.OurStory": "Hikayemiz",
      "About.OurStoryDescription": "1985 yılında kurulan şirketimiz, müşterilerimize yüksek kaliteli hidrolik çözümler sunmaya kendini adamıştır. Onlarca yıllık deneyimle, sektörde önde gelen bir üretici haline geldik.",
      "About.OurMission": "Misyonumuz",
      "About.OurMissionDescription": "Müşterilerimizin sürekli değişen ihtiyaçlarını karşılayan yenilikçi ve güvenilir hidrolik ürünler sunmak. İşimizin her alanında, ürün tasarımından müşteri hizmetlerine kadar mükemmelliği hedefliyoruz.",
      "About.OurValues": "Değerlerimiz",
      "About.Value1": "Kalite",
      "About.Value1Description": "Ürün ve hizmetlerimizde en yüksek kalite standartlarını korumaya kararlıyız.",
      "About.Value2": "Yenilik",
      "About.Value2Description": "En son çözümleri sunmak için sürekli olarak araştırma ve geliştirmeye yatırım yapıyoruz.",
      "About.Value3": "Müşteri Memnuniyeti",
      "About.Value3Description": "Müşterilerimize öncelik veriyor ve beklentilerini aşmaya çalışıyoruz.",
      "Products.Title": "Ürünlerimiz",
      "Products.Subtitle": "Geniş hidrolik çözümleri yelpazemizi keşfedin.",
      "Contact.Title": "Bize Ulaşın",
      "Contact.Subtitle": "Sorularınız ve destek için bizimle iletişime geçin.",
      "Contact.FormTitle": "Bize mesaj gönderin",
      "Contact.Name": "Ad",
      "Contact.Email": "E-posta",
      "Contact.Message": "Mesaj",
      "Contact.Submit": "Gönder",
      "Contact.Address": "Adres",
      "Contact.Phone": "Telefon",
      "Contact.EmailAddress": "E-posta",
      "Footer.Copyright": "Telif Hakkı © 2024. Tüm hakları saklıdır.",
      "Footer.Links": "Bağlantılar",
      "Footer.Contact": "İletişim",
      "Products.CabinLiftingHose": "Kabin Kaldırma Hortumu",
      "Products.HydraulicHose": "Hidrolik Hortum",
      "Products.PTFELinedHoseAssembly": "PTFE Kaplı Hortum Tertibatı",
      "Products.TurboPipeHose": "Turbo Boru Hortumu",
      "Products.InjectionLines": "Enjeksiyon Hatları",
      "Products.HydraulicSystem": "Hidrolik Sistem",
    },
  };

  const value: LanguageContextProps = {
    language,
    setLanguage,
    translations,
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
