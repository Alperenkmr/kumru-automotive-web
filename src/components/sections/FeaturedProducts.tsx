
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
  const products = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      href: "/products/cabin-lifting-hose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      href: "/products/hydraulic-hose"
    },
    {
      id: 3,
      title: "PTFE LINED HOSE ASSEMBLY",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      href: "/products/ptfe-teflon-hose"
    },
    {
      id: 4,
      title: "TURBO PIPE HOSE",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      href: "/products/turbo-pipe-hose"
    },
    {
      id: 5,
      title: "INJECTION LINES",
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
      href: "/products/injection-lines"
    },
    {
      id: 6,
      title: "VALVE NOZZLE",
      imageSrc: "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
      href: "/products/valve-nozzle"
    },
  ];

  // Cabin Lifting Hose gallery images
  const cabinLiftingHoseImages = [
    { id: 1, src: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png", alt: "Cabin Lifting Hose 1" },
    { id: 2, src: "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png", alt: "Cabin Lifting Hose 2" },
    { id: 3, src: "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png", alt: "Cabin Lifting Hose 3" },
    { id: 4, src: "/lovable-uploads/89d2dd09-faaf-47b0-be0f-b97e4cdd24c5.png", alt: "Cabin Lifting Hose 4" }
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
