
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  date: string;
  author?: string;
  imageSrc: string;
  excerpt?: string;
  href?: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  author,
  imageSrc,
  excerpt,
  href = "#",
  className,
}) => {
  const cardContent = (
    <Card className={cn("h-full flex flex-col overflow-hidden transition-shadow hover:shadow-md", className)}>
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-kumru-navy line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {excerpt && <p className="text-gray-600 line-clamp-3">{excerpt}</p>}
      </CardContent>
      
      <CardFooter className="pt-2 border-t text-sm text-gray-500 flex justify-between items-center">
        <span>{date}</span>
        {author && <span className="italic">{author}</span>}
      </CardFooter>
    </Card>
  );

  // If href is provided, wrap the card content with Link
  if (href) {
    return <Link to={href}>{cardContent}</Link>;
  }

  return cardContent;
};

export default BlogCard;
