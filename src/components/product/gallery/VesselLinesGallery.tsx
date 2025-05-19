
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface VesselLinesGalleryProps {
  images: string[];
  productTitle: string;
}

const VesselLinesGallery: React.FC<VesselLinesGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={4/3}
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    />
  );
};

export default VesselLinesGallery;
