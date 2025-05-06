
import React from "react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  date: string;
  imageSrc: string;
  author?: string;
  href?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  imageSrc,
  author,
  href = "#"
}) => {
  return (
    <Link 
      to={href} 
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className="h-48 bg-gray-200"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <span>{date}</span>
          {author && (
            <>
              <span className="mx-2">•</span>
              <span>{author}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
