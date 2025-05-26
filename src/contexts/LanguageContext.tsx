
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, TranslationKey, translations, getDefaultLanguage } from '@/locales';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');
  const [isLoading, setIsLoading] = useState(true);

  // Attempt to load previously set language from localStorage
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('preferred-language') as Language | null;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'tr')) {
        setLanguage(savedLanguage);
      } else {
        // Use browser language detection as fallback
        const browserLanguage = getDefaultLanguage();
        setLanguage(browserLanguage);
      }
    } catch (error) {
      console.warn('Error loading language from localStorage:', error);
      setLanguage('tr'); // Default fallback
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    if (!isLoading) {
      try {
        localStorage.setItem('preferred-language', language);
        console.info(`Language switched to: ${language}`);
      } catch (error) {
        console.warn('Error saving language to localStorage:', error);
      }
    }
  }, [language, isLoading]);

  // Enhanced translation function with better fallback and debugging
  const t = (key: string): string => {
    if (!key) {
      console.warn('Translation key is empty');
      return '';
    }
    
    try {
      const currentTranslations = translations[language];
      const fallbackTranslations = translations[language === 'en' ? 'tr' : 'en'];
      
      // Try to get translation for current language
      let translatedText = currentTranslations?.[key];
      
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
    } catch (error) {
      console.error('Error in translation function:', error);
      return key;
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
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
