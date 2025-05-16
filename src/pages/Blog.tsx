
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/BlogCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();
  
  const blogPosts = [
    {
      id: 1,
      titleKey: 'blog.post.hydraulicHosePressure.title',
      date: "May 2, 2023",
      imageSrc: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      author: "John Smith",
      excerptKey: 'blog.post.hydraulicHosePressure.excerpt',
      slug: "hydraulic-hose-pressure-ratings"
    },
    {
      id: 2,
      titleKey: 'blog.post.ptfeVsRubber.title',
      date: "April 18, 2023",
      imageSrc: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      author: "Emily Johnson",
      excerptKey: 'blog.post.ptfeVsRubber.excerpt',
      slug: "ptfe-vs-rubber-hoses-comparison"
    },
    {
      id: 3,
      titleKey: 'blog.post.maintenance.title',
      date: "April 5, 2023",
      imageSrc: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      author: "Robert Miller",
      excerptKey: 'blog.post.maintenance.excerpt',
      slug: "hydraulic-hose-maintenance-tips"
    },
    {
      id: 4,
      titleKey: 'blog.post.turboOil.title',
      date: "March 22, 2023",
      imageSrc: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
      author: "Sarah Wilson",
      excerptKey: 'blog.post.turboOil.excerpt',
      slug: "turbo-oil-pipe-innovations"
    },
    {
      id: 5,
      titleKey: 'blog.post.fittings.title',
      date: "March 10, 2023",
      imageSrc: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      author: "David Thompson",
      excerptKey: 'blog.post.fittings.excerpt',
      slug: "selecting-right-fittings"
    },
    {
      id: 6,
      titleKey: 'blog.post.evHydraulics.title',
      date: "February 25, 2023",
      imageSrc: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      author: "Michael Lee",
      excerptKey: 'blog.post.evHydraulics.excerpt',
      slug: "hydraulic-systems-electric-vehicles"
    },
  ];

  // Filter blogs based on search query
  const filteredBlogs = blogPosts.filter(blog => 
    t(blog.titleKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t(blog.excerptKey).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <section className="section-padding">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-kumru-navy">Blog</h1>
            
            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder={t('blog.searchPlaceholder')} 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="whitespace-nowrap">{t('blog.allCategories')}</Button>
                  <Button variant="outline" className="whitespace-nowrap">{t('blog.latestFirst')}</Button>
                </div>
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((post) => (
                <BlogCard
                  key={post.id}
                  title={t(post.titleKey)}
                  date={post.date}
                  imageSrc={post.imageSrc}
                  author={post.author}
                  excerpt={t(post.excerptKey)}
                  onClick={() => handleBlogClick(post.slug)}
                  className="cursor-pointer"
                />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">{t('blog.noPostsFound')}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
