
import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailsLayout from "@/components/product/ProductDetailsLayout";
import ProductNotFound from "@/components/product/ProductNotFound";
import productData from "@/components/product/ProductData";

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
  
  const product = productId && productData[productId as keyof typeof productData];

  if (!product) {
    return <ProductNotFound />;
  }

  // Render the appropriate gallery based on product ID
  const renderGallery = () => {
    switch(productId) {
      case 'cabin-lifting-hose':
        return <CabinLiftingHoseGallery images={product.images} productTitle={product.title} />;
      case 'hydraulic-hose':
        return <HydraulicHoseGallery images={product.images} productTitle={product.title} />;
      case 'hydraulic-system':
        return <HydraulicSystemGallery images={product.images} productTitle={product.title} />;
      case 'injection-lines':
        return <InjectionLinesGallery images={product.images} productTitle={product.title} />;
      case 'leak-of-fuel-pipe':
        return <LeakOfFuelPipeGallery images={product.images} productTitle={product.title} />;
      case 'ptfe-teflon-hose':
        return <PtfeTeflonHoseGallery images={product.images} productTitle={product.title} />;
      case 'steering-hose':
        return <SteeringHoseGallery images={product.images} productTitle={product.title} />;
      case 'transfer-pump':
        return <TransferPumpGallery images={product.images} productTitle={product.title} />;
      case 'turbo-pipe-hose':
        return <TurboPipeHoseGallery images={product.images} productTitle={product.title} />;
      case 'turbo-timing-pipes':
        return <TurboTimingPipesGallery images={product.images} productTitle={product.title} />;
      case 'valve-nozzle':
        return <ValveNozzleGallery images={product.images} productTitle={product.title} />;
      case 'valve-record':
        return <ValveRecordGallery images={product.images} productTitle={product.title} />;
      case 'valve-timing':
        return <ValveTimingGallery images={product.images} productTitle={product.title} />;
      case 'vessel-lines':
        return <VesselLinesGallery images={product.images} productTitle={product.title} />;
      case 'fittings':
        return <FittingsGallery images={product.images} productTitle={product.title} />;
      case 'connectors':
        return <ConnectorsGallery images={product.images} productTitle={product.title} />;
      default:
        return <DefaultGallery images={product.images} productTitle={product.title} />;
    }
  };

  return (
    <ProductDetailsLayout
      productId={productId}
      productTitle={product.title}
      productDescription={product.description}
    >
      {renderGallery()}
    </ProductDetailsLayout>
  );
};

export default ProductDetail;
