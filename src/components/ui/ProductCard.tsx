
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

interface ProductCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  price?: string;
  className?: string;
  href?: string;
  translationKey?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  className,
  href = "#",
  translationKey,
}) => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Check if we're on the home or products page
  const isHomeOrProducts = location.pathname === "/" || location.pathname === "/products";
  
  // If a translationKey is provided, use it to get the translated title
  const displayTitle = translationKey && t(translationKey) !== translationKey ? 
    t(translationKey) : 
    title;
  
  return (
    <a 
      href={href}
      className={cn(
        "block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        isHomeOrProducts ? "bg-white" : "bg-white",
        className
      )}
    >
      <div className={cn(
        "h-56 relative rounded-lg",
        "border-8 border-kumru-navy"
      )}>
        {isHomeOrProducts ? (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="overflow-hidden w-full h-full flex items-center justify-center rounded-lg">
              <img 
                src={imageSrc} 
                alt={displayTitle}
                className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-150" 
              />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <img 
              src={imageSrc} 
              alt={displayTitle}
              className="max-w-full max-h-full object-contain" 
            />
          </div>
        )}
        <div className={cn(
          "absolute inset-0 flex items-end",
          isHomeOrProducts ? "" : "bg-gradient-to-t from-black/70 to-transparent"
        )}>
          <h3 className={cn(
            "text-xl font-bold p-4",
            isHomeOrProducts ? "text-kumru-navy" : "text-white"
          )}>{displayTitle}</h3>
        </div>
      </div>
      {description && (
        <div className="p-4">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </a>
  );
};

export default ProductCard;
