
import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Search } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/locales/types";
import { useBlogService } from "@/services/BlogService";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Use the hook-based blog service instead of the standalone function
  const { getAllPosts } = useBlogService();
  const allPosts = getAllPosts();
  
  // Filter posts based on search term and category
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories
  const categories = ["all", ...Array.from(new Set(allPosts.map(post => post.category)))];

  return (
    <>
      <SEO 
        title={language === 'tr' ? "Blog ve Haberler" : "Blog and News"}
        description={language === 'tr' 
          ? "Hidrolik sistemler, otomotiv parçaları ve endüstriyel çözümler hakkında en son haberler, makaleler ve teknik bilgiler." 
          : "Latest news, articles and technical information about hydraulic systems, automotive parts and industrial solutions."
        }
        canonicalUrl="/blog"
      />
      
      <Header />
      
      <Container>
        <div className="py-12 md:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-kumru-navy">
            {t('blog.latestArticles' as TranslationKey)}
          </h1>
          
          {/* Filters */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-kumru-navy"
                placeholder={t('blog.searchPlaceholder' as TranslationKey)}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label={t('blog.searchPlaceholder' as TranslationKey)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" aria-hidden="true" />
            </div>
            
            {/* Category filter */}
            <div>
              <select
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-kumru-navy"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label={t('blog.category' as TranslationKey)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category === "all" ? t('blog.allCategories' as TranslationKey) : category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Sort (placeholder) */}
            <div>
              <select
                className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-kumru-navy"
                defaultValue="latest"
                aria-label={t('blog.latestFirst' as TranslationKey)}
              >
                <option value="latest">{t('blog.latestFirst' as TranslationKey)}</option>
              </select>
            </div>
          </div>
          
          {/* Blog posts grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  author={post.author}
                  href={post.href}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">{t('blog.noPostsFound' as TranslationKey)}</p>
            </div>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default BlogPage;
