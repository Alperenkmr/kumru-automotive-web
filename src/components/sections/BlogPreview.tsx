
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
      date: "May 2, 2023",
      imageSrc: "https://source.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    },
    {
      title: "PTFE vs. Rubber Hoses: A Comprehensive Comparison",
      date: "April 18, 2023",
      imageSrc: "https://source.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    },
    {
      title: "Maintenance Tips for Extending Hydraulic Hose Life",
      date: "April 5, 2023",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
    },
  ];

  return (
    <section
      id="blog"
      className={cn(
        "section-padding bg-gray-50",
        className
      )}
    >
      <div className="container mx-auto">
        <h2 className="section-title text-kumru-black">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              imageSrc={post.imageSrc}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-kumru-navy hover:bg-kumru-navy/90 text-white">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
