
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPostNotFound: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
        <Button onClick={() => navigate('/blog')} variant="outline" className="mt-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> {t('blog.backToBlog')}
        </Button>
      </div>
    </main>
  );
};

export default BlogPostNotFound;
