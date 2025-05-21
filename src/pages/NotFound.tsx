
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-kumru-navy mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Sayfa bulunamadı</p>
          <p className="text-gray-500 mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
          <Button asChild className="bg-kumru-navy hover:bg-blue-800">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Ana Sayfaya Dön
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
