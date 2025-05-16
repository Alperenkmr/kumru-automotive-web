
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductImageProps {
  src: string;
  alt: string;
  index: number;
  ratio?: number;
  loading?: "lazy" | "eager";
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ 
  src, 
  alt, 
  index, 
  ratio = 1, 
  loading = "eager",
  className = ""
}) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className}`}>
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
          />
        ))}
      </div>
    </div>
  );
};

export { ProductImage, ProductImageGallery };
