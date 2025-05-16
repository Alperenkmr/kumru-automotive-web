
import { enTranslations } from "./en";
import { trTranslations } from "./tr";
import { Language, TranslationsType } from "./types";

export * from "./types";

export const translations: Record<Language, TranslationsType> = {
  en: enTranslations,
  tr: trTranslations
};

export const availableLanguages: Language[] = ['en', 'tr'];

export const getDefaultLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0] as Language;
  return availableLanguages.includes(browserLang) ? browserLang : 'en';
};
