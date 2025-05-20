
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_f9nhn0a'; // EmailJS servis ID - güncellenmiş değer
const TEMPLATE_ID = 'template_tgb6f6f'; // EmailJS template ID
const USER_ID = '1vj6bAt5G-O65rVgj'; // EmailJS public key (User ID)

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // EmailJS ile form verilerini gönder
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
          // Dosya ekini EmailJS free planda desteklemediği için gönderilmiyor
        },
        USER_ID
      );
      
      // Başarılı mesaj göster
      setIsSubmitted(true);
      toast.success("Mesajınız başarıyla gönderildi!");
      
      // Form verilerini sıfırla
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null
      });
      
      // 5 saniye sonra başarı mesajını kaldır
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("E-posta gönderme hatası:", error);
      toast.error("Mesaj gönderilirken bir hata oluştu!");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy text-center">
              Contact Us For The Most Accurate Solutions
            </h1>
            
            {/* Success Banner */}
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Mesajınız gönderildi. En kısa sürede size geri dönüş yapacağız.</span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız Soyadınız</Label>
                    <Input 
                      id="name" 
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Adresiniz</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Konu</Label>
                    <Input 
                      id="subject" 
                      placeholder="Konu" 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Açıklama & Mesaj</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Mesajınız..." 
                      className="min-h-[150px]" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file">Dosya Ekle (optional)</Label>
                    <Input 
                      id="file" 
                      type="file"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-gray-500">Not: Dosya ekleri şu an e-posta ile gönderilmemektedir.</p>
                  </div>
                  
                  <Button type="submit" className="bg-kumru-navy hover:bg-kumru-navy/90 text-white w-full py-6">
                    {isSubmitted ? "Gönderildi" : "Mesaj Gönder"}
                  </Button>
                </form>
              </div>
              
              {/* Map and Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Where are we?</h2>
                
                {/* Map embed */}
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
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
