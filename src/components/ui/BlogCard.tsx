
import React from "react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  author: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  imageSrc,
  author,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group",
        className
      )}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-kumru-teal text-white py-1 px-3 rounded-tr-lg text-sm">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-kumru-teal transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {author}</span>
          <span className="text-kumru-teal font-medium text-sm">Read More →</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
