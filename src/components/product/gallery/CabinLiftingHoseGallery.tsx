
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface CabinLiftingHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const CabinLiftingHoseGallery: React.FC<CabinLiftingHoseGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={16/9}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 gap-4"
    />
  );
};

export default CabinLiftingHoseGallery;
