
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ValveRecordGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveRecordGallery: React.FC<ValveRecordGalleryProps> = ({ images, productTitle }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  
  const imageAlts = images.map((_, index) => `${productTitle} - Image ${index + 1}`);

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
            onImageClick={handleImageClick}
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
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Lightbox Component */}
      <ImageLightbox 
        images={images}
        alt={imageAlts}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={handleLightboxClose}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default ValveRecordGallery;
