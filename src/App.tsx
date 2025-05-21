
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useEffect } from "react";
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

// Helper function to handle redirects from GitHub Pages 404.html
const useHandleGitHubPagesRedirect = () => {
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const redirectPath = query.get('redirect');
    
    if (redirectPath) {
      // Remove the query parameter and navigate to the intended path
      window.history.replaceState(null, '', redirectPath);
    }
  }, []);
};

const App = () => {
  // Handle GitHub Pages SPA routing
  useHandleGitHubPagesRedirect();
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/kumru-automotive-web' : '/'}>
            <FloatingWhatsApp phoneNumber="+905494262949" />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
