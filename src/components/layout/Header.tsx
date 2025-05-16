
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/locales";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { 
      name: t('nav.about'), 
      href: "/about", 
      hasSubmenu: true,
      submenu: [
        { name: t('aboutSubmenu.whatWeDo'), href: "/about" },
        { name: t('aboutSubmenu.teamValues'), href: "/about#values" },
      ]
    },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.blog'), href: "/blog" },
    { name: t('nav.contact'), href: "/contact" },
  ];

  const switchLanguage = (lang: Language) => {
    setLanguage(lang);
    console.log(`Switching language to: ${lang}`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-4"
          : "bg-white py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/fe351aa4-95dd-4aa9-b5af-9832055afe78.png" 
              alt="RSS Kumru Automotive Logo" 
              className="h-20 mr-2" // Increased logo size even more
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasSubmenu ? (
                  <button
                    className="flex items-center text-kumru-black hover:text-kumru-navy transition-colors duration-150 font-montserrat font-medium"
                    onMouseEnter={() => setAboutMenuOpen(true)}
                    onMouseLeave={() => setAboutMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-kumru-black hover:text-kumru-navy transition-colors duration-150 font-montserrat font-medium"
                  >
                    {link.name}
                  </Link>
                )}

                {/* About Submenu */}
                {link.hasSubmenu && aboutMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-2 p-2"
                    onMouseEnter={() => setAboutMenuOpen(true)}
                    onMouseLeave={() => setAboutMenuOpen(false)}
                  >
                    {link.submenu?.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block p-3 text-kumru-black hover:text-kumru-navy hover:bg-gray-50 rounded-md transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Language Toggle and CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 mr-2">
              <button 
                className={`w-8 h-5 rounded overflow-hidden border ${language === 'en' ? 'border-kumru-navy' : 'border-gray-300'}`}
                onClick={() => switchLanguage('en')}
                aria-label="Switch to English"
              >
                <img 
                  src="https://flagcdn.com/w20/us.png" 
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>
              <button 
                className={`w-8 h-5 rounded overflow-hidden border ${language === 'tr' ? 'border-kumru-navy' : 'border-gray-300'}`}
                onClick={() => switchLanguage('tr')}
                aria-label="Türkçeye geç"
              >
                <img 
                  src="https://flagcdn.com/w20/tr.png" 
                  alt="Turkish" 
                  className="w-full h-full object-cover"
                />
              </button>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-kumru-yellow text-kumru-black hover:bg-kumru-yellow/90"
              asChild
            >
              <Link to="/contact">{t('header.contactUs')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-1">
              <button 
                className={`w-6 h-4 rounded overflow-hidden border ${language === 'en' ? 'border-kumru-navy' : 'border-gray-300'}`}
                onClick={() => switchLanguage('en')}
                aria-label="Switch to English"
              >
                <img 
                  src="https://flagcdn.com/w20/us.png" 
                  alt="English"
                  className="w-full h-full object-cover"
                />
              </button>
              <button 
                className={`w-6 h-4 rounded overflow-hidden border ${language === 'tr' ? 'border-kumru-navy' : 'border-gray-300'}`}
                onClick={() => switchLanguage('tr')}
                aria-label="Türkçeye geç"
              >
                <img 
                  src="https://flagcdn.com/w20/tr.png" 
                  alt="Turkish" 
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="text-kumru-black focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white ${
          isMenuOpen ? "block" : "hidden"
        } py-4 px-4 absolute w-full shadow-lg`}
      >
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.hasSubmenu ? (
                <>
                  <button
                    className="flex justify-between items-center text-kumru-black py-2 transition-colors duration-150 font-montserrat font-medium"
                    onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {aboutMenuOpen && (
                    <div className="ml-4 mt-1 flex flex-col space-y-2">
                      {link.submenu?.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="py-2 text-kumru-black hover:text-kumru-navy transition-colors duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className="text-kumru-black hover:text-kumru-navy py-2 transition-colors duration-150 font-montserrat font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button 
            className="bg-kumru-yellow text-kumru-black mt-4 hover:bg-kumru-yellow/90 w-full"
            asChild
          >
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>{t('header.contactUs')}</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
