
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-bold mb-4 text-kumru-navy">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Üzgünüz, aradığınız sayfa bulunamadı.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-kumru-blue hover:bg-kumru-navy text-white px-6 py-3 rounded-md transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
