
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ValveTimingGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveTimingGallery: React.FC<ValveTimingGalleryProps> = ({ images, productTitle }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Check if we have exactly 14 images as expected
  const imagesToDisplay = images.slice(0, 14);
  
  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
  };

  const handleNavigate = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  const imageAlts = imagesToDisplay.map((_, index) => `${productTitle} - Image ${index + 1}`);

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
              onImageClick={handleImageClick}
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
              onImageClick={handleImageClick}
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
              onImageClick={handleImageClick}
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
                onImageClick={handleImageClick}
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
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Lightbox Component */}
      <ImageLightbox 
        images={imagesToDisplay}
        alt={imageAlts}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default ValveTimingGallery;
