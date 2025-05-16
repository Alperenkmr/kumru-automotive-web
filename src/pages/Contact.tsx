
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log("Form submitted", formData);
    
    // Show success message
    setIsSubmitted(true);
    toast.success("Your message has been sent successfully!");
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
      file: null
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">{t('contact.title')}</h1>
            
            {/* Success Banner */}
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 animate-fade-in" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent. We'll get back to you soon.</span>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('contact.sendMessage')}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input 
                      id="name" 
                      placeholder="John Smith" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="min-h-[150px]" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file">{t('contact.uploadSpecs')}</Label>
                    <Input 
                      id="file" 
                      type="file"
                      onChange={handleFileChange}
                    />
                  </div>
                  
                  <Button type="submit" className="bg-kumru-navy hover:bg-kumru-navy/90 text-white w-full py-6">
                    {t('contact.submit')}
                  </Button>
                </form>
              </div>
              
              {/* Map and Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('contact.findUs')}</h2>
                
                {/* Map placeholder */}
                <div className="bg-gray-200 w-full h-72 mb-6 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Map embed placeholder</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.address')}</h3>
                    <p>123 Industrial Parkway<br />Istanbul, Turkey 34000</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.phone')}</h3>
                    <p>+90 123 456 7890</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.email')}</h3>
                    <p>info@rsskumru.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">{t('contact.hours')}</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
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
