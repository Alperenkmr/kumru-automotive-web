
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package, Search, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductNotFound: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === 'tr' ? 'Ürün Bulunamadı - RSS Kumru Automotive' : 'Product Not Found - RSS Kumru Automotive'}</title>
        <meta name="description" content={language === 'tr' ? 'Aradığınız ürün bulunamadı. Diğer ürünlerimizi inceleyebilirsiniz.' : 'The product you are looking for could not be found. You can browse our other products.'} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Package className="mx-auto h-24 w-24 text-gray-400 mb-6" />
              <h1 className="text-3xl font-bold text-kumru-navy mb-4">
                {language === 'tr' ? 'Ürün Bulunamadı' : 'Product Not Found'}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {language === 'tr' 
                  ? 'Aradığınız ürün mevcut değil veya katalogdan kaldırılmış olabilir. Diğer ürünlerimizi inceleyebilirsiniz.'
                  : 'The product you are looking for does not exist or may have been removed from our catalog. You can browse our other products.'
                }
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Link to="/products">
                <Button variant="outline" className="w-full h-16 flex items-center justify-center gap-3 border-kumru-navy text-kumru-navy hover:bg-kumru-navy hover:text-white">
                  <Search className="h-5 w-5" />
                  <span>{language === 'tr' ? 'Tüm Ürünler' : 'All Products'}</span>
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" className="w-full h-16 flex items-center justify-center gap-3 border-kumru-blue text-kumru-blue hover:bg-kumru-blue hover:text-white">
                  <Package className="h-5 w-5" />
                  <span>{language === 'tr' ? 'Özel Ürün' : 'Custom Product'}</span>
                </Button>
              </Link>
              
              <Link to="/">
                <Button variant="outline" className="w-full h-16 flex items-center justify-center gap-3 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white">
                  <Home className="h-5 w-5" />
                  <span>{language === 'tr' ? 'Ana Sayfa' : 'Home'}</span>
                </Button>
              </Link>
            </div>

            <Link to="/products" className="inline-flex items-center text-kumru-blue hover:text-kumru-navy transition-colors group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              {language === 'tr' ? 'Ürünlere Geri Dön' : 'Back to Products'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductNotFound;
