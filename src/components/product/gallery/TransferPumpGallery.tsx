
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface TransferPumpGalleryProps {
  images: string[];
  productTitle: string;
}

const TransferPumpGallery: React.FC<TransferPumpGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
    />
  );
};

export default TransferPumpGallery;
