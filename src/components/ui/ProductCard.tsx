
import React from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  price?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
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
        className="h-56 bg-gray-200 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-xl font-bold p-4 text-white">{title}</h3>
        </div>
      </div>
      {description && (
        <div className="p-4">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
