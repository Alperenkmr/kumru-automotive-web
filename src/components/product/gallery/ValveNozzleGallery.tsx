
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ValveNozzleGalleryProps {
  images: string[];
  productTitle: string;
}

const ValveNozzleGallery: React.FC<ValveNozzleGalleryProps> = ({ images, productTitle }) => {
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
            onImageClick={handleImageClick}
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

export default ValveNozzleGallery;
