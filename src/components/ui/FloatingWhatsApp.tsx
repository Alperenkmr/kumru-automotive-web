
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  delay?: number;
}

const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber,
  message = "Merhaba, bilgi almak istiyorum.",
  delay = 2500,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Show the button after the specified delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleWhatsAppClick = () => {
    // Format the phone number and message for WhatsApp URL
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-5 bottom-20 z-50 flex items-end">
      {/* Popup message */}
      <div 
        className={cn(
          "bg-white px-4 py-3 rounded-lg shadow-lg mb-3 mr-3 max-w-[250px] transition-all duration-300 transform",
          isPopupOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <p className="text-gray-700 text-sm font-medium">
          Detaylı bilgi için bizimle iletişime geçin
        </p>
        <div className="w-3 h-3 bg-white rotate-45 absolute bottom-1 right-10 transform translate-y-1/2"></div>
      </div>

      {/* WhatsApp button - Even larger size */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsPopupOpen(true)}
        onMouseLeave={() => setIsPopupOpen(false)}
        className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg flex items-center justify-center relative group transition-all duration-200 scale-110"
      >
        <div className="flex items-center justify-center">
          {/* Further increased icon size from h-10 w-10 to h-12 w-12 */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Z" />
            <path d="M14 10a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0v-4Z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
