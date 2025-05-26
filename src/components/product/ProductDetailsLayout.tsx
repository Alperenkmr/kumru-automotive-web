
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

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
  showBackButton = true
}) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link 
                  to="/" 
                  className="inline-flex items-center hover:text-kumru-blue transition-colors"
                  aria-label={t('navigation.home')}
                >
                  <Home className="mr-1 h-4 w-4" />
                  {t('navigation.home')}
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2" aria-hidden="true">
                <Link 
                  to="/products" 
                  className="hover:text-kumru-blue transition-colors"
                >
                  {t('navigation.products')}
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2 text-kumru-navy font-medium" aria-current="page">
                {productTitle}
              </li>
            </ol>
          </nav>

          {/* Geri Butonu */}
          {showBackButton && (
            <div className="mb-8">
              <Link 
                to="/products" 
                className="inline-flex items-center text-kumru-blue hover:text-kumru-navy transition-colors group"
                aria-label={language === 'tr' ? 'Ürünler sayfasına geri dön' : 'Back to products page'}
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {language === 'tr' ? 'Ürünlere Geri Dön' : 'Back to Products'}
              </Link>
            </div>
          )}
          
          {/* Product Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-kumru-navy mb-4 leading-tight">
              {productTitle}
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              <p>{productDescription}</p>
            </div>
          </header>
          
          {/* Product Gallery/Content */}
          <section aria-label={`${productTitle} ${language === 'tr' ? 'ürün galerisi ve detayları' : 'product gallery and details'}`}>
            {children}
          </section>

          {/* Call to Action */}
          <div className="mt-12 p-6 bg-gradient-to-r from-kumru-blue to-kumru-navy rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-3">
              {language === 'tr' ? 'Bu ürün hakkında daha fazla bilgi almak istiyor musunuz?' : 'Want to learn more about this product?'}
            </h2>
            <p className="mb-4 text-lg opacity-90">
              {language === 'tr' 
                ? 'Uzman ekibimiz size yardımcı olmaya hazır. Hemen iletişime geçin!'
                : 'Our expert team is ready to help you. Get in touch today!'
              }
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-[#FFCC00] text-kumru-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              {language === 'tr' ? 'İletişime Geç' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailsLayout;
