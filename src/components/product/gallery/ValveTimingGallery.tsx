
import React, { useState, useEffect } from "react";
import { ProductImage } from "../ProductImageGallery";

interface ValveTimingGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveTimingGallery: React.FC<ValveTimingGalleryProps> = ({ images, productTitle }) => {
  // Check if we have exactly 14 images as expected
  const imagesToDisplay = images.slice(0, 14);
  
  return (
    <div className="mb-8">
      {/* Desktop Layout - 4+4+4+2 */}
      <div className="hidden md:block space-y-4">
        {/* First row - 4 images */}
        <div className="grid grid-cols-4 gap-4">
          {imagesToDisplay.slice(0, 4).map((image, index) => (
            <ProductImage
              key={index}
              src={image}
              alt={`${productTitle} - Image ${index + 1}`}
              index={index}
              ratio={4/3}
              className="h-full"
            />
          ))}
        </div>
        
        {/* Second row - 4 images */}
        <div className="grid grid-cols-4 gap-4">
          {imagesToDisplay.slice(4, 8).map((image, index) => (
            <ProductImage
              key={index + 4}
              src={image}
              alt={`${productTitle} - Image ${index + 5}`}
              index={index + 4}
              ratio={4/3}
              loading="lazy"
              className="h-full"
            />
          ))}
        </div>
        
        {/* Third row - 4 images */}
        <div className="grid grid-cols-4 gap-4">
          {imagesToDisplay.slice(8, 12).map((image, index) => (
            <ProductImage
              key={index + 8}
              src={image}
              alt={`${productTitle} - Image ${index + 9}`}
              index={index + 8}
              ratio={4/3}
              loading="lazy"
              className="h-full"
            />
          ))}
        </div>
        
        {/* Fourth row - 2 images centered */}
        <div className="flex justify-center gap-4">
          {imagesToDisplay.slice(12, 14).map((image, index) => (
            <div key={index + 12} className="w-1/4">
              <ProductImage
                src={image}
                alt={`${productTitle} - Image ${index + 13}`}
                index={index + 12}
                ratio={4/3}
                loading="lazy"
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile Layout - 2 column grid */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {imagesToDisplay.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={3/4}
            loading={index > 3 ? "lazy" : "eager"}
            className="h-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ValveTimingGallery;
