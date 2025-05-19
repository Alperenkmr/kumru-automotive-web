
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface PtfeTeflonHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const PtfeTeflonHoseGallery: React.FC<PtfeTeflonHoseGalleryProps> = ({ images, productTitle }) => {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {images.slice(0, 4).map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={3/4}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {images.slice(4, 8).map((image, index) => (
          <ProductImage
            key={index + 4}
            src={image}
            alt={`${productTitle} - Image ${index + 5}`}
            index={index + 4}
            ratio={3/4}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.slice(8).map((image, index) => (
          <ProductImage
            key={index + 8}
            src={image}
            alt={`${productTitle} - Image ${index + 9}`}
            index={index + 8}
            ratio={3/4}
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

export default PtfeTeflonHoseGallery;
