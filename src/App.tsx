
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import { checkMissingTranslations } from "./utils/translationChecker";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MachinePark from "./pages/MachinePark";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./index.css";

const queryClient = new QueryClient();

// Check translations in development
if (process.env.NODE_ENV === 'development') {
  checkMissingTranslations();
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Helmet>
          <html lang="tr" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#0A1F44" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png" />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingWhatsApp phoneNumber="+905494262949" />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/machine-park" element={<MachinePark />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/* For better handling of robots.txt and sitemap.xml */}
            <Route path="/robots.txt" 
              element={
                <iframe
                  title="Robots.txt"
                  src="/robots.txt"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              } 
            />
            <Route path="/sitemap.xml" 
              element={
                <iframe
                  title="Sitemap"
                  src="/sitemap.xml"
                  style={{ width: '100%', height: '100vh', border: 'none' }}
                />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
