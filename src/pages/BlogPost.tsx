
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  
  // Mock blog post data - would come from an API in a real app
  const blogPost = {
    title: "Understanding Hydraulic Hose Pressure Ratings",
    date: "May 2, 2023",
    author: "John Smith",
    category: "Technical",
    banner: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    content: `
      <h2>Understanding Pressure Ratings</h2>
      <p>Hydraulic hoses are critical components in fluid power systems, designed to withstand high-pressure fluid transmission between hydraulic components. Understanding their pressure ratings is essential for proper selection and safe operation.</p>
      
      <p>The pressure rating of a hydraulic hose indicates the maximum internal pressure that the hose can safely handle during operation. This rating is determined through extensive testing and is influenced by various factors such as:</p>
      
      <ul>
        <li>Hose construction materials</li>
        <li>Number of reinforcement layers</li>
        <li>Inner tube and outer cover compounds</li>
        <li>Hose diameter and wall thickness</li>
        <li>Operating temperature</li>
      </ul>
      
      <h3>Types of Pressure Ratings</h3>
      
      <p>When selecting hydraulic hoses, it's important to understand the different pressure specifications:</p>
      
      <h4>Working Pressure</h4>
      <p>The working pressure is the maximum pressure at which the hose can operate continuously under normal conditions. This is the most important specification for routine selection.</p>
      
      <h4>Burst Pressure</h4>
      <p>Burst pressure represents the pressure at which the hose is expected to rupture. Industry standards typically require burst pressure to be at least four times the working pressure for added safety.</p>
      
      <blockquote>
        "Always select a hydraulic hose with a working pressure rating that exceeds the maximum system pressure by at least 25% to account for pressure spikes and ensure long-term reliability."
      </blockquote>
      
      <h2>Factors Affecting Pressure Handling</h2>
      <p>Several factors can reduce a hose's ability to handle its rated pressure:</p>
      
      <ol>
        <li><strong>Temperature:</strong> Elevated temperatures can significantly decrease a hose's pressure capacity. For every 20°F increase above 100°F, the working pressure may need to be reduced by 10%.</li>
        <li><strong>Bending:</strong> Sharp bends near hose fittings can reduce pressure capacity and lead to premature failure.</li>
        <li><strong>Aging:</strong> Over time, exposure to environmental factors can degrade hose materials, reducing their pressure capacity.</li>
      </ol>
    `,
  };

  // Simple function to render HTML content safely
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Back to Blog link - top */}
        <div className="container mx-auto px-4 mb-4">
          <Link to="/blog" className="text-kumru-navy hover:underline flex items-center">
            ← Back to Blog
          </Link>
        </div>
        
        {/* Banner Image */}
        <div className="w-full mb-8">
          <AspectRatio ratio={3/1}>
            <img 
              src={blogPost.banner} 
              alt={blogPost.title} 
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
                  {blogPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-gray-600 mb-4">
                  <span className="mr-4">{blogPost.date}</span>
                  {blogPost.author && (
                    <span className="mr-4">By {blogPost.author}</span>
                  )}
                  {blogPost.category && (
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {blogPost.category}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={createMarkup(blogPost.content)}
              />
              
              {/* Back to Blog link - bottom */}
              <div className="mt-12">
                <Link 
                  to="/blog" 
                  className="inline-block bg-kumru-navy text-white px-6 py-3 rounded-lg hover:bg-kumru-navy/90 transition-colors"
                >
                  Back to Blog
                </Link>
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
