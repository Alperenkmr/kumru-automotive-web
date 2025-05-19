
import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

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
      imageSrc: "/lovable-uploads/463837ac-180d-4516-9b6d-58b38390a0bc.png",
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
