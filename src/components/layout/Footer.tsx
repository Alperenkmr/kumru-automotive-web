
import React from "react";
import { Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
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
                Precision-engineered hydraulic systems customized to your needs.
                ISO-certified quality with global expertise.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/alperen-kumru-519596307/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-kumru-yellow">
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
                Navigation
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-kumru-yellow transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location and Legal */}
            <div>
              <h3 className="text-xl font-montserrat font-bold mb-4">Location</h3>
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 text-kumru-yellow mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3<br />
                  Gebze / KOCAELİ
                </p>
              </div>
              
              <div className="flex items-start mb-2">
                <Mail className="h-5 w-5 text-kumru-yellow mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  <a href="mailto:info@rsskumru.com" className="hover:text-kumru-yellow">info@rsskumru.com</a><br />
                  <a href="mailto:alperen@rsskumru.com" className="hover:text-kumru-yellow">alperen@rsskumru.com</a>
                </p>
              </div>
              
              <div className="flex items-start mb-4">
                <Phone className="h-5 w-5 text-kumru-yellow mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  T. +90(262) 724 88 24-28<br />
                  F. +90(262) 724 88 29
                </p>
              </div>
              
              <h3 className="text-xl font-montserrat font-bold mb-2 mt-6">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-kumru-yellow transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} RSS Kumru Automotive. All rights reserved.
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
