
import React from "react";
import DefaultGallery from "./DefaultGallery";

const SpecialItemsGallery: React.FC<{ images: string[], productTitle: string }> = ({ images, productTitle }) => {
  return (
    <DefaultGallery images={images} productTitle={productTitle} />
  );
};

export default SpecialItemsGallery;
