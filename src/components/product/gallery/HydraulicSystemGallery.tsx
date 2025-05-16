
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface HydraulicSystemGalleryProps {
  images: string[];
  productTitle: string;
}

const HydraulicSystemGallery: React.FC<HydraulicSystemGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={4/3}
      gridClassName="grid grid-cols-2 md:grid-cols-3 gap-4"
    />
  );
};

export default HydraulicSystemGallery;
