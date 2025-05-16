
import React from "react";
import { ProductImageGallery } from "../ProductImageGallery";

interface InjectionLinesGalleryProps {
  images: string[];
  productTitle: string;
}

const InjectionLinesGallery: React.FC<InjectionLinesGalleryProps> = ({ images, productTitle }) => {
  return (
    <ProductImageGallery
      images={images}
      productTitle={productTitle}
      aspectRatio={1}
      gridClassName="grid grid-cols-2 md:grid-cols-4 gap-4"
    />
  );
};

export default InjectionLinesGallery;
