
import { heroType } from './hero';
import { homeType } from './home';
import { blogType } from './blog';
import { blogPostsType } from './blog-posts';
import { blogPosts2Type } from './blog-posts2';
import { aboutType } from './about';
import { servicesType } from './services';
import { navigationType } from './navigation'; // Fixed import name from navType to navigationType
import { whyChooseUsType } from './whyChooseUs';
import { contactType } from './contact';
import { ctaType } from './cta';
import { footerType } from './footer';
import { productsType } from './products';
import { machineType } from './machine'; // Add the machine park translations

export const trTranslations = {
  ...heroType,
  ...homeType,
  ...blogType,
  ...blogPostsType,
  ...blogPosts2Type,
  ...aboutType,
  ...servicesType,
  ...navigationType, // Fixed reference to match the import name
  ...whyChooseUsType,
  ...contactType,
  ...ctaType,
  ...footerType,
  ...productsType,
  ...machineType, // Add the machine park translations
};
