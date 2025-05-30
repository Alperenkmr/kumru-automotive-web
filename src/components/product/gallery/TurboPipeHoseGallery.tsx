
import React, { useState } from "react";
import { ProductImage } from "../ProductImageGallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageLightbox from "@/components/ui/ImageLightbox";

interface TurboPipeHoseGalleryProps {
  images: string[];
  productTitle: string;
}

const TurboPipeHoseGallery: React.FC<TurboPipeHoseGalleryProps> = ({ images, productTitle }) => {
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
      {/* Desktop Layout - 4x3 Grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ProductImage
            key={index}
            src={image}
            alt={`${productTitle} - Image ${index + 1}`}
            index={index}
            ratio={3/4}
            loading={index > 7 ? "lazy" : "eager"}
            onImageClick={handleImageClick}
          />
        ))}
      </div>
      
      {/* Mobile Layout - Slider */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg shadow-md">
                    <ProductImage
                      src={image} 
                      alt={`${productTitle} - Image ${index + 1}`}
                      index={index}
                      ratio={3/4}
                      loading={index > 3 ? "lazy" : "eager"}
                      className="h-full"
                      onImageClick={handleImageClick}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
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

export default TurboPipeHoseGallery;
