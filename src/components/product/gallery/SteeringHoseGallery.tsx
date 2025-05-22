
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface SteeringHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const SteeringHoseGallery: React.FC<SteeringHoseGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={16/9}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    />
  );
};

export default SteeringHoseGallery;
