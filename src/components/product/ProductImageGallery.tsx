
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface ProductImageProps {
  src: string;
  alt: string;
  index: number;
  ratio?: number;
  loading?: "lazy" | "eager";
  className?: string;
  onImageClick?: (index: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ 
  src, 
  alt, 
  index, 
  ratio = 1, 
  loading = "eager",
  className = "",
  onImageClick
}) => {
  return (
    <div 
      className={`overflow-hidden rounded-lg shadow-md ${className} cursor-pointer`}
      onClick={() => onImageClick && onImageClick(index)}
    >
      <AspectRatio ratio={ratio}>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          loading={index > 3 ? "lazy" : loading}
        />
      </AspectRatio>
    </div>
  );
};

interface ProductImageGalleryProps {
  images: string[];
  productTitle: string;
  aspectRatio?: number;
  gridClassName?: string;
  imageClassName?: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productTitle,
  aspectRatio = 1,
  gridClassName = "grid grid-cols-1 md:grid-cols-3 gap-4",
  imageClassName = ""
}) => {
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
      <div className={gridClassName}>
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={aspectRatio}
            className={imageClassName}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

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

export { ProductImage, ProductImageGallery };
