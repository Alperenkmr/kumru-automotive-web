
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface DefaultGalleryProps {
  images: string[];
  productTitle: string;
}

const DefaultGallery: React.FC<DefaultGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    />
  );
};

export default DefaultGallery;
