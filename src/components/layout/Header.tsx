
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
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
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products", hasMegaMenu: true },
    { name: "Services", href: "/#services" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const productCategories = [
    {
      name: "Hoses",
      description: "High-quality hydraulic hoses for various applications",
      href: "#",
    },
    {
      name: "Fittings",
      description: "Precision engineered fittings for secure connections",
      href: "#",
    },
    {
      name: "PTFE Lines",
      description: "Temperature resistant PTFE lines for extreme conditions",
      href: "#",
    },
    {
      name: "Turbo Oil Pipes",
      description: "Specialized pipes for turbocharger oil delivery systems",
      href: "#",
    },
    {
      name: "Injection Lines",
      description: "High-pressure injection lines for fuel delivery systems",
      href: "#",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-montserrat font-bold text-2xl text-kumru-charcoal">
              RSS Kumru <span className="text-kumru-teal">Automotive</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasMegaMenu ? (
                  <button
                    className="flex items-center text-kumru-charcoal hover:text-kumru-teal transition-colors duration-150 font-montserrat font-medium"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-kumru-charcoal hover:text-kumru-teal transition-colors duration-150 font-montserrat font-medium"
                  >
                    {link.name}
                  </a>
                )}

                {/* Mega Menu */}
                {link.hasMegaMenu && megaMenuOpen && (
                  <div
                    className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-lg mt-2 p-6"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    onMouseLeave={() => setMegaMenuOpen(false)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {productCategories.map((category) => (
                        <a
                          key={category.name}
                          href={category.href}
                          className="group"
                        >
                          <div className="p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
                            <h3 className="font-montserrat font-semibold text-kumru-charcoal group-hover:text-kumru-teal transition-colors duration-150">
                              {category.name}
                            </h3>
                            <p className="text-sm mt-1 text-gray-600">
                              {category.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-kumru-orange text-white hover:bg-kumru-orange/90">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-kumru-charcoal focus:outline-none"
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
            <a
              key={link.name}
              href={link.href}
              className="text-kumru-charcoal hover:text-kumru-teal py-2 transition-colors duration-150 font-montserrat font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-kumru-orange text-white mt-4 hover:bg-kumru-orange/90 w-full">
            Get a Quote
          </Button>
        </nav>
      </div>

      {/* Ad Leaderboard */}
      <div className="container mx-auto mt-2">
        <div className="w-full h-[90px] bg-gray-200 flex items-center justify-center text-gray-400">
          Ad Unit: 728×90
        </div>
      </div>
    </header>
  );
};

export default Header;
