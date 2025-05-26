
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
  productTitle?: string;
}

const ProductImage = memo<ProductImageProps>(({ 
  src, 
  alt, 
  index, 
  ratio = 1, 
  loading = "lazy",
  className = "",
  onImageClick,
  productTitle = ""
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  // Optimize edilmiş alt text
  const optimizedAlt = `${productTitle ? `${productTitle} - ` : ''}${alt} - RSS Kumru Automotive yüksek kaliteli otomotiv parçaları`;

  return (
    <div 
      className={`overflow-hidden rounded-lg shadow-md ${className} cursor-pointer bg-white border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg focus-within:ring-2 focus-within:ring-kumru-blue focus-within:ring-offset-2`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${optimizedAlt} - Resmi büyütmek için tıklayın`}
    >
      <AspectRatio ratio={ratio}>
        <div className="w-full h-full flex items-center justify-center p-3 bg-white">
          {!imageLoaded && !imageError && (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded flex items-center justify-center">
              <div className="text-gray-400 text-sm" aria-hidden="true">Yükleniyor...</div>
            </div>
          )}
          
          <img 
            src={src} 
            alt={optimizedAlt}
            className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading={index > 3 ? "lazy" : loading}
            decoding={index > 3 ? "async" : "sync"}
            fetchPriority={index < 3 ? "high" : "low"}
            onLoad={handleImageLoad}
            onError={handleImageError}
            width="400"
            height="400"
            style={{ display: 'block' }}
          />
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
  const { t, language } = useLanguage();

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
  
  // Optimize edilmiş alt text'ler
  const imageAlts = React.useMemo(() => 
    images.map((_, index) => {
      const baseAlt = `${productTitle} - ${galleryTitle} ${index + 1}`;
      const detailDescription = index === 0 ? " - Ürün ana görsel" : 
                               index === 1 ? " - Ürün detay görsel" :
                               index === 2 ? " - Teknik özellikler" :
                               ` - Görsel ${index + 1}`;
      return `${baseAlt}${detailDescription} - RSS Kumru Automotive kaliteli otomotiv parçaları`;
    }),
    [images, productTitle, galleryTitle]
  );

  return (
    <div className="mb-8">
      <div 
        className={gridClassName} 
        role="grid" 
        aria-label={`${productTitle} ürün galerisi`}
      >
        {images.map((image, index) => (
          <ProductImage
            key={`${productId}-${index}`}
            src={image}
            alt={imageAlts[index]}
            index={index}
            ratio={aspectRatio}
            loading={index < 3 ? "eager" : "lazy"}
            className={imageClassName}
            onImageClick={handleImageClick}
            productTitle={productTitle}
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
