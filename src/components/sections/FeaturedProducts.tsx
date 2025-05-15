
import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface FeaturedProductsProps {
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ className }) => {
  // Cabin Lifting Hose gallery images
  const cabinLiftingHoseImages = [
    { id: 1, src: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png", alt: "Cabin Lifting Hose 1" },
    { id: 2, src: "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png", alt: "Cabin Lifting Hose 2" },
    { id: 3, src: "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png", alt: "Cabin Lifting Hose 3" },
    { id: 4, src: "/lovable-uploads/89d2dd09-faaf-47b0-be0f-b97e4cdd24c5.png", alt: "Cabin Lifting Hose 4" }
  ];
  
  // Hydraulic Hose gallery images
  const hydraulicHoseImages = [
    { id: 1, src: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png", alt: "Hydraulic Hose 1" },
    { id: 2, src: "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png", alt: "Hydraulic Hose 2" },
    { id: 3, src: "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png", alt: "Hydraulic Hose 3" }
  ];

  return (
    <section
      id="products"
      className={cn(
        "section-padding bg-white",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="section-title text-kumru-black">Our Products</h2>

        {/* CABIN LIFTING HOSE Gallery - 2x2 Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-kumru-navy">CABIN LIFTING HOSE</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cabinLiftingHoseImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>

        {/* HYDRAULIC HOSE Gallery - 3 Images in a row (2+1 on mobile) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-kumru-navy">HYDRAULIC HOSE</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hydraulicHoseImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>

        {/* See All Products Button */}
        <div className="text-center mt-8">
          <a
            href="/products"
            className="inline-block bg-kumru-yellow hover:bg-kumru-yellow/90 text-kumru-black py-3 px-8 rounded-xl text-lg font-medium transition-colors duration-150 shadow-md"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
