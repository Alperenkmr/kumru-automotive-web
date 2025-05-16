
import React from "react";
import { ProductImage } from "../ProductImageGallery";

interface ValveTimingGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveTimingGallery: React.FC<ValveTimingGalleryProps> = ({ images, productTitle }) => {
  return (
    <div className="mb-8">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* First row - 4 images */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {images.slice(0, 4).map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt={`${productTitle} - Image ${index + 1}`}
              index={index}
              ratio={3/4}
            />
          ))}
        </div>
        
        {/* Second row - 4 images */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {images.slice(4, 8).map((image, index) => (
            <ProductImage
              key={index + 4}
              src={image}
              alt={`${productTitle} - Image ${index + 5}`}
              index={index + 4}
              ratio={3/4}
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Third row - 4 images */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {images.slice(8, 12).map((image, index) => (
            <ProductImage
              key={index + 8}
              src={image}
              alt={`${productTitle} - Image ${index + 9}`}
              index={index + 8}
              ratio={3/4}
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Fourth row - 2 images centered */}
        <div className="flex justify-center gap-4">
          {images.slice(12, 14).map((image, index) => (
            <div key={index + 12} className="w-1/4">
              <ProductImage
                src={image}
                alt={`${productTitle} - Image ${index + 13}`}
                index={index + 12}
                ratio={3/4}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Layout - 2-column grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={3/4}
            loading={index > 3 ? "lazy" : "eager"}
          />
        ))}
      </div>
    </div>
  );
};

export default ValveTimingGallery;
