
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface FittingsGalleryProps {
  images: string[];
  productTitle: string;
}

const FittingsGallery: React.FC<FittingsGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-2 md:grid-cols-3 gap-4"
    />
  );
};

export default FittingsGallery;
