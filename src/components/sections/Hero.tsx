
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section
      className={cn(
        "min-h-screen relative flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://source.unsplash.com/photo-1487887235947-a955ef187fcc')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.6)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6">
          Precision Hydraulic Systems<br />&amp; Custom Engineered Lines
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-200">
          Discover our capabilities and industry expertise
        </p>
        <div className="flex justify-center">
          <Button className="bg-kumru-yellow hover:bg-kumru-yellow/90 text-kumru-black py-6 px-8 rounded-2xl text-lg">
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
