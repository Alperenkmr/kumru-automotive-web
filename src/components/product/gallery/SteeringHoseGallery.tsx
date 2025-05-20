
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface SteeringHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const SteeringHoseGallery: React.FC<SteeringHoseGalleryProps> = ({ images, productTitle }) => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {images.slice(0, 2).map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={16/9}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.slice(2).map((image, index) => (
          <ProductImage
            key={index + 2}
            src={image}
            alt={`${productTitle} - Image ${index + 3}`}
            index={index + 2}
            ratio={16/9}
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

export default SteeringHoseGallery;
