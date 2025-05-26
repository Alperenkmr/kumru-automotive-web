
import React, { useState, useCallback, memo } from "react";
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

const ProductImage = memo<ProductImageProps>(({ 
  src, 
  alt, 
  index, 
  ratio = 1, 
  loading = "lazy",
  className = "",
  onImageClick
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // WebP format desteği için image src optimizasyonu
  const getOptimizedImageSrc = useCallback((originalSrc: string) => {
    // Eğer resim .png ile bitiyorsa .webp versiyonunu dene
    if (originalSrc.endsWith('.png')) {
      return originalSrc.replace('.png', '.webp');
    }
    return originalSrc;
  }, []);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  const handleClick = useCallback(() => {
    onImageClick?.(index);
  }, [onImageClick, index]);

  return (
    <div 
      className={`overflow-hidden rounded-lg shadow-md ${className} cursor-pointer bg-[#001F3F] border-2 border-[#FFCC00] transition-transform hover:scale-105`}
      onClick={handleClick}
    >
      <AspectRatio ratio={ratio}>
        <div className="w-full h-full flex items-center justify-center p-3">
          {!imageLoaded && !imageError && (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded flex items-center justify-center">
              <div className="text-gray-400 text-sm">Yükleniyor...</div>
            </div>
          )}
          
          <picture>
            <source 
              srcSet={getOptimizedImageSrc(src)} 
              type="image/webp"
              onError={handleImageError}
            />
            <img 
              src={src} 
              alt={alt} 
              className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading={index > 3 ? "lazy" : loading}
              decoding={index > 3 ? "async" : "sync"}
              fetchPriority={index < 3 ? "high" : "low"}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </picture>
        </div>
      </AspectRatio>
    </div>
  );
});

ProductImage.displayName = 'ProductImage';

interface ProductImageGalleryProps {
  images: string[];
  productTitle: string;
  aspectRatio?: number;
  gridClassName?: string;
  imageClassName?: string;
  productId?: string;
}

const ProductImageGallery = memo<ProductImageGalleryProps>(({
  images,
  productTitle,
  aspectRatio = 1,
  gridClassName = "grid grid-cols-1 md:grid-cols-3 gap-4",
  imageClassName = "",
  productId = ""
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  const handleImageClick = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Get gallery title translation
  const galleryTitle = t('products.gallery.title');
  
  const imageAlts = React.useMemo(() => 
    images.map((_, index) => `${productTitle} - ${galleryTitle} ${index + 1}`),
    [images, productTitle, galleryTitle]
  );

  return (
    <div className="mb-8">
      <div className={gridClassName}>
        {images.map((image, index) => (
          <ProductImage
            key={`${productId}-${index}`}
            src={image}
            alt={`${productTitle} - ${galleryTitle} ${index + 1}`}
            index={index}
            ratio={aspectRatio}
            loading={index < 3 ? "eager" : "lazy"}
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
});

ProductImageGallery.displayName = 'ProductImageGallery';

export { ProductImage, ProductImageGallery };
