
import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/locales";

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
  const { t, language } = useLanguage();
  
  // If a translationKey is provided, use it to get the translated title
  const displayTitle = translationKey && translationKey in t ? 
    t(translationKey as TranslationKey) : 
    title;
  
  return (
    <a 
      href={href}
      className={cn(
        "block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="h-56 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src={imageSrc} 
            alt={displayTitle}
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-xl font-bold p-4 text-white">{displayTitle}</h3>
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
