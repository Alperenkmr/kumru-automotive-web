
// Main English translations merging file
import { TranslationsType } from "../types";
import { navigationType } from "./navigation";
import { aboutType } from "./about";
import { blogType } from "./blog";
import { contactType } from "./contact";
import { footerType } from "./footer";
import { heroType } from "./hero";
import { productsType } from "./products";
import { servicesType } from "./services";
import { whyChooseUsType } from "./whyChooseUs";
import { ctaType } from "./cta";
import { machineParkType } from "./machinePark";
import { generalType } from "./general";

// Merge all translations
export const enTranslations: TranslationsType = {
  ...navigationType,
  ...aboutType,
  ...blogType,
  ...contactType,
  ...footerType,
  ...heroType,
  ...productsType,
  ...servicesType,
  ...whyChooseUsType,
  ...ctaType,
  ...machineParkType,
  ...generalType
};
