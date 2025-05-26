
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
  comingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageSrc,
  className,
  href = "#",
  translationKey,
  comingSoon = false,
}) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  
  // Check if we're on the home or products page
  const isHomeOrProducts = location.pathname === "/" || location.pathname === "/products";
  
  // If a translationKey is provided, use it to get the translated title
  const displayTitle = translationKey && t(translationKey) !== translationKey ? 
    t(translationKey) : 
    title;

  const comingSoonText = language === 'tr' ? 'YAKINDA' : 'COMING SOON';
  
  const CardWrapper = comingSoon ? 'div' : 'a';
  const cardProps = comingSoon 
    ? { className: cn(
        "block rounded-xl overflow-hidden shadow-md transition-shadow duration-300 relative group",
        isHomeOrProducts ? "bg-white" : "bg-white",
        comingSoon ? "cursor-default" : "hover:shadow-xl",
        className
      )}
    : { 
        href,
        className: cn(
          "block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
          isHomeOrProducts ? "bg-white" : "bg-white",
          className
        )
      };
  
  return (
    <CardWrapper {...cardProps}>
      <div className={cn(
        "h-56 relative rounded-lg",
        "border-8 border-kumru-navy",
        comingSoon && !imageSrc ? "bg-gray-100" : ""
      )}>
        {comingSoon && !imageSrc ? (
          // Empty state for coming soon without image
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-kumru-navy mb-2">{displayTitle}</h3>
              <span className="text-kumru-navy text-lg font-semibold">
                {comingSoonText}
              </span>
            </div>
          </div>
        ) : isHomeOrProducts ? (
          <>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="overflow-hidden w-full h-full flex items-center justify-center rounded-lg">
                <img 
                  src={imageSrc} 
                  alt={displayTitle}
                  className={cn(
                    "max-w-full max-h-full object-contain transition-all duration-300",
                    !comingSoon && "hover:scale-150"
                  )} 
                />
              </div>
            </div>
            <div className={cn(
              "absolute inset-0 flex items-end",
              isHomeOrProducts ? "" : "bg-gradient-to-t from-black/70 to-transparent"
            )}>
              <h3 className={cn(
                "text-xl font-bold p-4",
                isHomeOrProducts ? "text-kumru-navy" : "text-white"
              )}>{displayTitle}</h3>
            </div>
            
            {comingSoon && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-bold text-center px-4">
                  {comingSoonText}
                </span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img 
                src={imageSrc} 
                alt={displayTitle}
                className="max-w-full max-h-full object-contain" 
              />
            </div>
            <div className={cn(
              "absolute inset-0 flex items-end",
              isHomeOrProducts ? "" : "bg-gradient-to-t from-black/70 to-transparent"
            )}>
              <h3 className={cn(
                "text-xl font-bold p-4",
                isHomeOrProducts ? "text-kumru-navy" : "text-white"
              )}>{displayTitle}</h3>
            </div>
          </>
        )}
      </div>
      {description && !comingSoon && (
        <div className="p-4">
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </CardWrapper>
  );
};

export default ProductCard;
