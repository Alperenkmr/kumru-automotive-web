
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-bold text-xl mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mr-4 text-kumru-teal">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Address</h4>
            <p className="text-gray-600">
              Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3<br />
              Gebze / KOCAELİ
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 text-kumru-teal">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-gray-600">
              <a href="mailto:info@rsskumru.com" className="hover:text-kumru-teal">info@rsskumru.com</a><br />
              <a href="mailto:alperen@rsskumru.com" className="hover:text-kumru-teal">alperen@rsskumru.com</a>
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="mr-4 text-kumru-teal">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold mb-1">Phone & Fax</h4>
            <p className="text-gray-600">
              T. +90(262) 724 88 24-28<br />
              F. +90(262) 724 88 29
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
