
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductDetailsLayout from "@/components/product/ProductDetailsLayout";
import ProductNotFound from "@/components/product/ProductNotFound";
import productData from "@/components/product/ProductData";
import { useLanguage } from "@/contexts/LanguageContext";

// Import all gallery components
import CabinLiftingHoseGallery from "@/components/product/gallery/CabinLiftingHoseGallery";
import HydraulicHoseGallery from "@/components/product/gallery/HydraulicHoseGallery";
import HydraulicSystemGallery from "@/components/product/gallery/HydraulicSystemGallery";
import InjectionLinesGallery from "@/components/product/gallery/InjectionLinesGallery";
import LeakOfFuelPipeGallery from "@/components/product/gallery/LeakOfFuelPipeGallery";
import PtfeTeflonHoseGallery from "@/components/product/gallery/PtfeTeflonHoseGallery";
import SteeringHoseGallery from "@/components/product/gallery/SteeringHoseGallery";
import TransferPumpGallery from "@/components/product/gallery/TransferPumpGallery";
import TurboPipeHoseGallery from "@/components/product/gallery/TurboPipeHoseGallery";
import TurboTimingPipesGallery from "@/components/product/gallery/TurboTimingPipesGallery";
import ValveNozzleGallery from "@/components/product/gallery/ValveNozzleGallery";
import ValveTimingGallery from "@/components/product/gallery/ValveTimingGallery";
import VesselLinesGallery from "@/components/product/gallery/VesselLinesGallery";
import PrimingPumpGallery from "@/components/product/gallery/PrimingPumpGallery";
import ConnectorsGallery from "@/components/product/gallery/ConnectorsGallery";
import DefaultGallery from "@/components/product/gallery/DefaultGallery";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [productExists, setProductExists] = useState(false);
  
  // Enhanced validation with loading state management
  useEffect(() => {
    console.log('ProductDetail: Rendering with productId:', productId);
    console.log('ProductDetail: Available products:', Object.keys(productData));
    
    if (!productId) {
      console.error('ProductDetail: No productId provided in URL params');
      setIsLoading(false);
      setProductExists(false);
      return;
    }
    
    const product = productData[productId as keyof typeof productData];
    
    if (!product) {
      console.error(`ProductDetail: Product not found for ID: ${productId}`);
      console.log('ProductDetail: Available product IDs:', Object.keys(productData));
      setIsLoading(false);
      setProductExists(false);
      return;
    }
    
    console.log('ProductDetail: Product found:', product);
    
    // Check if product is coming soon
    if ('comingSoon' in product && product.comingSoon) {
      console.log(`ProductDetail: Product ${productId} is coming soon, redirecting to products`);
      setIsLoading(false);
      setProductExists(false);
      return;
    }
    
    setProductExists(true);
    setIsLoading(false);
  }, [productId]);
  
  // Show loading state to prevent 404 flash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kumru-navy mx-auto mb-4"></div>
          <p className="text-gray-600">{language === 'tr' ? 'Yükleniyor...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }
  
  if (!productId || !productExists) {
    return <ProductNotFound />;
  }
  
  const product = productData[productId as keyof typeof productData];
  
  // Check if product is coming soon and redirect to products page
  if ('comingSoon' in product && product.comingSoon) {
    return <Navigate to="/products" replace />;
  }
  
  // Convert product ID to camelCase for translation keys
  const productIdForKey = productId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  // Get translated title and description
  const translationKey = `products.${productIdForKey}`;
  const descriptionKey = `products.${productIdForKey}.desc`;
  
  const translatedTitle = t(translationKey);
  const translatedDescription = t(descriptionKey);

  console.log('ProductDetail: Translation key:', translationKey);
  console.log('ProductDetail: Translated title:', translatedTitle);

  // Canonical URL
  const canonicalUrl = `https://rsskumru.com/products/${productId}`;

  // Render the appropriate gallery based on product ID
  const renderGallery = () => {
    try {
      console.log('ProductDetail: Rendering gallery for product:', productId);
      
      switch(productId) {
        case 'cabin-lifting-hose':
          return <CabinLiftingHoseGallery images={product.images} productTitle={translatedTitle} />;
        case 'hydraulic-hose':
          return <HydraulicHoseGallery images={product.images} productTitle={translatedTitle} />;
        case 'hydraulic-system':
          return <HydraulicSystemGallery images={product.images} productTitle={translatedTitle} />;
        case 'injection-lines':
          return <InjectionLinesGallery images={product.images} productTitle={translatedTitle} />;
        case 'leak-of-fuel-pipe':
          return <LeakOfFuelPipeGallery images={product.images} productTitle={translatedTitle} />;
        case 'ptfe-teflon-hose':
          return <PtfeTeflonHoseGallery images={product.images} productTitle={translatedTitle} />;
        case 'steering-hose':
          return <SteeringHoseGallery images={product.images} productTitle={translatedTitle} />;
        case 'transfer-pump':
          return <TransferPumpGallery images={product.images} productTitle={translatedTitle} />;
        case 'turbo-pipe-hose':
          return <TurboPipeHoseGallery images={product.images} productTitle={translatedTitle} />;
        case 'turbo-timing-pipes':
          return <TurboTimingPipesGallery images={product.images} productTitle={translatedTitle} />;
        case 'valve-nozzle':
          return <ValveNozzleGallery images={product.images} productTitle={translatedTitle} />;
        case 'valve-timing':
          return <ValveTimingGallery images={product.images} productTitle={translatedTitle} />;
        case 'vessel-lines':
          return <VesselLinesGallery images={product.images} productTitle={translatedTitle} />;
        case 'priming-pump':
          return <PrimingPumpGallery images={product.images} productTitle={translatedTitle} />;
        case 'connectors':
          return <ConnectorsGallery images={product.images} productTitle={translatedTitle} />;
        case 'special-items':
          return <DefaultGallery images={product.images} productTitle={translatedTitle} />;
        default:
          console.log('ProductDetail: Using default gallery for unknown product ID');
          return <DefaultGallery images={product.images} productTitle={translatedTitle} />;
      }
    } catch (error) {
      console.error(`Error rendering gallery for product ${productId}:`, error);
      return <DefaultGallery images={product.images} productTitle={translatedTitle} />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{translatedTitle} | RSS Kumru Automotive</title>
        <meta name="description" content={translatedDescription} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${translatedTitle} | RSS Kumru Automotive`} />
        <meta property="og:description" content={translatedDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="product" />
        {product.images && product.images.length > 0 && (
          <meta property="og:image" content={`https://rsskumru.com${product.images[0]}`} />
        )}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${translatedTitle} | RSS Kumru Automotive`} />
        <meta name="twitter:description" content={translatedDescription} />
        {product.images && product.images.length > 0 && (
          <meta name="twitter:image" content={`https://rsskumru.com${product.images[0]}`} />
        )}
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": translatedTitle,
            "description": translatedDescription,
            "url": canonicalUrl,
            "manufacturer": {
              "@type": "Organization",
              "name": "RSS Kumru Automotive",
              "url": "https://rsskumru.com"
            },
            "brand": {
              "@type": "Brand",
              "name": "RSS Kumru"
            },
            ...(product.images && product.images.length > 0 && {
              "image": product.images.map(img => `https://rsskumru.com${img}`)
            })
          })}
        </script>
      </Helmet>
      
      <ProductDetailsLayout
        productId={productId}
        productTitle={translatedTitle}
        productDescription={translatedDescription}
        showBackButton={true}
      >
        {renderGallery()}
      </ProductDetailsLayout>
    </>
  );
};

export default ProductDetail;
