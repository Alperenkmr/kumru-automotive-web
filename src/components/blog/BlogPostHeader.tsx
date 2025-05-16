
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface BlogPostHeaderProps {
  title: string;
  date: string;
  author: string;
  category: string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  date,
  author,
  category,
}) => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  return (
    <>
      {/* Back to Blog link - top */}
      <div className="container mx-auto px-4 mb-4">
        <Button onClick={() => navigate('/blog')} variant="outline" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('blog.backToBlog')}
        </Button>
      </div>
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-kumru-navy">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-600 mb-4">
          <span className="mr-4">{date}</span>
          {author && (
            <span className="mr-4">
              {t('blog.author')} {author}
            </span>
          )}
          {category && (
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {language === 'tr' ? `${t('blog.category')}: ` : ''}{category}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
