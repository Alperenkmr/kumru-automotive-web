
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  // Blog post database with translated content
  const blogPosts = {
    "hydraulic-hose-pressure-ratings": {
      titleKey: 'blog.post.hydraulicHosePressure.title',
      contentKey: 'blog.post.hydraulicHosePressure.content',
      date: "May 2, 2023",
      author: "John Smith",
      category: "Technical",
      banner: "/lovable-uploads/c67f11da-5f6e-4947-967b-561db5be6fbc.png",
      relatedImages: [
        "/lovable-uploads/5c3fa32b-aab5-446d-a9ba-539f21f39547.png",
        "/lovable-uploads/3f867c1f-5292-4c0b-86d2-8c9a7349577b.png"
      ]
    },

    "ptfe-vs-rubber-hoses-comparison": {
      titleKey: 'blog.post.ptfeVsRubber.title',
      contentKey: 'blog.post.ptfeVsRubber.content',
      date: "April 18, 2023",
      author: "Emily Johnson",
      category: "Product Comparison",
      banner: "/lovable-uploads/7fa516f9-9179-47be-a76b-bc95ff5fc8e3.png",
      relatedImages: [
        "/lovable-uploads/da69821b-9f92-470a-943b-7ef7e6056815.png",
        "/lovable-uploads/c8e142ce-26b4-4ee2-bbc2-7827ad360884.png"
      ]
    },
    
    "hydraulic-hose-maintenance-tips": {
      titleKey: 'blog.post.maintenance.title',
      contentKey: 'blog.post.maintenance.content',
      date: "April 5, 2023",
      author: "Robert Miller",
      category: "Maintenance",
      banner: "/lovable-uploads/b1a8a813-45c6-4ebe-a086-4399557903c0.png",
      relatedImages: [
        "/lovable-uploads/6e049ebd-b21b-495d-82cf-0fcdaf7e5050.png",
        "/lovable-uploads/867624b9-6709-490a-83c1-03974aa13c11.png"
      ]
    },
    
    "turbo-oil-pipe-innovations": {
      titleKey: 'blog.post.turboOil.title',
      contentKey: 'blog.post.turboOil.content',
      date: "March 22, 2023",
      author: "Sarah Wilson",
      category: "Technology",
      banner: "/lovable-uploads/35cc28ff-b5ca-441f-824d-b980213e7a24.png",
      relatedImages: [
        "/lovable-uploads/04acc924-07a4-4cc4-851f-19cda4219f9c.png",
        "/lovable-uploads/7534c77e-f1b8-4257-8769-fb95f8923cce.png"
      ]
    },
    
    "selecting-right-fittings": {
      titleKey: 'blog.post.fittings.title',
      contentKey: 'blog.post.fittings.content',
      date: "March 10, 2023",
      author: "David Thompson",
      category: "Technical Guide",
      banner: "/lovable-uploads/a346c74e-9889-4d7b-8cd9-86a0ff46b89d.png",
      relatedImages: [
        "/lovable-uploads/395071ba-a18c-4d9d-b4e6-aabc0fcf811d.png",
        "/lovable-uploads/91afff90-ba4d-4b01-a817-bb9f8fa348d4.png"
      ]
    },
    
    "hydraulic-systems-electric-vehicles": {
      titleKey: 'blog.post.evHydraulics.title',
      contentKey: 'blog.post.evHydraulics.content',
      date: "February 25, 2023",
      author: "Michael Lee",
      category: "Industry Trends",
      banner: "/lovable-uploads/276c3c3f-5523-4672-b280-b673bb29c985.png",
      relatedImages: [
        "/lovable-uploads/7a469edd-2042-4081-baf6-cd67f6e82085.png",
        "/lovable-uploads/bb6611a3-ff57-4d6d-abb1-616951928c32.png"
      ]
    }
  };

  const post = blogId && (blogPosts[blogId as keyof typeof blogPosts] || null);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
            <Button onClick={() => navigate('/blog')} variant="outline" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('blog.backToBlog')}
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get translated content from translations
  const title = t(post.titleKey as any);
  const content = t(post.contentKey as any);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Back to Blog link - top */}
        <div className="container mx-auto px-4 mb-4">
          <Button onClick={() => navigate('/blog')} variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('blog.backToBlog')}
          </Button>
        </div>
        
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
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 text-kumru-navy">
                  {title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-600 mb-4">
                  <span className="mr-4">{post.date}</span>
                  {post.author && (
                    <span className="mr-4">
                      {t('blog.author')} {post.author}
                    </span>
                  )}
                  {post.category && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {language === 'tr' ? `${t('blog.category')}: ` : ''}{post.category}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              
              {/* Related Images */}
              {post.relatedImages && post.relatedImages.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">{t('blog.relatedImages')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {post.relatedImages.map((image, index) => (
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
              )}
              
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
