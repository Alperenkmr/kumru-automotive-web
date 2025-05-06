
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "min-h-[80vh] relative flex items-center bg-white",
        className
      )}
    >
      {/* White background with subtle navy geometric overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(120deg, transparent 40%, rgba(10, 31, 68, 0.05) 70%)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="absolute w-64 h-64 rounded-full bg-kumru-navy/5 -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-kumru-navy/5 -bottom-40 -left-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 text-kumru-navy">
            Precision Hydraulic Systems <br />&amp; Custom-Engineered Lines
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            Welcome to RSS Kumru Automotive.
          </p>
          <Button 
            className="bg-kumru-yellow hover:bg-kumru-yellow/90 text-kumru-black py-6 px-8 rounded-xl text-lg"
            asChild
          >
            <Link to="/products">Explore Our Solutions</Link>
          </Button>
        </div>
      </div>

      {/* Robot Illustration */}
      <div className="absolute right-0 bottom-0 z-0 opacity-5 hidden lg:block">
        <img 
          src="public/lovable-uploads/2de732da-ae11-4fa3-914c-8973124fa5e5.png" 
          alt="RSS Kumru Robot" 
          className="h-[80vh] object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
