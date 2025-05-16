
import React from "react";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";

interface BlogPreviewProps {
  className?: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ className }) => {
  const { t, language } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post.hydraulicHosePressure.title',
      date: "May 2, 2023",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      author: "John Smith",
      href: "/blog/hydraulic-hose-pressure-ratings"
    },
    {
      id: 2,
      titleKey: 'blog.post.ptfeVsRubber.title',
      date: "April 18, 2023",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      author: "Emily Johnson",
      href: "/blog/ptfe-vs-rubber-hoses-comparison"
    },
    {
      id: 3,
      titleKey: 'blog.post.maintenance.title',
      date: "April 5, 2023",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      author: "Robert Miller",
      href: "/blog/hydraulic-hose-maintenance-tips"
    },
  ];

  return (
    <section
      id="blog"
      className={cn(
        "section-padding bg-white relative",
        className
      )}
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-gray-50 rounded-bl-[100px]"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/3 bg-gray-50 rounded-tr-[80px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kumru-navy">{t('blog.latestArticles')}</h2>
          
          <Link to="/blog" className="mt-4 md:mt-0 group flex items-center text-kumru-navy hover:text-kumru-navy/80 transition-colors">
            <span className="font-medium">{t('blog.viewAll')}</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={t(post.titleKey)}
              date={post.date}
              imageSrc={post.imageSrc}
              author={post.author}
              href={post.href}
              className="animate-on-scroll"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-kumru-navy hover:bg-kumru-navy/90 text-white" asChild>
            <Link to="/blog">{t('blog.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
