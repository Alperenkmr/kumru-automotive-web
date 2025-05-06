
import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  
  // Mock blog data - in a real app, this would come from an API
  const blogPosts = {
    "understanding-hydraulic-hose": {
      title: "Understanding Hydraulic Hose Pressure Ratings",
      date: "May 2, 2023",
      author: "John Smith",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      content: `
        <h2>Introduction to Hydraulic Pressure Ratings</h2>
        <p>Hydraulic hoses are critical components in fluid power systems, designed to withstand high-pressure operations while maintaining flexibility. Understanding pressure ratings is essential for selecting the right hose for your application.</p>
        
        <h3>What Determines Pressure Ratings?</h3>
        <p>Several factors influence a hydraulic hose's pressure rating:</p>
        <ul>
          <li>Hose construction materials</li>
          <li>Number of reinforcement layers</li>
          <li>Inner tube and outer cover composition</li>
          <li>Manufacturing techniques</li>
        </ul>
        
        <h3>Different Types of Pressure Ratings</h3>
        <p>When selecting hydraulic hoses, you'll encounter several different pressure specifications:</p>
        <ul>
          <li><strong>Working Pressure:</strong> The maximum pressure at which a hose can operate continuously at a specified temperature.</li>
          <li><strong>Burst Pressure:</strong> The pressure at which a hose is expected to rupture. This is typically 4 times the working pressure for industrial hoses.</li>
          <li><strong>Proof Pressure:</strong> A test pressure, usually twice the working pressure, applied to verify the integrity of the hose.</li>
        </ul>
        
        <blockquote>
          "Always select a hose with a working pressure rating that exceeds the maximum system pressure by at least 25% to account for pressure spikes and ensure long-term reliability."
        </blockquote>

        <h2>Safety Considerations</h2>
        <p>Using a hydraulic hose at pressures exceeding its rated working pressure can lead to:</p>
        <ul>
          <li>Premature failure</li>
          <li>Dangerous ruptures</li>
          <li>System inefficiency</li>
          <li>Equipment damage</li>
        </ul>
        
        <h3>Temperature Effects on Pressure Ratings</h3>
        <p>It's important to note that a hose's pressure rating decreases as operating temperature increases. Always consult manufacturer specifications for temperature derating factors.</p>
      `
    },
    "ptfe-vs-rubber": {
      title: "PTFE vs. Rubber Hoses: A Comprehensive Comparison",
      date: "April 18, 2023",
      author: "Emily Johnson",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      content: `
        <h2>Introduction to Hose Materials</h2>
        <p>When selecting hoses for hydraulic and fluid transfer applications, engineers must often choose between PTFE (Polytetrafluoroethylene) and rubber materials. Each offers distinct advantages depending on the application requirements.</p>
        
        <h2>PTFE Hoses: Advantages and Limitations</h2>
        <p>PTFE hoses have revolutionized fluid handling in extreme environments. Here's why:</p>
        
        <h3>Advantages of PTFE</h3>
        <ul>
          <li>Exceptional chemical resistance to virtually all industrial chemicals</li>
          <li>Wide temperature range (-65°F to 450°F)</li>
          <li>Very low friction coefficient</li>
          <li>Non-stick surface prevents contamination</li>
          <li>Excellent electrical insulation properties</li>
        </ul>
        
        <h3>Limitations of PTFE</h3>
        <ul>
          <li>Higher initial cost compared to rubber</li>
          <li>Lower flexibility in some configurations</li>
          <li>Can be vulnerable to kinking</li>
          <li>May require special fittings</li>
        </ul>

        <blockquote>
          "PTFE is the preferred choice in applications where chemical compatibility, high purity, or extreme temperatures are primary concerns."
        </blockquote>
        
        <h2>Rubber Hoses: Advantages and Limitations</h2>
        
        <h3>Advantages of Rubber</h3>
        <ul>
          <li>More economical initial investment</li>
          <li>Excellent flexibility and bend radius</li>
          <li>Superior vibration absorption</li>
          <li>Good general-purpose performance</li>
          <li>Wide variety of formulations for different applications</li>
        </ul>
        
        <h3>Limitations of Rubber</h3>
        <ul>
          <li>Limited chemical resistance</li>
          <li>Narrower temperature range</li>
          <li>Higher permeability</li>
          <li>Potential for contamination in high-purity applications</li>
        </ul>
      `
    }
  };

  const post = blogId && blogPosts[blogId as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-24">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold">Blog post not found</h1>
            <Link to="/blog" className="text-kumru-navy hover:underline mt-4 inline-block">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        {/* Back to Blog link (top) */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/blog" className="text-kumru-navy hover:underline inline-block">
            ← Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 bg-gray-200 relative mb-8">
          <img 
            src={post.imageSrc}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Blog Content */}
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 text-kumru-navy">
            {post.title}
          </h1>
          
          <div className="flex items-center mb-8 text-gray-600">
            <span className="mr-4">{post.date}</span>
            {post.author && (
              <span>By {post.author}</span>
            )}
          </div>
          
          {/* Blog content using dangerouslySetInnerHTML - in a real app you'd want to use a proper rich text renderer */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Back to Blog link (bottom) */}
          <div className="mt-12">
            <Link to="/blog" className="text-kumru-navy hover:underline inline-block">
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
