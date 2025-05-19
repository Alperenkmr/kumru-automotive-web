
import React, { useState, useEffect } from "react";
import { ProductImage } from "../ProductImageGallery";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface VesselLinesGalleryProps {
  images: string[];
  productTitle: string;
}

const VesselLinesGallery: React.FC<VesselLinesGalleryProps> = ({ images, productTitle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

  // For desktop: 3+3+1 layout (first 3 in top row, next 3 in middle row, last one full width at bottom)
  const renderDesktopGallery = () => (
    <div className="space-y-4">
      {/* First row - 3 images */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(0, 3).map((image, index) => (
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
      
      {/* Second row - 3 images */}
      <div className="grid grid-cols-3 gap-4">
        {images.slice(3, 6).map((image, index) => (
          <ProductImage
            key={index + 3}
            src={image}
            alt={`${productTitle} - Image ${index + 4}`}
            index={index + 3}
            ratio={4/3}
            className="h-full"
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      
      {/* Third row - 1 or 2 images depending on how many we have */}
      {images.length > 6 && (
        <div className={cn(
          "grid gap-4",
          images.length === 7 ? "grid-cols-1" : "grid-cols-2"
        )}>
          {images.slice(6).map((image, index) => (
            <ProductImage
              key={index + 6}
              src={image}
              alt={`${productTitle} - Image ${index + 7}`}
              index={index + 6}
              ratio={3/1}
              className="h-full"
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      )}
    </div>
  );

  // For mobile: carousel slider
  const renderMobileGallery = () => (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="md:basis-1/1">
            <div className="p-1">
              <ProductImage
                src={image}
                alt={`${productTitle} - Image ${index + 1}`}
                index={index}
                ratio={1}
                onImageClick={handleImageClick}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative static mx-2 translate-y-0" />
        <CarouselNext className="relative static mx-2 translate-y-0" />
      </div>
    </Carousel>
  );

  return (
    <div className="mb-8">
      {isMobile ? renderMobileGallery() : renderDesktopGallery()}
      
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

export default VesselLinesGallery;
