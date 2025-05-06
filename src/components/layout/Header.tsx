
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: "Home", href: "/" },
    { 
      name: "About", 
      href: "#about", 
      hasSubmenu: true,
      submenu: [
        { name: "What We Do", href: "#what-we-do" },
        { name: "Careers", href: "#careers" },
      ]
    },
    { name: "Products", href: "#products" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-kumru-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-montserrat font-bold text-2xl text-kumru-black">
              RSS Kumru <span className="text-kumru-navy">Automotive</span>
            </span>
          </a>

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
                  <a
                    href={link.href}
                    className="text-kumru-black hover:text-kumru-navy transition-colors duration-150 font-montserrat font-medium"
                  >
                    {link.name}
                  </a>
                )}

                {/* About Submenu */}
                {link.hasSubmenu && aboutMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg mt-2 p-2"
                    onMouseEnter={() => setAboutMenuOpen(true)}
                    onMouseLeave={() => setAboutMenuOpen(false)}
                  >
                    {link.submenu?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block p-3 text-kumru-black hover:text-kumru-navy hover:bg-gray-50 rounded-md transition-colors duration-150"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-kumru-yellow text-kumru-black hover:bg-kumru-yellow/90">
              Learn More
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-kumru-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                        <a
                          key={item.name}
                          href={item.href}
                          className="py-2 text-kumru-black hover:text-kumru-navy transition-colors duration-150"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="text-kumru-black hover:text-kumru-navy py-2 transition-colors duration-150 font-montserrat font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
          <Button className="bg-kumru-yellow text-kumru-black mt-4 hover:bg-kumru-yellow/90 w-full">
            Learn More
          </Button>
        </nav>
      </div>

      {/* Ad Leaderboard */}
      <div className="container mx-auto mt-2">
        <AdPlaceholder width={728} height={90} className="mx-auto" />
      </div>
    </header>
  );
};

export default Header;
