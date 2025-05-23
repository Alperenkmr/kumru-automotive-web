
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogRelatedImages from "@/components/blog/BlogRelatedImages";
import BlogPostNotFound from "@/components/blog/BlogPostNotFound";
import { useBlogService } from "@/services/BlogService";

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const { getBlogPost } = useBlogService();
  
  const { post, title, content } = getBlogPost(blogId);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <BlogPostNotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={title}
        description={post.excerpt || `${title} - RSS Kumru Automotive blog yazısı`}
        canonicalUrl={`/blog/${blogId}`}
        ogType="article"
        ogImage={post.banner}
      />
      <Header />
      <main className="pt-24">
        <BlogPostHeader 
          title={title}
          date={post.date}
          author={post.author}
          category={post.category}
        />
        
        {/* Banner Image */}
        <div className="w-full mb-8">
          <AspectRatio ratio={3/1}>
            <img 
              src={post.banner} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        {/* Blog Post Content */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <BlogPostContent content={content} />
              
              <BlogRelatedImages 
                images={post.relatedImages || []}
                title={title}
              />
              
              {/* Back to Blog link - bottom */}
              <div className="mt-12">
                <Button 
                  onClick={() => navigate('/blog')}
                  className="bg-kumru-navy text-white px-6 py-3 rounded-lg hover:bg-kumru-navy/90 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> {t('blog.backToBlog')}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
