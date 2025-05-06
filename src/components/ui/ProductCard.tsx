
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  price?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  price,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div
        className="h-48 bg-gray-200 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {price && (
          <div className="absolute top-4 right-4 bg-kumru-orange text-white py-1 px-3 rounded-full font-semibold">
            {price}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-kumru-charcoal">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          variant="outline"
          className="w-full border-kumru-teal text-kumru-teal hover:bg-kumru-teal hover:text-white transition-colors duration-200"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
