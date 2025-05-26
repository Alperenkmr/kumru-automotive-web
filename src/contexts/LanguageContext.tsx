
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

  // Enhanced translation function with better fallback and debugging
  const t = (key: string): string => {
    if (!key) {
      console.warn('Translation key is empty');
      return '';
    }
    
    const currentTranslations = translations[language];
    const fallbackTranslations = translations[language === 'en' ? 'tr' : 'en'];
    
    // Try to get translation for current language
    let translatedText = currentTranslations[key];
    
    // If not found, try fallback language
    if (!translatedText && fallbackTranslations) {
      translatedText = fallbackTranslations[key];
      if (translatedText) {
        console.warn(`Translation missing for key "${key}" in ${language}, using fallback`);
      }
    }
    
    // If still not found, return the key itself as fallback
    if (!translatedText) {
      console.warn(`Translation missing for key "${key}" in both languages`);
      // Return a more user-friendly version of the key
      return key.split('.').pop()?.replace(/([A-Z])/g, ' $1').trim() || key;
    }
    
    return translatedText;
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
