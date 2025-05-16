
import React, { useState, useEffect } from "react";
import { WhatsappIcon } from "lucide-react";
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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
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

      {/* WhatsApp button */}
      <button
        onClick={togglePopup}
        onDoubleClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center relative group transition-all duration-200"
      >
        <WhatsappIcon className="h-7 w-7" />
        
        {/* Quick hint */}
        <span className="absolute top-0 left-0 -mt-8 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Çift tıkla
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
