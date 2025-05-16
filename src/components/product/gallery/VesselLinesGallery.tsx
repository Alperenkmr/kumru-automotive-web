
import React from "react";
import { ProductImage } from "../ProductImageGallery";

interface VesselLinesGalleryProps {
  images: string[];
  productTitle: string;
}

const VesselLinesGallery: React.FC<VesselLinesGalleryProps> = ({ images, productTitle }) => {
  return (
    <div className="mb-8">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        {/* First row - 3 images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.slice(0, 3).map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt={`${productTitle} - Image ${index + 1}`}
              index={index}
              ratio={16/9}
            />
          ))}
        </div>
        
        {/* Second row - 3 images */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.slice(3, 6).map((image, index) => (
            <ProductImage
              key={index + 3}
              src={image}
              alt={`${productTitle} - Image ${index + 4}`}
              index={index + 3}
              ratio={16/9}
              loading="lazy"
            />
          ))}
        </div>
        
        {/* Third row - 1 image centered */}
        {images.length > 6 && (
          <div className="flex justify-center">
            <div className="w-1/3">
              <ProductImage
                src={images[6]}
                alt={`${productTitle} - Image 7`}
                index={6}
                ratio={16/9}
                loading="lazy"
              />
            </div>
          </div>
        )}
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

export default VesselLinesGallery;
