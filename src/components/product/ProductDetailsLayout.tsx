
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/locales/types";

interface ProductDetailsLayoutProps {
  children: React.ReactNode;
  productTitle: string;
  productDescription: string;
  productId?: string;
  showBackButton?: boolean;
}

const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({
  children,
  productTitle,
  productDescription,
  productId,
  showBackButton = false
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs ve Geri Butonu */}
          {showBackButton && (
            <div className="mb-8">
              <Link 
                to="/products" 
                className="inline-flex items-center text-kumru-blue hover:text-kumru-navy transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('products.backToProducts')}
              </Link>
            </div>
          )}
          
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
