
import React from "react";
import { ProductImage } from "../ProductImageGallery";

interface ValveRecordGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveRecordGallery: React.FC<ValveRecordGalleryProps> = ({ images, productTitle }) => {
  return (
    <div className="mb-8">
      {/* Desktop Layout - 3x2 Grid */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={1}
          />
        ))}
      </div>
      
      {/* Mobile Layout - 2x3 Grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={1}
          />
        ))}
      </div>
    </div>
  );
};

export default ValveRecordGallery;
