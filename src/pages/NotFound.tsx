
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const isProductRoute = location.pathname.startsWith('/products/');
  
  const suggestedLinks = [
    { path: "/", label: language === 'tr' ? 'Ana Sayfa' : 'Home', icon: Home },
    { path: "/products", label: language === 'tr' ? 'Ürünler' : 'Products', icon: Search },
    { path: "/about", label: language === 'tr' ? 'Hakkımızda' : 'About Us', icon: ArrowLeft },
    { path: "/contact", label: language === 'tr' ? 'İletişim' : 'Contact', icon: ArrowLeft }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === 'tr' ? 'Sayfa Bulunamadı - RSS Kumru Automotive' : 'Page Not Found - RSS Kumru Automotive'}</title>
        <meta name="description" content={language === 'tr' ? 'Aradığınız sayfa bulunamadı. Ana sayfaya dönebilir veya ürünlerimizi inceleyebilirsiniz.' : 'The page you are looking for could not be found. You can return to the homepage or browse our products.'} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-12 text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-kumru-navy mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {language === 'tr' ? 'Sayfa Bulunamadı' : 'Page Not Found'}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isProductRoute 
                ? (language === 'tr' 
                    ? 'Aradığınız ürün bulunamadı. Ürün katalogumuzdan diğer ürünlerimizi inceleyebilirsiniz.'
                    : 'The product you are looking for could not be found. You can browse our other products from our catalog.')
                : (language === 'tr'
                    ? 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'
                    : 'The page you are looking for does not exist or may have been moved.')
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {suggestedLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className="group"
              >
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center gap-2 border-kumru-navy text-kumru-navy hover:bg-kumru-navy hover:text-white transition-all duration-300"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm">{link.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">
              {language === 'tr' ? 'Yardıma mı ihtiyacınız var?' : 'Need help?'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'tr' 
                ? 'Aradığınızı bulamadıysanız, bizimle iletişime geçin. Size yardımcı olmaktan memnuniyet duyarız.'
                : "If you can't find what you're looking for, please contact us. We'd be happy to help you."
              }
            </p>
            <Link to="/contact">
              <Button className="bg-kumru-blue hover:bg-kumru-navy text-white">
                {language === 'tr' ? 'İletişime Geç' : 'Contact Us'}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
