
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

// Sample translations
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.title': 'Precision Hydraulic Systems & Custom-Engineered Lines',
    'hero.subtitle': 'Discover our capabilities and industry expertise',
    'hero.cta': 'Explore Our Solutions',
    // Add more translations as needed
  },
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.products': 'Ürünler',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'hero.title': 'Hassas Hidrolik Sistemler ve Özel Mühendislik Hatları',
    'hero.subtitle': 'Yeteneklerimizi ve sektör uzmanlığımızı keşfedin',
    'hero.cta': 'Çözümlerimizi Keşfedin',
    // Add more translations as needed
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
