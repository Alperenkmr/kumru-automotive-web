
import React from "react";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BlogPreviewProps {
  className?: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ className }) => {
  const blogPosts = [
    {
      title: "Understanding Hydraulic Hose Pressure Ratings",
      excerpt:
        "Learn how to select the right pressure rating for your hydraulic system to ensure safety and performance.",
      date: "May 2, 2023",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
      author: "David Chen",
    },
    {
      title: "PTFE vs. Rubber Hoses: A Comprehensive Comparison",
      excerpt:
        "Explore the differences between PTFE and rubber hoses, and determine which is best for your application.",
      date: "April 18, 2023",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      author: "Sarah Johnson",
    },
    {
      title: "Maintenance Tips for Extending Hydraulic Hose Life",
      excerpt:
        "Follow these maintenance practices to maximize the longevity and reliability of your hydraulic hose systems.",
      date: "April 5, 2023",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      author: "Michael Williams",
    },
  ];

  return (
    <section
      id="blog"
      className={cn(
        "section-padding bg-kumru-white",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="section-title">Latest Articles</h2>
        <p className="section-subtitle">
          Stay informed with our latest insights on hydraulic technology and industry trends.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              imageSrc={post.imageSrc}
              author={post.author}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-kumru-teal hover:bg-kumru-teal/90">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
