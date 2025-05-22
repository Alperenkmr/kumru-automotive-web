
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";
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
import ValveRecordGallery from "@/components/product/gallery/ValveRecordGallery";
import ValveTimingGallery from "@/components/product/gallery/ValveTimingGallery";
import VesselLinesGallery from "@/components/product/gallery/VesselLinesGallery";
import FittingsGallery from "@/components/product/gallery/FittingsGallery";
import ConnectorsGallery from "@/components/product/gallery/ConnectorsGallery";
import DefaultGallery from "@/components/product/gallery/DefaultGallery";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, language } = useLanguage();
  
  if (!productId || !productData[productId as keyof typeof productData]) {
    return <ProductNotFound />;
  }
  
  const product = productData[productId as keyof typeof productData];
  
  // Convert product ID to camelCase for translation keys
  const productIdForKey = productId.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  // Get translated title and description
  const translationKey = `products.${productIdForKey}`;
  const descriptionKey = `products.${productIdForKey}.desc`;
  
  const translatedTitle = t(translationKey);
  const translatedDescription = t(descriptionKey);

  // Ürün detay sayfası için schema.org yapılandırılmış veri
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": translatedTitle,
    "description": translatedDescription,
    "image": product.images.map(img => img.startsWith('/') 
      ? `https://rsskumru.com${img}` 
      : `https://rsskumru.com${img.startsWith('/') ? '' : '/'}${img}`),
    "brand": {
      "@type": "Brand",
      "name": "RSS Kumru"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "RSS Kumru Automotive",
      "logo": "https://rsskumru.com/lovable-uploads/645487c1-55b4-4e5a-8c11-6bdf630999a5.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tavşanlı Mah. Kömürcüoğlu Cad. 4509 Sk. No: 3",
        "addressLocality": "Gebze",
        "addressRegion": "Kocaeli",
        "postalCode": "41400",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+902627248824",
        "contactType": "customer service",
        "availableLanguage": ["Turkish", "English"]
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "TRY",
      "url": `https://rsskumru.com/products/${productId}`,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    }
  };

  // Ekmek kırıntısı yapısı oluştur
  const breadcrumbs = [
    { name: language === 'tr' ? 'Ana Sayfa' : 'Home', url: '/' },
    { name: language === 'tr' ? 'Ürünler' : 'Products', url: '/products' },
    { name: translatedTitle, url: `/products/${productId}` }
  ];

  // Alternatif dil URL'leri
  const alternateLanguages = [
    { locale: 'tr-TR', url: `/products/${productId}` },
    { locale: 'en-US', url: `/en/products/${productId}` }
  ];

  // Coğrafi konum bilgisi - RSS Kumru merkez ofis
  const geolocation = {
    latitude: "40.8156",
    longitude: "29.4398",
    placeName: "Gebze, Kocaeli, Turkey"
  };

  // Render the appropriate gallery based on product ID
  const renderGallery = () => {
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
      case 'valve-record':
        return <ValveRecordGallery images={product.images} productTitle={translatedTitle} />;
      case 'valve-timing':
        return <ValveTimingGallery images={product.images} productTitle={translatedTitle} />;
      case 'vessel-lines':
        return <VesselLinesGallery images={product.images} productTitle={translatedTitle} />;
      case 'fittings':
        return <FittingsGallery images={product.images} productTitle={translatedTitle} />;
      case 'connectors':
        return <ConnectorsGallery images={product.images} productTitle={translatedTitle} />;
      default:
        return <DefaultGallery images={product.images} productTitle={translatedTitle} />;
    }
  };

  // Sosyal medya meta etiketleri için yapılandırma
  const socialMedia = {
    twitter: {
      cardType: "summary_large_image" as const,
      site: "@RSSKumru",
      creator: "@RSSKumru"
    },
    facebook: {
      appId: "123456789012345"  // Varsayılan FB App ID
    }
  };

  // Ana görseli ve ek görselleri belirle
  const mainImage = product.images[0].startsWith('/') ? product.images[0] : `/lovable-uploads/${product.images[0]}`;
  const additionalImages = product.images.slice(1).map(img => img.startsWith('/') ? img : `/lovable-uploads/${img}`);

  return (
    <>
      <SEO 
        title={translatedTitle}
        description={translatedDescription}
        canonicalUrl={`/products/${productId}`}
        ogType="product"
        ogImage={mainImage}
        additionalImages={additionalImages}
        keywords={[translatedTitle, "otomotiv", "hidrolik", "RSS Kumru", productId.replace(/-/g, ' ')]}
        language={language === 'tr' ? 'tr-TR' : 'en-US'}
        structuredData={productSchema}
        breadcrumbs={breadcrumbs}
        alternateLanguages={alternateLanguages}
        socialMedia={socialMedia}
        geolocation={geolocation}
      />
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
