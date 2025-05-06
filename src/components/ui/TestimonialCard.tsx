
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  company,
  rating,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-md p-6 lg:p-8 relative",
        className
      )}
    >
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-kumru-teal opacity-20 text-6xl font-serif">
        "
      </div>

      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={i < rating ? "#FF6F00" : "#E2E8F0"}
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>

      <blockquote className="text-lg mb-6 relative z-10">"{quote}"</blockquote>

      <div className="flex items-center">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center font-bold text-kumru-teal">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
