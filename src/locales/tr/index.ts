
// Ana türkçe çeviriler birleştirme dosyası
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

// Tüm çevirileri birleştirme
export const trTranslations: TranslationsType = {
  ...navigationType,
  ...aboutType,
  ...blogType,
  ...contactType,
  ...footerType,
  ...heroType,
  ...productsType,
  ...servicesType,
  ...whyChooseUsType,
  ...ctaType
};
