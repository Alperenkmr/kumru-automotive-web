
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface HydraulicHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const HydraulicHoseGallery: React.FC<HydraulicHoseGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={4/3}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    />
  );
};

export default HydraulicHoseGallery;
