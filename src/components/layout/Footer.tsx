
import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('aboutSubmenu.whatWeDo'), href: "/about" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.blog'), href: "/blog" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const legalLinks = [
    { name: t('footer.privacy'), href: "/privacy" },
    { name: t('footer.cookies'), href: "/cookies" },
  ];

  return (
    <footer>
      {/* Navy bar above footer */}
      <div className="bg-kumru-navy h-1 py-3"></div>
      
      <div className="bg-kumru-navy text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4 flex items-center">
                <img 
                  src="/lovable-uploads/c42d9fdb-64c7-4345-9c1a-6f16b2878860.png" 
                  alt="RSS Kumru Logo" 
                  className="h-10 mr-2"
                />
                <span>RSS Kumru <span className="text-kumru-yellow">Automotive</span></span>
              </h3>
              <p className="text-gray-300 mb-4">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-kumru-yellow">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-300 hover:text-kumru-yellow">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">
                {t('footer.navigation')}
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-kumru-yellow transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location and Legal */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">{t('footer.location')}</h3>
              <p className="text-gray-300 mb-4">
                123 Industrial Parkway<br />
                Istanbul, Turkey 34000<br />
                +90 123 456 7890<br />
                info@rsskumru.com
              </p>
              
              <h3 className="text-xl font-montserrat font-bold mb-2 mt-6">{t('footer.legal')}</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-kumru-yellow transition-colors duration-150"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} RSS Kumru Automotive. {t('footer.rights')}
            </p>
          </div>
        </div>
        
        {/* Robot Illustration Watermark */}
        <div className="absolute right-8 bottom-8 opacity-10 hidden lg:block">
          <img 
            src="/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
            alt="RSS Kumru Robot" 
            className="h-24"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
