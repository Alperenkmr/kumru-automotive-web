
export type Language = 'en' | 'tr';

// Comprehensive translation keys covering all sections
export type TranslationKey = 
  // Navigation
  | 'nav.home'
  | 'nav.about'
  | 'nav.products'
  | 'nav.machinePark'
  | 'nav.blog'
  | 'nav.contact'
  | 'header.contactUs'
  | 'aboutSubmenu.whatWeDo'
  | 'aboutSubmenu.teamValues'
  | 'aboutSubmenu.certificates'
  
  // Hero Section
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.secondaryCta'
  
  // What We Do
  | 'whatWeDo.title'
  | 'whatWeDo.subtitle'
  | 'whatWeDo.content'
  | 'whatWeDo.item1.title'
  | 'whatWeDo.item1.description'
  | 'whatWeDo.item2.title'
  | 'whatWeDo.item2.description'
  | 'whatWeDo.item3.title'
  | 'whatWeDo.item3.description'
  
  // Why Choose Us
  | 'whyChooseUs.title'
  | 'whyChooseUs.subtitle'
  | 'whyChooseUs.expertise'
  | 'whyChooseUs.expertiseDesc'
  | 'whyChooseUs.quality'
  | 'whyChooseUs.qualityDesc'
  | 'whyChooseUs.delivery'
  | 'whyChooseUs.deliveryDesc'
  | 'whyChooseUs.item1.title'
  | 'whyChooseUs.item1.description'
  | 'whyChooseUs.item2.title'
  | 'whyChooseUs.item2.description'
  | 'whyChooseUs.item3.title'
  | 'whyChooseUs.item3.description'
  | 'whyChooseUs.item4.title'
  | 'whyChooseUs.item4.description'
  
  // How It Works
  | 'howItWorks.title'
  | 'howItWorks.subtitle'
  | 'howItWorks.step1.title'
  | 'howItWorks.step1.description'
  | 'howItWorks.step2.title'
  | 'howItWorks.step2.description'
  | 'howItWorks.step3.title'
  | 'howItWorks.step3.description'
  | 'howItWorks.step4.title'
  | 'howItWorks.step4.description'
  
  // Team Values
  | 'teamValues.title'
  | 'teamValues.content'
  
  // Featured Products
  | 'featuredProducts.title'
  | 'featuredProducts.viewAll'
  
  // Products
  | 'products.backToProducts'
  | 'products.catalog'
  | 'productsPage.title'
  | 'productsPage.subtitle'
  | 'productsPage.viewDetails'
  | 'productsPage.categories.all'
  | 'productsPage.categories.hydraulic'
  | 'productsPage.categories.engine'
  | 'productsPage.categories.fuel'
  
  // Blog
  | 'blog.title'
  | 'blog.subtitle'
  | 'blog.latestArticles'
  | 'blog.viewAll'
  | 'blog.backToBlog'
  | 'blog.readMore'
  | 'blog.publishedOn'
  | 'blog.author'
  | 'blog.searchPlaceholder'
  | 'blog.category'
  | 'blog.allCategories'
  | 'blog.latestFirst'
  | 'blog.noPostsFound'
  | 'blog.date'
  | 'blog.relatedImages'
  
  // Contact
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.name'
  | 'contact.message'
  | 'contact.submit'
  | 'contact.success'
  | 'contact.address'
  | 'contact.phone'
  | 'contact.emailAddress'
  | 'contact.hours'
  | 'contact.cta'
  | 'contactPage.title'
  | 'contactPage.subtitle'
  | 'contactPage.form.name'
  | 'contactPage.form.email'
  | 'contactPage.form.phone'
  | 'contactPage.form.subject'
  | 'contactPage.form.message'
  | 'contactPage.form.send'
  | 'contactPage.form.namePlaceholder'
  | 'contactPage.form.emailPlaceholder'
  | 'contactPage.form.phonePlaceholder'
  | 'contactPage.form.subjectPlaceholder'
  | 'contactPage.form.messagePlaceholder'
  | 'contactPage.info.address'
  | 'contactPage.info.phone'
  | 'contactPage.info.email'
  | 'contactPage.info.workingHours'
  | 'contactPage.info.workingHoursValue'
  
  // CTA
  | 'cta.ready'
  | 'cta.title'
  | 'cta.subtitle'
  | 'cta.description'
  | 'cta.button'
  
  // About
  | 'about.title'
  | 'about.paragraph1'
  | 'about.paragraph2'
  | 'about.paragraph3'
  | 'about.ourValues'
  | 'about.values.excellence'
  | 'about.values.excellenceDesc'
  | 'about.values.innovation'
  | 'about.values.innovationDesc'
  | 'about.values.integrity'
  | 'about.values.integrityDesc'
  | 'about.certificates.title'
  | 'about.certificates.paragraph1'
  | 'about.certificates.paragraph2'
  | 'about.certificates.paragraph3'
  | 'about.certificates.item1'
  | 'about.certificates.item2'
  | 'about.certificates.item3'
  | 'aboutPage.title'
  | 'aboutPage.subtitle'
  | 'aboutPage.description'
  
  // Footer
  | 'footer.description'
  | 'footer.quickLinks'
  | 'footer.services'
  | 'footer.contact'
  | 'footer.followUs'
  | 'footer.allRightsReserved'
  | 'footer.location'
  | 'footer.privacyPolicy'
  | 'footer.cookiePolicy'
  
  // Services
  | 'services.title'
  | 'services.hoses'
  | 'services.fittings'
  | 'services.ptfeLines'
  | 'services.turboPipes'
  | 'services.injectionLines'
  | 'services.hoses.name'
  | 'services.fittings.name'
  | 'services.ptfeLines.name'
  | 'services.turboPipes.name'
  | 'services.injectionLines.name'
  
  // Machine Park
  | 'machinePark.title'
  | 'machinePark.ourLaboratory'
  | 'machinePark.howWeDevelop'
  | 'machinePark.reverseEngineering.title'
  | 'machinePark.reverseEngineering.paragraph1'
  | 'machinePark.reverseEngineering.paragraph2'
  | 'machinePark.reverseEngineering.paragraph3'
  
  // Testimonials
  | 'testimonials.title'
  | 'testimonials.subtitle'
  
  // General
  | 'general.loading'
  | 'general.error'
  | 'general.tryAgain'
  | 'general.backToHome'
  | 'general.pageNotFound'
  | 'general.pageNotFoundDescription'
  
  // Product names and descriptions (dynamic)
  | string;

export type ProductTranslationKey = string;
export type TranslationsType = Record<string, string>;
