
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface ConnectorsGalleryProps {
  images: string[];
  productTitle: string;
}

const ConnectorsGallery: React.FC<ConnectorsGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
    />
  );
};

export default ConnectorsGallery;
