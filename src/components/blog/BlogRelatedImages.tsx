
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogRelatedImagesProps {
  images: string[];
  title: string;
}

const BlogRelatedImages: React.FC<BlogRelatedImagesProps> = ({ images, title }) => {
  const { t, language } = useLanguage();

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">{t('blog.relatedImages')}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <AspectRatio ratio={16/9}>
              <img 
                src={image} 
                alt={`${language === 'tr' ? 'İlgili görsel' : 'Related image'} ${index + 1} - ${title}`} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRelatedImages;
