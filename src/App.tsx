
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import ErrorBoundary from "./components/ui/ErrorBoundary";
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

// Component to handle redirects from 404 page
const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check for redirect parameter from 404 page
    const urlParams = new URLSearchParams(location.search);
    const redirectPath = urlParams.get('redirect');
    
    if (redirectPath && location.pathname === '/') {
      console.log('Handling redirect to:', redirectPath);
      navigate(redirectPath, { replace: true });
      return;
    }

    // Check sessionStorage for redirect path
    const storedRedirectPath = sessionStorage.getItem('redirectPath');
    if (storedRedirectPath && location.pathname === '/') {
      console.log('Handling stored redirect to:', storedRedirectPath);
      sessionStorage.removeItem('redirectPath');
      navigate(storedRedirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

const AppContent = () => (
  <>
    <RedirectHandler />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Helmet>
            <html lang="tr" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#0A1F44" />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ErrorBoundary>
              <AppContent />
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
