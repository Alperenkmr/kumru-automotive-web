
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface TurboTimingPipesGalleryProps {
  images: string[];
  productTitle: string;
}

const TurboTimingPipesGallery: React.FC<TurboTimingPipesGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={16/9}
      gridClassName="grid grid-cols-1 md:grid-cols-2 gap-6"
    />
  );
};

export default TurboTimingPipesGallery;
