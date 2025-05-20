
import React from "react";
import { useParams } from "react-router-dom";
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
  
  const product = productId && productData[productId as keyof typeof productData];

  if (!product) {
    return <ProductNotFound />;
  }

  // Get translated title and description
  const translatedTitle = t(`products.${productId!.replace(/-/g, '')}`);
  const translatedDescription = t(`products.${productId!.replace(/-/g, '')}.desc`);

  // Render the appropriate gallery based on product ID
  const renderGallery = () => {
    switch(productId) {
      case 'cabin-lifting-hose':
        return <CabinLiftingHoseGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'hydraulic-hose':
        return <HydraulicHoseGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'hydraulic-system':
        return <HydraulicSystemGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'injection-lines':
        return <InjectionLinesGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'leak-of-fuel-pipe':
        return <LeakOfFuelPipeGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'ptfe-teflon-hose':
        return <PtfeTeflonHoseGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'steering-hose':
        return <SteeringHoseGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'transfer-pump':
        return <TransferPumpGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'turbo-pipe-hose':
        return <TurboPipeHoseGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'turbo-timing-pipes':
        return <TurboTimingPipesGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'valve-nozzle':
        return <ValveNozzleGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'valve-record':
        return <ValveRecordGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'valve-timing':
        return <ValveTimingGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'vessel-lines':
        return <VesselLinesGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'fittings':
        return <FittingsGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      case 'connectors':
        return <ConnectorsGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
      default:
        return <DefaultGallery images={product.images} productTitle={translatedTitle} productId={productId} />;
    }
  };

  return (
    <ProductDetailsLayout
      productId={productId}
      productTitle={language === 'tr' ? translatedTitle : product.title}
      productDescription={language === 'tr' ? translatedDescription : product.description}
    >
      {renderGallery()}
    </ProductDetailsLayout>
  );
};

export default ProductDetail;
