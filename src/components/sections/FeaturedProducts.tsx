
import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturedProductsProps {
  className?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ className }) => {
  const { t } = useLanguage();
  
  // Featured products - limiting to 6 for the homepage
  const products = [
    {
      id: 1,
      title: "CABIN LIFTING HOSE",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      href: "/products/cabin-lifting-hose",
      translationKey: "products.cabinLiftingHose"
    },
    {
      id: 2,
      title: "HYDRAULIC HOSE",
      imageSrc: "/lovable-uploads/ab213c6a-f04b-4b0e-b847-f3bedda77422.png",
      href: "/products/hydraulic-hose",
      translationKey: "products.hydraulicHose"
    },
    {
      id: 3,
      title: "PTFE LINED HOSE ASSEMBLY",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      href: "/products/ptfe-teflon-hose",
      translationKey: "products.ptfeTeflonHose"
    },
    {
      id: 4,
      title: "STEERING HOSE",
      imageSrc: "/lovable-uploads/bb54b55e-7381-484a-abc8-e47684f61b1f.png",
      href: "/products/steering-hose",
      translationKey: "products.steeringHose"
    },
    {
      id: 5,
      title: "SPECIAL ITEMS",
      imageSrc: "/lovable-uploads/704024bb-d372-468e-b79f-31f8c4620a59.png",
      href: "/products/special-items",
      translationKey: "products.specialItems"
    },
    {
      id: 6,
      title: "VESSEL LINES",
      imageSrc: "/lovable-uploads/e935a121-8959-42f0-843a-27e1e0d545fe.png",
      href: "/products/vessel-lines",
      translationKey: "products.vesselLines"
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
        <h2 className="section-title text-kumru-black">{t('nav.products')}</h2>

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
                  translationKey={product.translationKey}
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
