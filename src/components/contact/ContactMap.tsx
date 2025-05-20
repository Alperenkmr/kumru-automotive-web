
import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full mb-6 rounded-xl overflow-hidden h-80">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.915706726492!2d29.484520515407826!3d40.80784607932163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb2137efc59dB3%3A0xb5c04645dc8a7626!2sRSS+Kumru+Otomotiv!5e0!3m2!1str!2str!4v1523430297589" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        title="RSS Kumru location"
      ></iframe>
    </div>
  );
};

export default ContactMap;
