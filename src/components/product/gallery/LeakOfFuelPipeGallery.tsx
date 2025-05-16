
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface LeakOfFuelPipeGalleryProps {
  images: string[];
  productTitle: string;
}

const LeakOfFuelPipeGallery: React.FC<LeakOfFuelPipeGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-2 md:grid-cols-3 gap-4"
    />
  );
};

export default LeakOfFuelPipeGallery;
