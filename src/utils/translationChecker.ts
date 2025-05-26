
import { translations } from '@/locales';

// Development utility to check for missing translations
export const checkMissingTranslations = () => {
  if (process.env.NODE_ENV !== 'development') return;

  const enKeys = Object.keys(translations.en);
  const trKeys = Object.keys(translations.tr);
  
  const missingInEnglish = trKeys.filter(key => !enKeys.includes(key));
  const missingInTurkish = enKeys.filter(key => !trKeys.includes(key));
  
  if (missingInEnglish.length > 0) {
    console.warn('Missing English translations:', missingInEnglish);
  }
  
  if (missingInTurkish.length > 0) {
    console.warn('Missing Turkish translations:', missingInTurkish);
  }
  
  if (missingInEnglish.length === 0 && missingInTurkish.length === 0) {
    console.info('✅ All translations are complete!');
  }
  
  return {
    missingInEnglish,
    missingInTurkish,
    isComplete: missingInEnglish.length === 0 && missingInTurkish.length === 0
  };
};

// Check specific translation key existence
export const hasTranslation = (key: string, language: 'en' | 'tr' = 'en'): boolean => {
  return Boolean(translations[language][key]);
};

// Get all translation keys for a specific prefix
export const getTranslationKeys = (prefix?: string): string[] => {
  const allKeys = Object.keys(translations.en);
  if (!prefix) return allKeys;
  return allKeys.filter(key => key.startsWith(prefix));
};
