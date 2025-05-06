
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import AdPlaceholder from "@/components/ui/AdPlaceholder";
import { cn } from "@/lib/utils";

interface FeaturedProductsProps {
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "High-Pressure Hydraulic Hose",
      description: "Industrial-grade hydraulic hose for high-pressure applications up to 5000 PSI.",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      price: "From $89.99",
    },
    {
      id: 2,
      title: "Stainless Steel Fittings",
      description: "Precision-manufactured stainless steel fittings for secure, leak-free connections.",
      imageSrc: "https://source.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      price: "From $19.99",
    },
    {
      id: 3,
      title: "PTFE Lined Hose Assembly",
      description: "Temperature-resistant PTFE lined hose for chemical and extreme condition applications.",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      price: "From $129.99",
    },
    {
      id: 4,
      title: "Custom Turbo Oil Lines",
      description: "High-performance oil lines custom designed for turbocharged engine systems.",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      price: "From $149.99",
    },
  ];

  const visibleProducts = () => {
    // On mobile show 1, on tablet show 2, on desktop show 3
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 1;
    if (screenWidth < 1024) return 2;
    return 3;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProducts() >= products.length
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, products.length - visibleProducts())
        : prevIndex - 1
    );
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      id="products"
      className={cn(
        "section-padding bg-gray-50",
        className
      )}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-2xl">
              Explore our most popular hydraulic solutions, engineered for
              reliability and performance.
            </p>
          </div>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <Button
              variant="outline"
              className="rounded-full p-3"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              className="rounded-full p-3"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {products
                .slice(currentIndex, currentIndex + visibleProducts())
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    imageSrc={product.imageSrc}
                    price={product.price}
                    className="animate-fade-in"
                  />
                ))}
            </div>
          </div>

          {/* Ad Rectangle */}
          <div className="col-span-1 hidden lg:block">
            <AdPlaceholder width={300} height={250} />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-kumru-teal hover:bg-kumru-teal/90">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
