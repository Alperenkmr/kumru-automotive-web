
import React from "react";
import { ProductImage } from "../ProductImageGallery";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ValveNozzleGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveNozzleGallery: React.FC<ValveNozzleGalleryProps> = ({ images, productTitle }) => {
  return (
    <div className="mb-8">
      {/* Desktop Layout - 5x4 Grid */}
      <div className="hidden md:grid md:grid-cols-5 gap-3">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={1}
            loading={index > 9 ? "lazy" : "eager"}
          />
        ))}
      </div>
      
      {/* Mobile Layout - 2-col Grid */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={1}
            loading={index > 4 ? "lazy" : "eager"}
          />
        ))}
      </div>
    </div>
  );
};

export default ValveNozzleGallery;
