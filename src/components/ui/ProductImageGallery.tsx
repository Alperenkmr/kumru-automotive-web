
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ImageModal from "@/components/ui/ImageModal";

interface ProductImageGalleryProps {
  images: string[];
  title: string;
  layout?: "grid-2x2" | "grid-3x1" | "grid-3x2" | "grid-4x2" | "grid-default";
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  images, 
  title, 
  layout = "grid-default" 
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case "grid-2x2":
        return "grid grid-cols-1 sm:grid-cols-2 gap-4";
      case "grid-3x1":
        return "grid grid-cols-2 md:grid-cols-3 gap-4";
      case "grid-3x2":
        return "grid grid-cols-2 md:grid-cols-3 gap-4";
      case "grid-4x2":
        return "grid grid-cols-2 md:grid-cols-4 gap-4";
      default:
        return "grid grid-cols-1 md:grid-cols-3 gap-4";
    }
  };

  return (
    <div className="mb-8">
      <div className={getLayoutClasses()}>
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleImageClick(image)}>
            <AspectRatio ratio={16/9}>
              <img 
                src={image} 
                alt={`${title} - Image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleCloseModal}
          imageUrl={selectedImage}
          imageAlt={`${title} enlarged view`}
        />
      )}
    </div>
  );
};

export default ProductImageGallery;
