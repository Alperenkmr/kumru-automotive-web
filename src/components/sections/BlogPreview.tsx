
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import { TranslationKey } from "@/locales/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";

interface BlogPreviewProps {
  className?: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ className }) => {
  const { t, language } = useLanguage();
  const [api, setApi] = useState<any>(null);
  
  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post.hydraulicHosePressure.title' as TranslationKey,
      date: "May 2, 2023",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      author: "Alperen Kumru",
      href: "/blog/hydraulic-hose-pressure-ratings"
    },
    {
      id: 2,
      titleKey: 'blog.post.ptfeVsRubber.title' as TranslationKey,
      date: "April 18, 2023",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      author: "Furkan Kumru",
      href: "/blog/ptfe-vs-rubber-hoses-comparison"
    },
    {
      id: 3,
      titleKey: 'blog.post.maintenance.title' as TranslationKey,
      date: "April 5, 2023",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      author: "Ufuk Şahin",
      href: "/blog/hydraulic-hose-maintenance-tips"
    },
  ];

  // Setup autoplay plugin instance
  const autoplayPlugin = useCallback(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

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
          <h2 className="text-3xl md:text-4xl font-bold text-kumru-navy">{t('blog.latestArticles' as TranslationKey)}</h2>
          
          <Link to="/blog" className="mt-4 md:mt-0 group flex items-center text-kumru-navy hover:text-kumru-navy/80 transition-colors">
            <span className="font-medium">{t('blog.viewAll' as TranslationKey)}</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          plugins={[autoplayPlugin()]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {blogPosts.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <BlogCard
                  title={t(post.titleKey)}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  author={post.author}
                  href={post.href}
                  className="animate-on-scroll"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="text-center mt-12">
          <Button className="bg-kumru-navy hover:bg-kumru-navy/90 text-white" asChild>
            <Link to="/blog">{t('blog.viewAll' as TranslationKey)}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
