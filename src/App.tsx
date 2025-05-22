
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Helmet>
          <html lang="tr" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
