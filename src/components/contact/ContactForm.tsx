
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_f9nhn0a'; // EmailJS servis ID
const TEMPLATE_ID = 'template_tgb6f6f'; // EmailJS template ID
const USER_ID = '1vj6bAt5G-O65rVgj'; // EmailJS public key (User ID)

const ContactForm = () => {
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
  );
};

export default ContactForm;
