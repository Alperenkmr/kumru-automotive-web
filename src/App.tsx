
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { checkMissingTranslations } from "./utils/translationChecker";
import { lazy, Suspense } from "react";
import "./index.css";

// Lazy load pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const MachinePark = lazy(() => import("./pages/MachinePark"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Check translations in development
if (process.env.NODE_ENV === 'development') {
  try {
    checkMissingTranslations();
  } catch (error) {
    console.warn('Error checking translations:', error);
  }
}

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kumru-navy"></div>
  </div>
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
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <link rel="apple-touch-icon" href="/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png" />
          </Helmet>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ErrorBoundary>
              <FloatingWhatsApp phoneNumber="+905494262949" />
              <Suspense fallback={<PageLoader />}>
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
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
