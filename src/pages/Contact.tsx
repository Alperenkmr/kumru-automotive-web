
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Smith" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      className="min-h-[150px]" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="file">Upload Specifications (optional)</Label>
                    <Input id="file" type="file" />
                  </div>
                  
                  <Button type="submit" className="bg-kumru-navy hover:bg-kumru-navy/90 text-white w-full py-6">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Map and Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                
                {/* Map placeholder */}
                <div className="bg-gray-200 w-full h-72 mb-6 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500">Map embed placeholder</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg">Address</h3>
                    <p>123 Industrial Parkway<br />Istanbul, Turkey 34000</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p>+90 123 456 7890</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p>info@rsskumru.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
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
