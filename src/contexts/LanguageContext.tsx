
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, TranslationKey, translations, getDefaultLanguage } from '@/locales';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getDefaultLanguage());

  // Attempt to load previously set language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    console.info(`Switching language to: ${language}`);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!key) return '';
    
    const currentTranslations = translations[language];
    
    // Convert dash-case to camelCase for proper key lookup
    const normalizedKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    const translatedText = currentTranslations[normalizedKey];
    
    // If translation doesn't exist, return the key as fallback
    return translatedText || key;
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
