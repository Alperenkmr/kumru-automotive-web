
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";

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
      className={`overflow-hidden rounded-lg shadow-md ${className} cursor-pointer bg-gray-100`}
      onClick={() => onImageClick && onImageClick(index)}
    >
      <AspectRatio ratio={ratio}>
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={src} 
            alt={alt} 
            className="max-h-full max-w-full object-contain" 
            loading={index > 3 ? "lazy" : loading}
          />
        </div>
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
  productId?: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  images,
  productTitle,
  aspectRatio = 1,
  gridClassName = "grid grid-cols-1 md:grid-cols-3 gap-4",
  imageClassName = "",
  productId = ""
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t, language } = useLanguage();

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

  // Use translated product title if available
  const translatedTitle = productId ? 
    t(`products.${productId.replace(/-/g, '')}`) :
    productTitle;
  
  const imageAlts = images.map((_, index) => `${translatedTitle} - ${t('products.gallery.title')} ${index + 1}`);

  return (
    <div className="mb-8">
      <div className={gridClassName}>
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${translatedTitle} - ${t('products.gallery.title')} ${index + 1}`}
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
