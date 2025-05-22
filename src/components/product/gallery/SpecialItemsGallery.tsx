
import React from "react";
import DefaultGallery from "./DefaultGallery";

const SpecialItemsGallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <DefaultGallery images={images} />
  );
};

export default SpecialItemsGallery;
