
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
  // Featured products - limiting to 6 for the homepage
  const products = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      href: "/products/cabin-lifting-hose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      href: "/products/hydraulic-hose"
    },
    {
      id: 3,
      title: "PTFE LINED HOSE ASSEMBLY",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      href: "/products/ptfe-teflon-hose"
    },
    {
      id: 4,
      title: "TURBO PIPE HOSE",
      imageSrc: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      href: "/products/turbo-pipe-hose"
    },
    {
      id: 5,
      title: "INJECTION LINES",
      imageSrc: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      href: "/products/injection-lines"
    },
    {
      id: 6,
      title: "HYDRAULIC SYSTEM",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      href: "/products/hydraulic-system"
    },
  ];

  // Cabin Lifting Hose gallery images (showing just 2 on the homepage)
  const cabinLiftingHoseImages = [
    { id: 1, src: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png", alt: "Cabin Lifting Hose 1" },
    { id: 2, src: "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png", alt: "Cabin Lifting Hose 2" },
  ];
  
  // Hydraulic Hose gallery images (showing just 2 on the homepage)
  const hydraulicHoseImages = [
    { id: 1, src: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png", alt: "Hydraulic Hose 1" },
    { id: 2, src: "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png", alt: "Hydraulic Hose 2" },
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

        {/* CABIN LIFTING HOSE Gallery Sample - 2 Images */}
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

        {/* HYDRAULIC HOSE Gallery Sample - 2 Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-kumru-navy">HYDRAULIC HOSE</h3>
          <div className="grid grid-cols-2 gap-4">
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

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description=""
                  imageSrc={product.imageSrc}
                  href={product.href}
                  className="animate-fade-in"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
