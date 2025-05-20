
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/locales/types";

interface ProductDetailsLayoutProps {
  children: React.ReactNode;
  productTitle: string;
  productDescription: string;
  productId?: string;
}

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({
  children,
  productTitle,
  productDescription,
  productId
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Link to="/products" className="text-kumru-blue hover:text-kumru-navy transition-colors">
              {t('products.backToProducts')}
            </Link>
          </div>
          
          {/* Product Title and Description */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-kumru-navy mb-4">{productTitle}</h1>
            <div className="text-lg max-w-3xl">
              <p>{productDescription}</p>
            </div>
          </div>
          
          {/* Product Gallery/Content */}
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailsLayout;
