
import React, { useState } from "react";

const ContactMap = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log('Google Maps iframe yüklendi');
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.error('Google Maps iframe yüklenirken hata:', error);
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full mb-6 rounded-xl overflow-hidden h-80 relative">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-gray-500">Harita yükleniyor...</div>
        </div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
          <div className="text-red-500 text-center">
            <p>Harita yüklenirken bir hata oluştu.</p>
            <p className="text-sm mt-2">Lütfen sayfayı yenileyin.</p>
          </div>
        </div>
      )}

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.915706726492!2d29.484520515407826!3d40.80784607932163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb2137efc59dB3%3A0xb5c04645dc8a7626!2sRSS+Kumru+Otomotiv!5e0!3m2!1str!2str!4v1523430297589" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        title="RSS Kumru location"
        onLoad={handleLoad}
        onError={handleError}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;
