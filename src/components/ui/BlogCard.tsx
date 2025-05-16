
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BlogCardProps {
  title: string;
  date: string;
  imageSrc: string;
  author: string;
  excerpt?: string;
  onClick?: () => void;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  imageSrc,
  author,
  excerpt,
  onClick,
  className,
}) => {
  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${className || ''}`}
      onClick={onClick}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="pt-6 px-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        )}
        <div className="text-sm text-gray-500">{date}</div>
      </CardContent>
      <CardFooter className="pt-0 px-6 pb-6">
        <div className="text-sm text-gray-600">By {author}</div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
