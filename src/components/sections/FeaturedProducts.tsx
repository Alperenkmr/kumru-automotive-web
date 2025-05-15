
import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";

interface FeaturedProductsProps {
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ className }) => {
  const products = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    },
    {
      id: 3,
      title: "PTFE LINED HOSE ASSEMBLY",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      id: 4,
      title: "TURBO PIPE HOSE",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
    },
    {
      id: 5,
      title: "INJECTION LINES",
      imageSrc: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    },
    {
      id: 6,
      title: "VALVE NOZZLE",
      imageSrc: "https://source.unsplash.com/photo-1494891848038-7bd202a2afeb",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description=""
                  imageSrc={product.imageSrc}
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
